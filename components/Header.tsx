import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/images/company-logo.png" alt="Govind Property Logo" width={40} height={40} />
          <Link href="/">Govind Property</Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/properties">PROPERTIES</Link>
          <Link href="/team">TEAM</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;