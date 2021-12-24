import React, { LegacyRef, useEffect, useRef, useState } from "react"
import { Section } from "./Section"
import s from './scss/Header.module.scss'
import SigaretsIcon from '../assets/imgages/NoSigarets.svg'
import StoreIcon from '../assets/imgages/shopIcon.svg'
import UserIcon from '../assets/imgages/Vector (2).svg'
import { Link } from "react-router-dom"
import Navbar from '../assets/imgages/navbar.svg'
import classNames from "classnames"
import Black from '../assets/imgages/black.jpg'

interface Props {
    openStore?: boolean,
    setOpenStore?: any
}


export const Header: React.FC<Props> = ({ openStore,setOpenStore }) => {

    const [top, setTope] = useState(false)

    const mobile_nav_items_classes = classNames({
        [s.nav__mobile_items]: true,
        [s.top]: top
    })

    const navbarRev = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const body = document.querySelector('body')
        if (top) {
            body?.classList.add('stopScroll')
        }
        if (!top) {
            body?.classList.remove('stopScroll')
        }
    }, [top])

    function clickToNavbar() {
        setTope(!top)
        const body = document.querySelector('body')
        if (!top) {
            body?.classList.add('stopScroll')
        }
        if (top) {
            body?.classList.remove('stopScroll')
        }
    }

    return (
        <Section borderBottom={true} zIndex={999} positionFX={true} backgroundColor="#131212">
            <nav className={s.nav}>
                <div className={s.firstColumn}>
                    <Link to="/categories"> <div>Категории</div> </Link>
                    <Link to="/"> <div style={{ fontFamily: 'Conv_Moon Light' }}>lil solid</div> </Link>
                    <Link to="/"> <div style={{ fontFamily: 'Conv_Moon Light' }}>iqos</div> </Link>
                    <Link to="/"> <div>Аксесуары</div> </Link>
                </div>


                <Link to="/"> <div className={s.iconColumn}><img src={SigaretsIcon} alt="" /></div></Link>

                <div className={s.secondColumn}>
                    <Link to="/"> <div>Что это такое?</div></Link>
                    <div onClick={() => setOpenStore(true)} className={s.storeIcon__value}>
                        <div className={s.icon}><img src={StoreIcon} alt="" /></div>
                        <div>1231 UAN</div>
                    </div>
                    <Link to="/">
                        <div className={s.user_info}>
                            <div className={s.userIcon}><img src={UserIcon} alt="" /></div>
                        </div>
                    </Link>
                </div>

            </nav>


            <nav className={s.nav__mobile}>
                <div className={s.nav_and_logo}>
                    <div onClick={clickToNavbar} ref={navbarRev} className={s.navbar}><img src={Navbar} alt="" /></div>
                    <Link to="/"> <div className={s.iconColumn}><img src={SigaretsIcon} alt="" /></div></Link>
                </div>

                <div onClick={() => setOpenStore(true)} className={s.storeIcon__value}>
                    <div className={s.icon}><img src={StoreIcon} alt="" /></div>
                    <div>1231 UAN</div>
                </div>

                <div className={mobile_nav_items_classes}>
                    <div className={s.nav__mobile_items_wrap}>
                        <Link onClick={() => setTope(false)} to="/categories"> <div>Категории</div> </Link>
                        <Link onClick={() => setTope(false)} to="/"> <div>lil solid</div> </Link>
                        <Link onClick={() => setTope(false)} to="/"> <div>iqos</div> </Link>
                        <Link onClick={() => setTope(false)} to="/"> <div>Аксесуары</div> </Link>
                        <Link onClick={() => setTope(false)} to="/"> <div>Что это такое?</div></Link>
                        <Link onClick={() => setTope(false)} to="/">
                            <div className={s.user_info}>
                                <div className={s.userIcon}><img src={UserIcon} alt="" /></div>
                                <span>name</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </Section>
    )
}