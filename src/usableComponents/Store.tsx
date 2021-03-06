import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import '../App.scss';
import s from './scss/Store.module.scss'
import arrowLeft from '../assets/imgages/arrowLeft.svg'
import { Card, CardFlex } from './Card';
import classNames from 'classnames';
import { RootState, useAppDispatch } from '../redux/redux-toolkit-store';
import { useSelector } from 'react-redux';
import { PainerApi } from '../api/axiosApi';
import axios from 'axios';

interface Props {
    openStore?: boolean,
    setOpenStore?: any
}


export const Store: React.FC<Props> = ({ openStore, setOpenStore }) => {

    const dispatch = useAppDispatch()

    const { _id, userId, totalCount, products } = useSelector((state: RootState) => state.painer)
    const { isAuth } = useSelector((state: RootState) => state.user)

    const fetchAuth = useSelector((state: RootState) => state.user.fetchAuth)

    const [show, setShow] = useState(false)
    const [hide, setHide] = useState(true)


    document.addEventListener('click', (e) => {
        // @ts-ignore
        if (e.target.dataset.wrap == 'wrap') {
            setOpenStore(false)
        }
    })

    const classes = classNames({
        [s.modal]: true,
        [s.hide]: hide,
        [s.show]: show
    })


    async function showNav() {
        setTimeout(() => {
            setHide(false)
        }, 100)

        setTimeout(() => {
            setShow(true)
        }, 200)
    }

    async function hideNav() {
        setTimeout(() => {
            wrap.current!.style.display = 'none'
        }, 1000)
    }


    useEffect(() => {
        const changeNavbar = async () => {
            const body = document.querySelector('body')
            if (!openStore) {
                body?.classList.remove('stopScroll')
                setShow(false)
                setHide(true)
                await hideNav()
            }
            if (openStore) {
                body?.classList.add('stopScroll')
                await showNav()
                wrap.current!.style.display = 'flex'
            }
        }
        changeNavbar()
    }, [openStore])


    const wrap = useRef<HTMLDivElement>(null)
    const modal = useRef<HTMLDivElement>(null)

    const wrapClasses = classNames({
        [s.wrap]: true,
        [s.show]: show
    })

    const [message, setMessage] = useState<string | null>(null)

    const buyProduct = () => {
        if (!isAuth) {
            return setMessage('?????????????? ?? ??????????????')
        }

        axios.get('http://localhost:4000/api/bla', {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    return (
        <div ref={wrap} data-wrap="wrap" className={wrapClasses}>
            <div ref={modal} className={classes}>
                <div onClick={() => setOpenStore(false)} className={s.column_one}>
                    <div><img src={arrowLeft} alt="" /></div>
                    <div className={s.continie}>???????????????????? ??????????????</div>
                </div>
                <div className={s.column_two}>
                    <div className={s.mine}>
                        <div>?????? ??????????????</div>
                        <div className={s.line}></div>
                    </div>
                    <div className={s.cards}>
                        {
                            !fetchAuth && products.map((el, i) => <CardFlex key={i} _id={el._id} title={el.title} value={el.value} index={i} colors={el.htmlColor} photo={el.photos} />) || <p>??????????</p>
                        }
                        {/* <CardFlex _id='1' title={'el.title'} value={1} colors={['el.htmlColor']} photo={['el.photos']} /> */}
                    </div>
                </div>

                <div className={s.column_three}>
                    <div className={s.one}>
                        <div className={s.bold}>?????????????????? ?????????????? :</div>
                        <div>{totalCount} UAN</div>
                    </div>
                    <div className={s.two}>
                        <div className={s.bold}>??????????:</div>
                        <div>{totalCount} UAN</div>
                    </div>
                    {message && <p>{message}</p>}
                    <div onClick={buyProduct} className={s.three}>???????????????? ??????????</div>
                </div>

            </div>
        </div>
    );
}

