import { useState } from 'react';

// Import Swiper React component
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import styles from './styles/swiper.module.scss'

export default function SwiperComponent() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className={styles.container}>
            <Swiper
                className={styles.myswiper}
                modules={[Navigation, Pagination, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                speed={800}
                loop

            >
                <SwiperSlide className={styles.swiperslide}>
                    <img src='https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png' alt="img" />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <img src='https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png' alt="img" />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <img src='https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png' alt="img" />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <img src='https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png' alt="img" />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <img src='https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png' alt="img" />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <img src='https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png' alt="img" />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <img src='https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png' alt="img" />
                </SwiperSlide>

            </Swiper>

        </div>
    );
};