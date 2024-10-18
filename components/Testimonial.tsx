import Image from 'next/image';
import styles from './Testimonial.module.css';

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  comment: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, image, comment }) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={styles.starFilled}>★</span>
        ))}
      </div>
      <p className={styles.comment}>{comment}</p>
      <div className={styles.profile}>
        <Image 
          src={image} 
          alt={name} 
          width={60} 
          height={60} 
          className={styles.image}
        />
        <div className={styles.info}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;