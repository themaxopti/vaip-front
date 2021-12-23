import React from "react"
import { Section } from "../../usableComponents/Section"
import s from './MainTitle.module.scss'
import fullscreenImage from '../../assets/imgages/sigaretsFullscreen.svg'
import { Link } from "react-router-dom"
import classNames from "classnames"


export const WhatIsIcos: React.FC = () => {

    const btn = classNames({
        [s.btn]: true,
        [s.first]: true
    })

    return (
        <Section centreObj={true} backgroundColor="rgba(0, 0, 0, 0)" backgroundImage={fullscreenImage} withImage={true} fullscreen={true}>
            <div className={s.whatIsIqosWrap}>
                <div className={s.colummnOne}>Вред курения в том, что оно вызывает три основных заболевания: рак легких, хронический бронхит, коронарная болезнь. </div>
                <div className={s.columnTwo}>
                    <Link to="/">
                        <div className={btn}>
                            Что такое iqos?
                        </div>
                    </Link>
                </div>
            </div>
        </Section>
    )
}