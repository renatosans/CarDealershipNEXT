import styles from '../styles/Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';


// install Swiper modules
SwiperCore.use([Navigation, Pagination]);


export function Carousel() {
  return (
    <Swiper spaceBetween={0} slidesPerView={1} pagination={true} modules={[Navigation, Pagination]} autoplay={{ delay: 1500, disableOnInteraction: false }} >
      <SwiperSlide className='carousel-slide'>
        <img src="/banner-1.png" alt="banner-1" className='carousel-img' />
      </SwiperSlide>
      <SwiperSlide className='carousel-slide'>
        <img src="/banner-2.png" alt="banner-2" className='carousel-img' />
      </SwiperSlide>
      <SwiperSlide className='carousel-slide'>
        <img src="/banner-3.png" alt="banner-3" className='carousel-img' />
      </SwiperSlide>
    </Swiper>
  )
}
