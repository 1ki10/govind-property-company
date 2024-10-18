import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Header from '../components/Header';
import PropertySlider from '../components/PropertySlider';
import TestimonialCarousel from '../components/TestimonialCarousel';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main>
        <section className={styles.hero}>
          <video autoPlay loop muted className={styles.bgVideo}>
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroContent}>
            <h1>Your Lifestyle, Our Priority</h1>
            <h2>Find Your Home, From Skylines to Horizons</h2>
            <Link href="/properties" className={styles.cta}>SEARCH PROPERTIES</Link>
          </div>
        </section>

        <section className={styles.featuredProperties}>
          <h2>Featured Properties</h2>
          <PropertySlider />
        </section>

        <section className={styles.sellRent}>
          <div className={styles.sellRentContent}>
            <h2 className={styles.sellRentTitle}>Jual/Sewakan Properti?</h2>
            <div className={styles.sellRentFlexContainer}>
              <div className={styles.sellRentText}>
                <p className={styles.sellRentDescription}>
                  Jual atau sewakan properti Anda dengan mudah dan cepat bersama Govind Property. 
                  Cukup lengkapi formulir dan bagikan detail properti. Tim kami akan memandu Anda 
                  sepanjang perjalanan. Dengan jaringan 1000+ agen saling terhubung, properti Anda 
                  akan lebih cepat terjual atau tersewa.
                </p>
                <Link href="/contact" className={styles.cta}>HUBUNGI KAMI SEKARANG</Link>
              </div>
              <div className={styles.sellRentImage}>
                <Image src="/images/sell-rent.jpg" alt="Jual atau Sewa Properti" width={500} height={300} layout="responsive" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.testimonials}>
          <h2>What Our Clients Say</h2>
          <p className={styles.testimonialSubtitle}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          <TestimonialCarousel />
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Address</h3>
            <p>Ciputra World Jakarta 2 - Tokopedia Tower 7th Floor<br />
                 Jl. Prof. Dr. Satrio Kav 11 Karet Semanggi - Setiabudi<br />
                 Jakarta Selatan</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Contact</h3>
            <p>Telepon: 021-2988-2121</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Opening Hours</h3>
            <p>Jam Operasional: Senin - Jumat, 09:00 - 17:00</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}