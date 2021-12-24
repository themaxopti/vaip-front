import React from 'react';
import { Wraper } from '../../usableComponents/Wraper';
import '../../App.scss';
import { Section } from '../../usableComponents/Section';
import s from './Product.module.scss'
import imagee from '../../assets/imgages/CardImg2.png'
import arrow from '../../assets/imgages/slider2/Vector 1.svg'


// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
// import "./styles2.css";
import SwiperCore, {
    Navigation,
    Pagination
} from 'swiper';
import { ProductSlider } from './ProductSlider';
SwiperCore.use([Navigation, Pagination]);
// Swiper




export const Product: React.FC = () => {
    return (
        <Wraper>
            <Section overflowHid='hidden'>
                <div className={s.products_wrap}>
                    <div className={s.products_wrap_columnOne}>
                        <Swiper pagination={true} navigation={true} className="mySwiper2">
                            <SwiperSlide><div className={s.cardImg} ><img src={imagee} /></div></SwiperSlide>
                            <SwiperSlide><div className={s.cardImg} >Slide 1</div></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={s.products_wrap_columnTwo}>
                        <div className={s.column_one}>
                            <div className={s.column_one_title}>iQOS 3 DUO</div>
                            <div className={s.column_one_value}>000 UAN</div>
                        </div>
                        <div className={s.column_two}>
                            <div className={s.amount}>
                                <div>-</div>
                                <div className={s.matrix}>0</div>
                                <div>+</div>
                            </div>
                            <div className={s.add}>
                                <div>Добавить в корзину</div>
                                <div><img src={arrow} alt="" /></div>
                            </div>
                        </div>
                        <div className={s.column_three}>
                            <p>Описание товара</p>
                        </div>
                        <div className={s.column_four}>
                            <div className={s.sirlce}></div>
                            <div className={s.sirlce}></div>
                            <div className={s.sirlce}></div>
                        </div>
                    </div>
                </div>

                <ProductSlider/>

            </Section>
        </Wraper>
    );
}

