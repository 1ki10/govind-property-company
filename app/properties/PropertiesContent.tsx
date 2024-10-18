import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './properties.module.css';

const properties = [
  { id: 1, image: '/images/property1.jpg', title: 'Modern Apartment', location: 'Jakarta Selatan', price: 'Rp 2.5 M', type: 'Apartment', listingType: 'BELI' },
  { id: 2, image: '/images/property2.jpg', title: 'Luxury Villa', location: 'Bali', price: 'Rp 5.5 M', type: 'Villa', listingType: 'BELI' },
  { id: 3, image: '/images/property3.jpg', title: 'Family Home', location: 'Bandung', price: 'Rp 1.8 M', type: 'House', listingType: 'BELI' },
  { id: 4, image: '/images/property4.jpg', title: 'City View Condo', location: 'Surabaya', price: 'Rp 25 jt/bulan', type: 'Apartment', listingType: 'SEWA' },
  { id: 5, image: '/images/property5.jpg', title: 'Riverside House', location: 'Yogyakarta', price: 'Rp 15 jt/bulan', type: 'House', listingType: 'SEWA' },
];

const PropertiesContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [propertyType, setPropertyType] = useState('SEMUA');
  const [listingType, setListingType] = useState('SEMUA');
  const [sortBy, setSortBy] = useState('HARGA');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (propertyType === 'SEMUA' || property.type === propertyType) &&
    (listingType === 'SEMUA' || property.listingType === listingType)
  );

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.propertiesContainer}>
      <h1 className={styles.title}>Properti di Indonesia</h1>
      
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Masukkan kota atau area" 
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.searchButton}>
            Search
          </button>
        </div>
        
        <div className={styles.filterContainer}>
          <button 
            className={`${styles.filterButton} ${listingType === 'SEMUA' ? styles.active : ''}`} 
            onClick={() => setListingType('SEMUA')}
          >
            SEMUA
          </button>
          <button 
            className={`${styles.filterButton} ${listingType === 'BELI' ? styles.active : ''}`} 
            onClick={() => setListingType('BELI')}
          >
            BELI
          </button>
          <button 
            className={`${styles.filterButton} ${listingType === 'SEWA' ? styles.active : ''}`} 
            onClick={() => setListingType('SEWA')}
          >
            SEWA
          </button>
          
          <select 
            className={styles.filterSelect}
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="SEMUA">TIPE PROPERTI: SEMUA</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
          </select>
          
          <button className={styles.filterButton}>FILTER</button>
          
          <select 
            className={styles.sortSelect}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="HARGA">URUTKAN DARI: HARGA</option>
            <option value="TERBARU">TERBARU</option>
            <option value="TERLAMA">TERLAMA</option>
          </select>
        </div>
      </div>
      
      <div className={styles.propertiesGrid}>
        {filteredProperties.map((property) => (
          <div key={property.id} className={styles.propertyCard}>
            <div className={styles.imageContainer}>
              <Image src={property.image} alt={property.title} layout="fill" objectFit="cover" />
            </div>
            <div className={styles.propertyInfo}>
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p className={styles.price}>{property.price}</p>
              <p className={styles.type}>{property.type}</p>
              <p className={styles.listingType}>{property.listingType}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesContent;