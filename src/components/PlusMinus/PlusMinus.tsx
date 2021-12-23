import React, { useEffect } from 'react';
import s from './PlusMinus.module.scss'
import { Wraper } from '../../usableComponents/Wraper';
import { Section } from '../../usableComponents/Section';
import PlusMinusOne from '../../assets/imgages/plusMinusOne.png'
import PlusGroup from '../../assets/imgages/PlusGroup.svg'
import Minus from '../../assets/imgages/Minus.svg'
import plusMinusTwo from '../../assets/imgages/plusMinusTwo.png'
import classNames from 'classnames';

type PropsType = {
    title?: string,
    minus?: boolean
}

const CardPlus: React.FC<PropsType> = ({ title, minus }) => {
    return (
        <div className={s.plusMinus_wrap_columnOne_content_plus}>
            <div className={s.card_wrap}>
                <div className={s.card_wrap_columnOne}>
                    <div>
                        <img src={minus ? Minus : PlusGroup} alt="" />
                    </div>
                </div>
                <div className={s.card_wrap_columnTwo}>
                    {title}
                </div>
            </div>
        </div>
    )
}

export const PlusMinus: React.FC = () => {

    const classes: any = classNames([s.plusMinus_wrap_columnOne_content], [s.reverse])

   

    return (
        <Wraper>
            <Section>
                <div className={s.plusMinus_wrap}>
                    <div className={s.plusMinus_wrap_columnOne}>
                        <div className={s.plusMinus_wrap_columnOne_titleImg}>
                            <div className={s.plusMinus_wrap_columnOne_titleImg_img}>
                                <div>
                                    <img src={PlusMinusOne} alt="" />
                                </div>
                            </div>
                            <div className={s.plusMinus_wrap_columnOne_titleImg_title}>Плюсы iqos</div>
                        </div>
                        <div className={s.plusMinus_wrap_columnOne_content}>
                            <CardPlus title='Нагревание табака вместо горения' />
                            <CardPlus title='Стики для нагревания, а не сигареты' />
                            <CardPlus title='Аэрозоль вместо дыма' />
                            <CardPlus title='На 95% меньше вредных веществ' />
                            <CardPlus title='Нет запаха дыма' />

                        </div>
                    </div>
                    <div className={s.plusMinus_wrap_columnOne}>
                        <div className={s.plusMinus_wrap_columnOne_titleImg}>
                            <div className={s.plusMinus_wrap_columnOne_titleImg_img}>
                                <div>
                                    <img src={plusMinusTwo} alt="" />
                                </div>
                            </div>
                            <div className={s.plusMinus_wrap_columnOne_titleImg_title}>Минусы сигарет</div>
                        </div>
                        <div className={classes} style={{}}>
                            <CardPlus minus={true} title='Вы становитесь нервным и беспокойным;' />
                            <CardPlus minus={true} title='Появляется постоянная одышка' />
                            <CardPlus minus={true} title='Беспокоят головные боли;' />
                            <CardPlus minus={true} title='Не проходит кашель с выделениями мокроты и ощущение комка в горле;' />
                            <CardPlus minus={true} title='Появляются проблемы с зубами' />
                        </div>
                    </div>
                </div>
            </Section>
        </Wraper>
    );
}

