import React from "react"
import s from './scss/Card.module.scss'
import cardImg from '../assets/imgages/CardImg2.png'
import { Link } from "react-router-dom"
import config from '../config.json'
import classNames from "classnames"
import krest from '../assets/imgages/krest/1487086345-cross_81577.png'
import { useAppDispatch } from "../redux/redux-toolkit-store"
import { deleteProduct } from "../redux/painer-reducer"



interface Props {
    isBuy?: boolean,
    isFlex?: boolean,
    title: string | undefined,
    value: number | undefined,
    colors: string[] | undefined,
    photo: string[] | undefined,
    _id: string,
    index?:number
}

export const Card: React.FC<Props> = ({ isBuy = true, isFlex = false, title, value, colors, photo, _id }) => {

    let sliceTitle = title

    if (title!.length > 24) {
        sliceTitle = title?.slice(0, 25) + '...'
    }

    return (
        <div className={s.card}>
            <div className={s.card__photo}>
                <div className={s.card__photo_div}>
                    <img style={{ objectFit: 'contain' }} src={`${config.API_URL}/${photo![0]}`} alt="" />
                </div>
            </div>
            <div className={s.card__title_and_value}>
                <div className={s.card__title_and_value_title}>
                    {sliceTitle}
                </div>
                <div className={s.card__title_and_value_value}>
                    {value} UAN
                </div>
                <div className={s.card__title_and_value_sircles}>
                    {
                        colors?.map((el, i) => <div key={i} style={{ backgroundColor: `${colors[i]}` }} className={s.sircleColor}></div>) || <div className={s.sircleColor}></div>
                    }
                    {/* <div className={s.sircleColor}></div>
                    <div className={s.sircleColor}></div>
                    <div className={s.sircleColor}></div> */}
                </div>
                {isBuy && <Link to={`/product/${_id}`}> <div className={s.card__title_and_value_btn}>
                    ????????????
                </div> </Link>}
            </div>
        </div>
    )
}




export const CardFlex: React.FC<Props> = ({ isBuy = true, isFlex = false, title, value, colors,photo,_id,index = 0 }) => {
    const classes = classNames({
        [s.card]:true,
        [s.cardFlex]:true
    })

    const dispatch = useAppDispatch()

    const deletePro = () =>{
        dispatch(deleteProduct(_id,index))
        console.log(index)

    }

    return (
        <div style={{ flexDirection: 'row', maxWidth: '100%', height: '200px', paddingBottom: '0px' }} className={classes}>
            <div onClick={deletePro}><img src={krest} className={s.krest} alt="" /></div>
            <div style={{ flex: '1 1 50%' }} className={s.card__photo_flex}>
                <div className={s.card__photo_div}>
                    <img src={`${config.API_URL}/${photo![0]}`} alt="" />
                </div>
            </div>
            <div style={{ flex: '1 1 50%' }} className={s.card__title_and_value}>
                <div className={s.card__title_and_value_title}>
                    {title}
                </div>
                <div className={s.card__title_and_value_value}>
                    {value} UAN
                </div>
                <div className={s.card__title_and_value_sircles}>
                    {
                        colors?.map((el, i) => <div key={i} style={{ backgroundColor: `${colors[i]}` }} className={s.sircleColor}></div>)
                    }
                    {/* <div className={s.sircleColor}></div>
                    <div className={s.sircleColor}></div>
                    <div className={s.sircleColor}></div> */}
                </div>

            </div>
        </div>
    )
}