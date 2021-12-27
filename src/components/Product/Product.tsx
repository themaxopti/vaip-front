import React, { useEffect, useState } from 'react';
import { Wraper } from '../../usableComponents/Wraper';
import '../../App.scss';
import { Section } from '../../usableComponents/Section';
import s from './Product.module.scss'
import imagee from '../../assets/imgages/CardImg2.png'
import arrow from '../../assets/imgages/slider2/Vector 1.svg'
import config from '../../config.json'

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import Loading from '../../assets/imgages/gif/Spinner-1s-200px.gif'

import "swiper/css/pagination"
// import "./styles2.css";
import SwiperCore, {
    Navigation,
    Pagination
} from 'swiper';
import { ProductSlider } from './ProductSlider';
import { useParams, useSearchParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../redux/redux-toolkit-store';
import { fetchOneProduct, fetchRandomItems } from '../../redux/product-reducer';
import { useSelector } from 'react-redux';
SwiperCore.use([Navigation, Pagination]);
// Swiper



export const Product: React.FC = () => {

    const dispatch = useAppDispatch()

    const { title, description, color, compatibility,
        htmlColor, category, isCapsula, complection,
        value, photos, weight, valueKlimoaiser,
        valueOfNikotin, best, amountIn, kit } = useSelector((state: RootState) => state.products.oneProduct)

    const isFetching = useSelector((state: RootState) => state.products.fetchingProducts)
    const isFetching2 = useSelector((state: RootState) => state.products.waitProducts)

    const globalFetching = !isFetching2 && !isFetching
    const { id } = useParams()

    const [searchParams, setSearchParams] = useSearchParams()

    const UrlAmount = Number(searchParams.get('amount')) || 0

    let [count, setCount] = useState(UrlAmount)

    useEffect(() => {
        dispatch(fetchOneProduct(id || ''))
        dispatch(fetchRandomItems())
    }, [])


    function addCount() {
        setCount(count + 1)
        debugger
        setSearchParams({
            amount: count.toString()
        })
    }

    useEffect(() => {
        setSearchParams({
            amount: count.toString()
        })
        
        if (count < 0) {
            setCount(0)
        }
    }, [count])

    function removeCount() {
        setCount(count - 1)
        setSearchParams({
            amount: count.toString()
        })
    }

    useEffect(() => {
        dispatch(fetchOneProduct(id || ''))
        dispatch(fetchRandomItems())
        window.scrollTo(0, 0)
    }, [id])

    return (
        <Wraper>
            <Section overflowHid='hidden'>
                {globalFetching && <div className={s.products_wrap}>
                    <div className={s.products_wrap_columnOne}>
                        <Swiper pagination={true} navigation={true} className="mySwiper2">
                            {
                                photos?.map((el, i) => <SwiperSlide key={i} ><div className={s.cardImg} ><img src={`${config.API_URL}/${photos[i]}`} /></div></SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                    <div className={s.products_wrap_columnTwo}>
                        <div className={s.column_one}>
                            <div className={s.column_one_title}>{title}</div>
                            <div className={s.column_one_value}>{value} UAN</div>
                        </div>
                        <div className={s.column_two}>
                            <div className={s.amount}>
                                <div onClick={() => setCount(prev => prev - 1)}>-</div>
                                <div className={s.matrix}>{count}</div>
                                <div onClick={() => setCount(prev => prev + 1)}>+</div>
                            </div>
                            <div className={s.add}>
                                <div>Добавить в корзину</div>
                                <div><img src={arrow} alt="" /></div>
                            </div>
                        </div>
                        <div className={s.column_three}>
                            <p>
                                {title && <span> <span className={s.boldSpan}>Название:</span>    {title} </span>}
                            </p>
                            <p>
                                {description && <span><span className={s.boldSpan}>Описание:</span>    {description} </span>}
                            </p>
                            <p>
                                {category && <span><span className={s.boldSpan}>Категория:</span>    {category} </span>}
                            </p>
                            <p>
                                {color && <span><span className={s.boldSpan}>Цвета:</span>    {color} </span>}
                            </p>
                            <p>
                                {compatibility && <span><span className={s.boldSpan}>Совместимость:</span>    {compatibility} </span>}
                            </p>
                            <p>
                                {weight && <span><span className={s.boldSpan}>Вес:</span>    {weight} </span>}
                            </p>
                            <p>
                                {isCapsula && <span><span className={s.boldSpan}>Наличие капсулы:</span>    {isCapsula ? 'С капсулой' : 'Без капсулы'} </span>}
                            </p>
                            <p>
                                {valueKlimoaiser && <span><span className={s.boldSpan}>Количество клиромайзера (мл):</span>    {valueKlimoaiser} </span>}
                            </p>
                            <p>
                                {kit && <span><span className={s.boldSpan}>В комплекте:</span>    {kit} </span>}
                            </p>
                            <p>
                                {valueOfNikotin && <span><span className={s.boldSpan}>Количество никотина:</span>    {valueOfNikotin} </span>}
                            </p>

                            <p>
                                {value && <span><span className={s.boldSpan}>Цена:</span>    {value} UAN </span>}
                            </p>

                        </div>
                        <div className={s.column_four}>
                            {
                                htmlColor?.map((el, i) => <div key={i} style={{ backgroundColor: htmlColor[i] }} className={s.sirlce}></div>)
                            }
                            {/* <div className={s.sirlce}></div>
                            <div className={s.sirlce}></div> */}
                            {/* <div className={s.sirlce}></div> */}
                        </div>
                    </div>
                </div> || <img className={s.preloader} src={Loading} />}

                <ProductSlider />

            </Section>
        </Wraper>
    );
}

