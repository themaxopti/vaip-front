import React from "react"
import { Section } from "../../usableComponents/Section"
import s from './MainTitle.module.scss'
import { Link } from "react-router-dom"
import { RootState } from "../../redux/redux-toolkit-store"

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
import { useSelector } from "react-redux";
import { ProductType } from "../../api/Types"

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);



export const SliderVaip: React.FC = () => {


    const slides = useSelector((state: RootState) => state.products.randomItems)
    const isFetching = useSelector((state: RootState) => state.products.waitProducts)

    return (
        <Section overflowHid="hidden">
            {!isFetching && <div style={{ paddingTop: '4rem', paddingBottom: '4rem' }} className={s.wrapper_card}>
                <Swiper cssMode={true} navigation={true} pagination={false} className="mySwiper">
                    {
                        slides.map((el,i) =>
                            <SwiperSlide key={i}>
                                <Card _id={el._id} title={el.title} value={el.value} colors={el.htmlColor} photo={el.photos} />
                            </SwiperSlide>
                        )
                    }
                    {/* <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide> */}
                </Swiper>
                <div className={s.best}>Лучшие новинки</div>
            </div>}
        </Section>


    )
}