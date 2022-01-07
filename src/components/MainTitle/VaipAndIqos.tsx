import React from "react"
import { Section } from "../../usableComponents/Section"
import s from './MainTitle.module.scss'
import { Link } from "react-router-dom"
import classNames from "classnames"
import AboutVape from '../../assets/imgages/aboutVape.svg'
import Vaip from '../../assets/imgages/electronic_cigarette_PNG11 1.png'
import IQOS from '../../assets/imgages/iq3mcover 1.png'

export const VaipAndIqos: React.FC = () => {

    const button = classNames([s.button], [s.two])

    return (
        <div className={s.vaip_andIqos}>
            <div className={s.vaip_andIqos_column_one}>
                <div className={s.photo_and_title}>
                    <div className={s.photo_and_title_photo}>
                        <div>
                            <img src={Vaip} alt="" />
                        </div>
                    </div>
                    <div className={s.photo_and_title_title}>VAIP</div>
                </div>
                <Link to="/products?title=vape&categoryId=4&titleH=Vaip">
                    <div className={s.button}>
                        Узнать больше
                    </div>
                </Link>
            </div>
            <div className={s.vaip_andIqos_column_two}>
                <div className={s.photo_and_title}>
                    <div className={s.photo_and_title_photo}>
                        <div>
                            <img src={IQOS} alt="" />
                        </div>
                    </div>
                    <div className={s.photo_and_title_title} style={{ color: '#000000' }}>Iqos</div>
                </div>
                <Link to="/products?title=iqos&categoryId=1&titleH=iqos">
                    <div className={button}>
                        Узнать больше
                    </div>
                </Link>
            </div>
        </div>
    )
}