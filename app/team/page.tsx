'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './team.module.css';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  email: string;
}

interface RandomUserApiResponse {
  results: {
    name: {
      first: string;
      last: string;
    };
    picture: {
      large: string;
    };
    email: string;
  }[];
}

const TeamPage: React.FC = () => {
  const [propertyManager, setPropertyManager] = useState<TeamMember | null>(null);
  const [otherMembers, setOtherMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=9')
      .then(response => response.json())
      .then((data: RandomUserApiResponse) => {
        const formattedTeamMembers = data.results.map((user, index) => ({
          id: index,
          name: `${user.name.first} ${user.name.last}`,
          position: index === 0 ? 'Property Manager' : ['Real Estate Agent', 'Financial Advisor', 'Marketing Specialist'][index % 3],
          image: user.picture.large,
          email: user.email
        }));
        
        setPropertyManager(formattedTeamMembers[0]);
        setOtherMembers(formattedTeamMembers.slice(1));
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.teamContainer}>
        <h1 className={styles.title}>OUR TEAM</h1>
        <h2 className={styles.subtitle}>Meet The Team</h2>
        
        {propertyManager && (
          <div className={styles.propertyManager}>
            <div className={styles.memberImageWrapper}>
              <Image 
                src={propertyManager.image} 
                alt={propertyManager.name} 
                layout="fill" 
                objectFit="cover" 
                className={styles.memberImage} 
              />
            </div>
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>{propertyManager.name}</h3>
              <p className={styles.memberPosition}>{propertyManager.position}</p>
              <p className={styles.memberEmail}>{propertyManager.email}</p>
            </div>
          </div>
        )}
        
        <div className={styles.teamGrid}>
          {otherMembers.map((member) => (
            <div key={member.id} className={styles.teamMemberCard}>
              <div className={styles.memberImageWrapper}>
                <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" className={styles.memberImage} />
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberPosition}>{member.position}</p>
                <p className={styles.memberEmail}>{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;