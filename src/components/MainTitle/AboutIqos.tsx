import React from "react"
import { Section } from "../../usableComponents/Section"
import s from './MainTitle.module.scss'
import { Link } from "react-router-dom"
import classNames from "classnames"
import AboutIqs from '../../assets/imgages/aboutIqos.svg'


export const AboutIqos: React.FC = () => {

    return (
        <Section>
            <div className={s.aboutIqos_wrap}>
                <div  className={s.aboutIqos_wrap_column_one}>
                    <h1>Что такое iqos?</h1>
                    <p>
                        IQOS – это принципиально новый способ употребления табака, появившийся в ответ на тренд более здорового образа жизни. Технологически IQOS – устройство для нагревания табака, разработанное Philip Morris International. Его отличие от сигарет в том, что в сигарете табак поджигается, а в IQOS – нет.
                    </p>
                </div>
                <div className={s.aboutIqos_wrap_column_two}>
                    <div className={s.aboutIqos_wrap_column_two_photo}>
                        <img src={AboutIqs} alt="" />
                    </div>
                </div>
            </div>
        </Section>
    )
}