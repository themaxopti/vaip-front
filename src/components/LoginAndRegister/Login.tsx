import classNames from "classnames"
import { Formik } from "formik"
import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { RootState, useAppDispatch } from "../../redux/redux-toolkit-store"
import { login } from "../../redux/user-reducer"
import { Section } from "../../usableComponents/Section"
import { Wraper } from "../../usableComponents/Wraper"
import s from './Login.module.scss'
import Loading from '../../assets/imgages/gif/Rolling-1s-200px (4).gif'

interface Errors {
    email?: string,
    password?: string
}

const Form: React.FC = () => {
    const dispatch = useAppDispatch()
    const message = useSelector((state: RootState) => state.user.messageLoginForm)

    const isFetching = useSelector((state: RootState) => state.user.fetchUser)
    const navigate = useNavigate()
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors: Errors = {};
                if (!values.email) {
                    errors.email = 'Поле должно быть заполнено';
                }
                if (!values.password) {
                    errors.password = 'Поле должно быть заполнено'
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                const { email, password } = values

                const objLogin = {
                    email, password
                }


                dispatch(login(objLogin)).then(data => data == 301 ? navigate('/userPage') : null)
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
                        <input
                            className={s.input}
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email ? touched.email && <p style={{ color: 'red' }}>{errors.email}</p> : null}
                        <input
                            className={s.input}
                            type="password"
                            placeholder="Пароль"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />

                        {errors.password ? touched.password && <p style={{ color: 'red' }}>  {errors.password}</p> : null}

                        {message ? <p>{message}</p> : null}

                        <button className={s.btnSubmit} type="submit">
                            
                            {isFetching ? <img style={{width:'30px',height:'30px'}} src={Loading} /> : <span>Войти</span> }
                        </button>
                    </form>
                </>
            )}
        </Formik>
    )
}

export const Login: React.FC = () => {

    return (
        <Wraper>
            <Section centreObj={true}>
                <div className={s.login_wrap}>
                    <h1 style={{ fontFamily: 'Manrope' }}>Вход</h1>

                    <Form />

                    <div style={{ marginTop: '20px' }}>Еще нет аккаунта ? Тогда   <Link style={{ color: 'black', fontWeight: 'bold', marginLeft: '4px' }} to="/register">   Зарегестрируйтесь</Link></div>
                </div>
            </Section>
        </Wraper>

    )
}
