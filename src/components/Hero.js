import {  Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHeroSlides } from "../redux/apiCalls";
import { useEffect } from 'react';

export default function Hero() {
  const slides = useSelector(
    (state) => state.hero.slides
  );

  const dispatch = useDispatch();

  useEffect(() => {
    fetchHeroSlides(dispatch);
  }, [])
  

  return (
    <Swiper
        modules={[ Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay
        pagination={{ clickable: true }}
      >
        {slides?.map(slide=>(
          <SwiperSlide key={slide.id}>
            <img
                src={slide.imgUrl}
                alt=""
                className="hero__img"
              />
        </SwiperSlide>
        ))}
      </Swiper>
  )
}
