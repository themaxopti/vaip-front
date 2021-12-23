import React from "react"
import { Section } from "../../usableComponents/Section"
import s from './MainTitle.module.scss'
import { Link } from "react-router-dom"


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import "./styles.css";


import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard, Autoplay
} from 'swiper';
import { Card } from "../../usableComponents/Card";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);





export const SliderVaip: React.FC = () => {


    return (

        <Section overflowHid="hidden">
            <div style={{paddingTop:'4rem',paddingBottom:'4rem'}} className={s.wrapper_card}>
                <Swiper cssMode={true} navigation={true} pagination={false} className="mySwiper">
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                </Swiper>
                <div className={s.best}>Лучшие новинки</div>
            </div>
        </Section>


    )
}