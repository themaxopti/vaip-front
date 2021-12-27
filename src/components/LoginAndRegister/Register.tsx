import classNames from "classnames"
import { Field, Formik } from "formik"
import React, { useEffect, useRef, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Section } from "../../usableComponents/Section"
import { Wraper } from "../../usableComponents/Wraper"
import s from './Login.module.scss'
import { RegisterType } from "../../api/Types"
import { RootState, useAppDispatch } from "../../redux/redux-toolkit-store"
import { fetchRegisterUser, registerUserData } from "../../redux/user-reducer"
import { useSelector } from "react-redux"
import {useNavigate} from 'react-router-dom'

interface Errors {
    email?: string,
    password?: string,
    name?: string
}

const Form: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const message = useSelector((state: RootState) => state.user.messageRegisterForm)

    const [status, setStatus] = useState<any>('')

    function redirectAndChange(){
        navigate('/login')
        registerUserData('')   
    }

    return (
        <Formik
            initialValues={{ email: '', password: '', repetPassword: '', name: '' }}
            validate={values => {
                const errors: Errors = {};
                if (!values.email) {
                    errors.email = 'Поле должно быть заполнено';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Введите корректный емейл';
                }

                if (!values.name) {
                    errors.name = 'Поле должно быть заполнено'
                } else if (values.name.length <= 2) {
                    errors.name = 'Имя должно быть длинее 2 символов'
                }

                if (!values.name) {
                    errors.name = 'Поле должно быть заполнено'
                }
                if (values.password.length < 6) {
                    errors.password = 'Пароль должен быть больше 6 символов'
                }
                if (values.password !== values.repetPassword) {
                    errors.password = 'Пароли не совпадают'
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                const { email, password, name } = values

                dispatch(fetchRegisterUser(password, email, name)).then(data => data == '201' ? redirectAndChange() : null)
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
                /* and other goodies */
            }) => (
                <>
                    <form autoComplete={"off"} className={s.form_wrap} onSubmit={handleSubmit}>
                        <Field
                            className={s.input}
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email ? touched.email && <p style={{ color: 'red' }}> {errors.email}</p> : null}

                        <Field
                            className={s.input}
                            type="text"
                            placeholder="Имя"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name ? <p style={{ color: 'red' }}> {errors.name}</p> : null}

                        <Field
                            className={s.input}
                            type="password"
                            placeholder="Пароль"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <Field
                            className={s.input}
                            type="password"
                            placeholder="Повторите пароль"

                            name="repetPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.repetPassword}
                        />
                        {errors.password && touched.password ? <p style={{ color: 'red' }}>{errors.password}</p> : null}

                        {message !== '' ? <p style={{ color: 'red' }}>{message}</p> : null}
                        <button className={s.btnSubmit} type="submit">
                            Зарегестрироваться
                        </button>
                    </form>
                </>
            )}
        </Formik>
    )
}

export const Register: React.FC = () => {

    return (
        <Wraper>
            <Section centreObj={true}>
                <div className={s.login_wrap}>
                    <h1 style={{ fontFamily: 'Manrope' }}>Регистрация</h1>

                    <Form />

                    <div style={{ marginTop: '20px' }}>Уже есть аккаунт? Тогда   <Link style={{ color: 'black', fontWeight: 'bold', marginLeft: '4px' }} to="/login">   Войдите</Link></div>
                </div>
            </Section>
        </Wraper>

    )
}
