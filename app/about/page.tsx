import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './about.module.css';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tentang Govind Property | Broker Properti Terbesar di Indonesia</title>
        <meta name="description" content="Govind Property adalah perusahaan broker properti terkemuka di Indonesia. Pelajari lebih lanjut tentang sejarah dan layanan kami." />
      </Head>
      <main className={styles.aboutContainer}>
        <section className={styles.hero}>
          <h1 className={styles.title}>BROKER PROPERTI TERBESAR DI INDONESIA</h1>
          <p className={styles.subtitle}>Govind Property adalah perusahaan broker properti terkemuka di Indonesia. Beroperasi di seluruh negeri, kami memiliki jaringan luas dengan ribuan profesional penjualan yang berdedikasi.</p>
        </section>

        <section className={styles.videoSection}>
          <div className={styles.videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              title="Govind Property Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
            ></iframe>
          </div>
        </section>

        <section className={styles.historySection}>
          <Image src="/images/founder.jpg" alt="Pendiri Govind Property" width={300} height={200} className={styles.founderImage} />
          <div className={styles.historyText}>
            <p>Berdiri pada tahun 2010, Govind Property didirikan oleh visioner properti Indonesia. Mereka dihormati karena telah mengubah industri properti dan memajukan bisnis broker properti di Indonesia menjadi lebih besar dan berpengaruh secara nasional.</p>
          </div>
        </section>

        <section className={styles.companyOverview}>
          <h2 className={styles.sectionTitle}>Govind Property Indonesia</h2>
          <p>Govind Property Indonesia resmi beroperasi sejak tahun 2010 di bawah wewenang PT. Govind Usaha, salah satu perusahaan properti terkemuka di Indonesia. Kami memiliki pengalaman lebih dari satu dekade di sektor bisnis properti di seluruh Indonesia.</p>
          <p>Govind Property Indonesia adalah broker properti terpercaya dan memiliki ribuan Mitra Pemasaran yang tersebar di seluruh Indonesia. Perusahaan ini juga dikenal sebagai anggota dari Asosiasi Broker Properti Indonesia (AREBI).</p>
          <p>Salah satu keunggulan bersaing utama Govind Property Indonesia adalah pengembangan dan implementasi teknologi. Platform GovindONE adalah sistem operasi yang mengotomatisasi banyak proses operasional dari semua kantor dan mitra pemasaran, meningkatkan produktivitas dan kolaborasi yang menghasilkan pertumbuhan besar untuk semua kantor.</p>
        </section>

        <section className={styles.imageGallery}>
          <Image src="/images/gallery1.jpg" alt="Govind Property Event" width={200} height={150} />
          <Image src="/images/gallery2.jpg" alt="Govind Property Team" width={200} height={150} />
          <Image src="/images/gallery3.jpg" alt="Govind Property Office" width={200} height={150} />
          <Image src="/images/gallery4.jpg" alt="Govind Property Award" width={200} height={150} />
        </section>
      </main>
    </>
  );
};

export default AboutPage;