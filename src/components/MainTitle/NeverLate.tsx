import React from "react"
import s from './MainTitle.module.scss'
import { Link } from "react-router-dom"
import { Section } from "../../usableComponents/Section"
import NeverLateImg from '../../assets/imgages/neverLate.png'

export const NeverLate: React.FC = () => {
    return (
        <Section>
            <div className={s.neverLate_wrap}>
                <div className={s.neverLate_wrap_columnOne}>
                    <div className={s.neverLate_wrap_columnOne_image}>
                        <img src={NeverLateImg} alt="" />
                    </div>
                </div>
                <div className={s.neverLate_wrap_columnTwo}>
                    <div className={s.neverLate_wrap_columnTwo_content}>
                        <div className={s.neverLate_wrap_columnTwo_content_title}>Никогда не поздно бросить курить</div>
                        <div className={s.neverLate_wrap_columnTwo_content_desc}>Большие перемены начинаются с маленького шага. Перейти на IQOS намного лучше, чем продолжать курить.</div>
                        <Link to="/plusMinus"> <div className={s.neverLate_wrap_columnTwo_content_btn}>Детальнее</div> </Link>
                    </div>
                </div>
            </div>
        </Section>
    )
}