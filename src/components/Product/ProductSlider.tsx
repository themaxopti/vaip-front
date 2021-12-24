import React from 'react';
import { Wraper } from '../../usableComponents/Wraper';
import '../../App.scss';
import { Section } from '../../usableComponents/Section';
import s from './Product.module.scss'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

import "../MainTitle/styles.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination,
    Navigation
} from 'swiper';
import { Card } from '../../usableComponents/Card';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);



export const ProductSlider: React.FC = () => {
    return (
        <>
            <h1 className={s.h1}>Реккомендуем к покупке</h1>
            <Swiper navigation={false} breakpoints={{
                0: {
                    slidesPerView: 1
                },

                768: {
                    slidesPerView: 2
                },

                900: {
                    slidesPerView: 3
                }
            }} slidesPerView={3} spaceBetween={0} className="mySwiper3">
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
            </Swiper>
        </>
    );
}

