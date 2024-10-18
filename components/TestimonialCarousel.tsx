'use client';

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Testimonial from './Testimonial';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './TestimonialCarousel.module.css';

interface User {
  name: { first: string; last: string };
  picture: { large: string };
  login: { username: string };
}

const TestimonialCarousel = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => setUsers(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className={styles.slider}>
      {users.map((user, index) => (
        <Testimonial
          key={user.login.username}
          name={`${user.name.first} ${user.name.last}`}
          role={["Designer", "Store Owner", "Freelancer", "Entrepreneur", "Developer"][index % 5]}
          image={user.picture.large}
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      ))}
    </Slider>
  );
}

export default TestimonialCarousel;