import React from "react"
import { Section } from "./Section"
import './scss/Footer.scss'
import MasterCard from '../assets/imgages/mastercard 1.svg'
import Privat from '../assets/imgages/privat24 1.svg'
import Visa from '../assets/imgages/visa 1.svg'
import { Link } from "react-router-dom"

export const Footer: React.FC = () => {
    return (
        <>
            <Section backgroundColor="#131212">
                <nav className={"nav"}>
                    <div className={"good_footer"}>
                        <Link to="/"> <div>Полезная информация</div> </Link>
                        <Link to="/"> <div>Товары</div> </Link>
                        <Link to="/"> <div>lil SOLID</div> </Link>
                        <Link to="/"> <div>IQOS</div> </Link>
                        <Link to="/"> <div>Аксесуары</div> </Link>
                    </div>
                    <div className={"contacts"}>
                        <div>Контакты</div>
                        <div>+3809513243</div>
                    </div>
                    <div>
                        <Link to="/"> <div>Политика конфиденциальности</div></Link>
                    </div>
                    <div className={"politics"}>
                        <div>
                            <Link to="/"> Публичная аферта</Link>
                        </div>
                    </div>
                    <div className={"tarifs"}>
                        <div style={{ color: 'white' }}>Принимаем к оплате</div>
                        <div className={"tarifs_flex"} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div><img src={MasterCard} alt="" /></div>
                            <div><img src={Privat} alt="" /></div>
                        </div>
                        <div><img src={Visa} alt="" /></div>
                        <div style={{ color: 'white' }}>@Made by themaxopti</div>

                    </div>
                </nav>
            </Section>
            <Section centreObj={true}>
                <div style={{paddingTop:'1rem',paddingBottom:'1rem',fontFamily:'Manrope',fontWeight:'bold',fontSize:'14px'}}>
                    <span>Не исключает всех рисков. Аэрозоль содержит никотин, который вызывает зависимость. Только для использования совершеннолетними лицами.</span>
                </div>
            </Section>
        </>
    )
}