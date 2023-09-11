import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const SwiperSlider = () =>{
  return (
    <Swiper
    className='z-[1200] w-4/6'modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    >
      <SwiperSlide><img src="./1.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./2.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./3.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./4.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./5.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./6.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./7.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./8.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./9.svg" alt="" /></SwiperSlide>
      ...
    </Swiper>
  );
  }

export default SwiperSlider