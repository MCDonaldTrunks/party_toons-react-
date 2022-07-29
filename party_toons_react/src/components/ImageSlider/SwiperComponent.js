import { useState } from "react";

// Import Swiper React component
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";

import styles from "./styles/swiper.module.scss";

export default function SwiperComponent(props) {
  const [activeThumb, setActiveThumb] = useState();

  return (
    <div className={styles.container}>
      <Swiper
        loop={true}
        spaceBetween={0}
        className={styles.myswiper}
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: activeThumb }}
        navigation
        slidesPerView={1}
        speed={800}
        grabCursor={true}
      >
        {props.images.map((item, index) => (
          <SwiperSlide className={styles.swiperslide} key={index}>
            <img src={item} alt="product images" />
          </SwiperSlide>
        ))}
      </Swiper>
      
      

      
    </div>
  );
}
