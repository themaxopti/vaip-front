import React from "react"
import s from './scss/Card.module.scss'
import cardImg from '../assets/imgages/CardImg2.png'
import { Link } from "react-router-dom"


interface Props {
    isBuy?: boolean,
    isFlex?: boolean
}

export const Card: React.FC<Props> = ({ isBuy = true, isFlex = false }) => {
    return (
        <div className={s.card}>
            <div className={s.card__photo}>
                <div className={s.card__photo_div}>
                    <img src={cardImg} alt="" />
                </div>
            </div>
            <div className={s.card__title_and_value}>
                <div className={s.card__title_and_value_title}>
                    iQOS 3 DUO
                </div>
                <div className={s.card__title_and_value_value}>
                    999 UAH
                </div>
                <div className={s.card__title_and_value_sircles}>
                    <div className={s.sircleColor}></div>
                    <div className={s.sircleColor}></div>
                    <div className={s.sircleColor}></div>
                </div>
                {isBuy && <Link to="/"> <div className={s.card__title_and_value_btn}>
                    Купить
                </div> </Link>}
            </div>
        </div>
    )
}




export const CardFlex: React.FC<Props> = ({ isBuy = true, isFlex = false }) => {
    return (
        <div style={{flexDirection:'row',maxWidth:'100%',height:'200px',paddingBottom:'0px'}} className={s.card}>
            <div style={{flex:'1 1 50%'}} className={s.card__photo_flex}>
                <div className={s.card__photo_div}>
                    <img src={cardImg} alt="" />
                </div>
            </div>
            <div style={{flex:'1 1 50%'}} className={s.card__title_and_value}>
                <div className={s.card__title_and_value_title}>
                    iQOS 3 DUO
                </div>
                <div className={s.card__title_and_value_value}>
                    999 UAH
                </div>
                <div className={s.card__title_and_value_sircles}>
                    <div className={s.sircleColor}></div>
                    <div className={s.sircleColor}></div>
                    <div className={s.sircleColor}></div>
                </div>
               
            </div>
        </div>
    )
}