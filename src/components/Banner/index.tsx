import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';


// install Swiper modules
SwiperCore.use([Navigation, Pagination]);


/*
    <Swiper spaceBetween={0} slidesPerView={1} navigation pagination={{ clickable: true }} loop={true} speed={1500} >
      <SwiperSlide>
        <img src="/banner-1.webp" alt="banner-1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/banner-2.png" alt="banner-2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/banner-3.png" alt="banner-3" />
      </SwiperSlide>
    </Swiper>
*/

export function Banner() {
  return (
    <>
    </>
  )
}
