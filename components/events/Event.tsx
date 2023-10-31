"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { imageData } from './data';
import "./event.css";

const Sliders = () => {
    return (
        <div className="containers">
            <h1 className="headings">Events</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                // loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {
                    imageData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="eventImg">
                            <img src={item.imgUrl} alt={item.title} />
                            </div>
                        </SwiperSlide>
                    ))
                }
                
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <AiOutlineArrowLeft />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <AiOutlineArrowRight />
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    )
}

export default Sliders;