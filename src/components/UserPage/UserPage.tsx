import classNames from "classnames"
import { Formik } from "formik"
import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { useAppDispatch } from "../../redux/redux-toolkit-store"
import { auth, changeUser, logOut, setAuth } from "../../redux/user-reducer"
import { Card } from "../../usableComponents/Card"
import { Section } from "../../usableComponents/Section"
import { Wraper } from "../../usableComponents/Wraper"
import s from './UserPage.module.scss'
import { RootState } from '../../redux/redux-toolkit-store'
import { useLocalStorage } from "../hooks/useLocalStorage"


interface PropsDescription {
    title: string,
    nickname: string,
    isChanged: boolean,
    name: string,
    handleChange: any,
    value: string
}



const Description: React.FC<PropsDescription> = ({ title, nickname, isChanged, name, handleChange, value }) => {
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        setInputValue(nickname)
    }, [isChanged])
    const fetchAuth = useSelector((state: RootState) => state.user.fetchAuth)


    return (
        <div className={s.usePage_wrap_columnTwo_wrap_values}>
            <div className={s.usePage_wrap_columnTwo_wrap_values_value}>
                <div className={s.title}>{title}</div>
                {
                    !fetchAuth && <div className={s.value}>
                        {!isChanged && nickname}
                        {isChanged && <input name={name} value={value} onChange={handleChange} className={s.changedInput} type={'text'} />}
                    </div>
                }
            </div>
        </div>
    )
}



const DescriptionComponent: React.FC = () => {
    const [ischanged, setIsChanged] = useState(false)

    const onSubmit = (e: any) => {
        e.preventDefault()
        // @ts-ignore
        const name = e.target.name
    }

    const fetchAuth = useSelector((state: RootState) => state.user.fetchAuth)
    const { userName, surrname, father, phome, userEmail } = useSelector((state: RootState) => state.user.userInformation)
    const dispatch = useAppDispatch()

    return (

        <Formik
            initialValues={{ email: `${userEmail}`, father: `${father || ''}`, surrname: `${surrname || ''}`, phone: `${phome || ''}`, name: `${userName}` }}
            validate={values => {
                const errors: any = {};
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(values)
                    const { name, email, phone, surrname, father } = values
                    dispatch(changeUser(name, email, phone, surrname, father))
                }, 400);
            }}
        >

            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (


                <form onSubmit={handleSubmit} className={s.formik}>
                    <div className={s.usePage_wrap_columnTwo_wrap_title} onClick={() => setIsChanged(!ischanged)}>Личные данные</div>
                    <div className={s.descs}>
                        <Description value={values.name} handleChange={handleChange} name="name" isChanged={ischanged} title="Имя" nickname={userName} />
                        <Description value={values.father} handleChange={handleChange} name="father" isChanged={ischanged} title="Отчество" nickname={father} />
                        <Description value={values.surrname} handleChange={handleChange} name="surname" isChanged={ischanged} title="Фамилия" nickname={surrname} />
                        <Description value={values.phone} handleChange={handleChange} name="phone" isChanged={ischanged} title="Телефон" nickname={phome} />
                        <Description value={values.email} handleChange={handleChange} name="email" isChanged={ischanged} title="Ел.Почта" nickname={userEmail} />
                    </div>
                    {ischanged && <button type="submit" onSubmit={onSubmit} className={s.changeBtn}>Изменить</button>}
                    <p className={s.youAreBad}>Вы не подтвердили аккаунт.Письмо с подтверждением на вашей почте.</p>
                </form>



            )}
        </Formik>
    )
}



const Tovars: React.FC = () => {
    return (
        <>
            <div className={s.tovars_title}>Мои заказы</div>
            <div className={s.tovars_wrap}>
                <Card _id="1" title={'el.title'} value={1} colors={['el.htmlColor']} photo={['el.photos']} isBuy={false} />
                {/* <Card isBuy={false} />
                <Card isBuy={false} />
                <Card isBuy={false} />
                <Card isBuy={false} /> */}
            </div>
        </>
    )
}

export const UserPage: React.FC = () => {
    const navigate = useNavigate()

    const value = localStorage.getItem('token')
    const dispatch = useAppDispatch()

    // @ts-ignore
    useEffect(async () => {
        if (!value) {
            navigate('/login')
            localStorage.removeItem('token')
        }
        if (value) {
            dispatch(setAuth(true))
        }
    }, [])




    const [isDesc, setIsDesc] = useState(true)
    const [isTovars, setIsTovars] = useState(false)

    useEffect(() => {
    }, [isTovars, isDesc])

    function logout() {
        dispatch(logOut())
        navigate('/')
    }

    function changeComponent(tov: boolean) {
        if (tov) {
            setIsDesc(false)
            setIsTovars(true)
        }
        if (!tov) {
            setIsDesc(true)
            setIsTovars(false)
        }
    }

    const fetchAuth = useSelector((state: RootState) => state.user.fetchAuth)

    return (
        <Wraper>
            <Section>
                <div className={s.usePage_wrap}>

                    <div className={s.usePage_wrap_columnOne}>
                        <div className={s.usePage_wrap_columnOne_titles}>
                            <div className={s.usePage_wrap_columnOne_titles_title} onClick={() => changeComponent(false)}>-личные данные</div>
                            <div className={s.usePage_wrap_columnOne_titles_title} onClick={() => changeComponent(true)}>-мои заказы</div>
                        </div>
                        <div onClick={logout} className={s.usePage_wrap_columnOne_out}>Выйти</div>
                    </div>
                    <div className={s.usePage_wrap_columnTwo}>
                        <p>Мой аккаунт</p>

                        <div className={s.usePage_wrap_columnTwo_wrap}>
                            {!fetchAuth && isDesc && <DescriptionComponent />}
                            {!fetchAuth && isTovars && <Tovars />}
                        </div>

                    </div>
                </div>
            </Section>
        </Wraper>
    )
}
