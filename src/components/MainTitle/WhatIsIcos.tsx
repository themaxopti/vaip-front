import React from "react"
import { Section } from "../../usableComponents/Section"
import s from './MainTitle.module.scss'
import fullscreenImage from '../../assets/imgages/sigaretsFullscreen.svg'
import { Link } from "react-router-dom"
import classNames from "classnames"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../redux/redux-toolkit-store"
import { fetchRandomItems } from "../../redux/product-reducer"


export const WhatIsIcos: React.FC = () => {

    const dispatch = useAppDispatch()

    const btn = classNames({
        [s.btn]: true,
        [s.first]: true
    })

    const asyncZ = () => dispatch(fetchRandomItems())

    return (
        <Section centreObj={true} backgroundColor="rgba(0, 0, 0, 0)" backgroundImage={fullscreenImage} withImage={true} fullscreen={true}>
            <div className={s.whatIsIqosWrap}>
                <div className={s.colummnOne}>Вред курения в том, что оно вызывает три основных заболевания: рак легких, хронический бронхит, коронарная болезнь. </div>
                <div className={s.columnTwo}>
                    <Link to="/">
                        <div onClick={asyncZ} className={btn}>
                            Что такое iqos?
                        </div>
                    </Link>
                </div>
            </div>
        </Section>
    )
}