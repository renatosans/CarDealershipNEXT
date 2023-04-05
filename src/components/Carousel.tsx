import styles from '../styles/Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';


// install Swiper modules
SwiperCore.use([Navigation, Pagination]);


export default function Carousel() {
  return (
      <Swiper spaceBetween={0} slidesPerView={1} navigation={true} pagination={true} modules={[Navigation, Pagination]} autoplay={{ delay: 1500, disableOnInteraction: false }} >
        <SwiperSlide className='carousel-slide'>
          <img style={{width: "100%"}} src="/banner-1.png" alt="banner-1" />
        </SwiperSlide>
        <SwiperSlide className='carousel-slide'>
          <img style={{width: "100%"}} src="/banner-2.png" alt="banner-2" />
        </SwiperSlide>
        <SwiperSlide className='carousel-slide'>
          <img style={{width: "100%"}} src="/banner-3.png" alt="banner-3" />
        </SwiperSlide>
      </Swiper>
  )
}
