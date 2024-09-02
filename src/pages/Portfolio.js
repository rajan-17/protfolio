import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/effect-coverflow';
import { Pagination,EffectCoverflow,Navigation } from 'swiper/modules';
import project1 from '../img/UI-Screen-1.png'

const Portfolio = () => {
  return (
    <div className="about-color">

<Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={3}
      coverflowEffect={
        {
          rotate:0,
          stretch:0,
          depth:100,
          modifier:2.5
        }
      }
     Pagination={{el:'.swiper-pagination',clickable:true}}
    >
      <SwiperSlide><img className='project-img' src={[project1]} alt="" /></SwiperSlide>
      <SwiperSlide><img className='project-img' src={[project1]} alt="" /></SwiperSlide>
      <SwiperSlide><img className='project-img' src={[project1]} alt="" /></SwiperSlide>
      <SwiperSlide><img className='project-img' src={[project1]} alt="" /></SwiperSlide>
      <SwiperSlide><img className='project-img' src={[project1]} alt="" /></SwiperSlide>
      <SwiperSlide><img className='project-img' src={[project1]} alt="" /></SwiperSlide>
      <SwiperSlide><img className='project-img' src={[project1]} alt="" /></SwiperSlide>

   ...
    </Swiper>
    </div>
  )
}

export default Portfolio
