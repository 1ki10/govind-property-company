'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './PropertySlider.module.css';

interface Property {
  id: number;
  imageUrl: string;
  name: string;
  location: string;
  price: string;
  type: string;
  status: 'BELI' | 'SEWA';
}

const properties: Property[] = [
  { id: 1, imageUrl: '/images/property1.jpg', name: 'Modern Apartment', location: 'Jakarta Selatan', price: 'Rp 2.5 M', type: 'Apartment', status: 'BELI' },
  { id: 2, imageUrl: '/images/property2.jpg', name: 'Luxury Villa', location: 'Bali', price: 'Rp 5.5 M', type: 'Villa', status: 'BELI' },
  { id: 3, imageUrl: '/images/property3.jpg', name: 'City View Condo', location: 'Surabaya', price: 'Rp 25 jt/bulan', type: 'Condo', status: 'SEWA' },
  { id: 4, imageUrl: '/images/property4.jpg', name: 'Riverside House', location: 'Yogyakarta', price: 'Rp 15 jt/bulan', type: 'House', status: 'SEWA' },
  { id: 5, imageUrl: '/images/property5.jpg', name: 'Suburban Home', location: 'Bandung', price: 'Rp 3.2 M', type: 'House', status: 'BELI' },
];

const PropertySlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProperty = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProperty = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  const renderPropertyCard = (property: Property, isMain: boolean = false) => (
    <div className={`${styles.propertyCard} ${!isMain ? styles.sidePropertyShadow : ''}`}>
      <div className={styles.imageContainer}>
        <Image 
          src={property.imageUrl} 
          alt={property.name}
          layout="fill"
          objectFit="cover"
        />
        <div className={`${styles.statusBadge} ${styles[property.status.toLowerCase()]}`}>
          {property.status}
        </div>
      </div>
      {isMain && (
        <div className={styles.propertyInfo}>
          <h3>{property.name}</h3>
          <h4>{property.location}</h4>
          <p className={styles.price}>{property.price}</p>
          <p className={styles.type}>{property.type}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className={styles.sliderContainer}>
      <button onClick={prevProperty} className={`${styles.sliderButton} ${styles.prevButton}`}>&#10094;</button>
      <div className={styles.propertyCardContainer}>
        {renderPropertyCard(properties[(currentIndex - 1 + properties.length) % properties.length])}
        {renderPropertyCard(properties[currentIndex], true)}
        {renderPropertyCard(properties[(currentIndex + 1) % properties.length])}
      </div>
      <button onClick={nextProperty} className={`${styles.sliderButton} ${styles.nextButton}`}>&#10095;</button>
    </div>
  );
};

export default PropertySlider;