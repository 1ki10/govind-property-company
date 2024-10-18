import Image from 'next/image';
import styles from './PropertyCard.module.css';

interface PropertyCardProps {
  imageUrl: string;
  location: string;
  price: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ imageUrl, location, price }) => {
  return (
    <div className={styles.card}>
      <Image src={imageUrl} alt={location} width={300} height={200} layout="responsive" />
      <div className={styles.info}>
        <p className={styles.location}>{location}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
}

export default PropertyCard;