import classNames from "classnames"
import { Formik } from "formik"
import React, { useEffect, useRef, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Section } from "../../usableComponents/Section"
import { Wraper } from "../../usableComponents/Wraper"
import s from './Login.module.scss'


interface Errors {
    email?: string,
    password?: string
}

const Form: React.FC = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '', repetPassword: '' }}
            validate={values => {
                const errors: Errors = {};
                if (!values.email) {
                    errors.email = 'Поле должно быть заполнено';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Введите корректный емейл';
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
                setTimeout(() => {
                    alert(4)
                }, 400);
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
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <p style={{ color: 'red' }}> {errors.email && touched.email && errors.email}</p>
                        <input
                            className={s.input}
                            type="password"
                            placeholder="Пароль"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <input
                            className={s.input}
                            type="password"
                            placeholder="Повторите пароль"

                            name="repetPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.repetPassword}
                        />
                        <p style={{color:'red'}}>{errors.password || touched.password || touched.repetPassword}</p>
                        
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
