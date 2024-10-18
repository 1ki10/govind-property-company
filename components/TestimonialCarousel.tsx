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

const testimonials = [
  "Govind Property membantu saya menemukan rumah impian dengan cepat dan mudah. Layanan mereka sangat profesional dan perhatian terhadap detail.",
  "Sebagai investor, saya sangat terkesan dengan portofolio properti yang ditawarkan Govind. Mereka benar-benar memahami pasar dan kebutuhan klien.",
  "Proses penjualan rumah saya berjalan lancar berkat tim Govind Property. Mereka memberikan saran yang berharga dan dukungan penuh sepanjang prosesnya.",
  "Govind Property menawarkan pilihan properti yang luar biasa. Agen mereka sangat berpengetahuan dan selalu siap membantu. Sangat merekomendasikan!",
  "Sebagai pembeli rumah pertama, saya merasa terbantu oleh panduan Govind Property. Mereka membuat proses yang rumit menjadi mudah dipahami dan menyenangkan."
];

const roles = ["Pemilik Rumah", "Investor Properti", "Penjual Properti", "Pembeli Properti", "Pembeli Rumah Pertama"];

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
          role={roles[index % roles.length]}
          image={user.picture.large}
          comment={testimonials[index]}
        />
      ))}
    </Slider>
  );
}

export default TestimonialCarousel;