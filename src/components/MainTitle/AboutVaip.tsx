import React from "react"
import { Section } from "../../usableComponents/Section"
import s from './MainTitle.module.scss'
import { Link } from "react-router-dom"
import classNames from "classnames"
import AboutVape from '../../assets/imgages/aboutVape.svg'


export const AboutVaip: React.FC = () => {

    return (
        <Section>
            <div className={s.aboutIqos_wrap}>
                <div className={s.aboutIqos_wrap_column_one}>
                    <h1>Что такое вейп?</h1>
                    <p>
                    Вейпинг вошел в жизнь современного человека настолько же стремительно, как и большинство других условно «модных» течений.
                    </p>
                </div>
                <div className={s.aboutIqos_wrap_column_two} style={{transform:'translateY(-90px)'}}>
                    <div className={s.aboutIqos_wrap_column_two_photo}>
                        <img src={AboutVape} alt="" />
                    </div>
                </div>
            </div>
        </Section>
    )
}