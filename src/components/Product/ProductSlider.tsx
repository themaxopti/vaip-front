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
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/redux-toolkit-store';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);



export const ProductSlider: React.FC = () => {
    const slides = useSelector((state: RootState) => state.products.randomItems)
    const isFetching = useSelector((state: RootState) => state.products.waitProducts)
    const isFetching2 = useSelector((state: RootState) => state.products.fetchingProducts)

    const globalFetching = !isFetching && !isFetching2

    return (
        <>
            {globalFetching && <h1 className={s.h1} >Реккомендуем к покупке</h1>}
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
                {
                    globalFetching && slides.map(el =>
                        <SwiperSlide key={el._id}><Card _id={el._id} title={el.title} value={el.value} colors={el.htmlColor} photo={el.photos} /></SwiperSlide>
                    )
                }
                {/* <SwiperSlide><Card _id='1' title={'el.title'} value={1} colors={['el.htmlColor']} photo={['el.photos']} /></SwiperSlide> */}
            </Swiper>
        </>
    );
}

