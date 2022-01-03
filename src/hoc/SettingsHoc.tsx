import { Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '../redux/redux-toolkit-store';
import { auth } from '../redux/user-reducer';


interface Props {
    HocFK: React.FC
}

export function SettingsHoc(WrappedComponent: React.FC) {

    const Function: React.FC = (props: any) => {
        const dispatch = useAppDispatch()

        useEffect(() => {
            window.scrollTo(0, 0)

            const body = document.querySelector('body')
            body?.classList.remove('stopScroll')
        }, [])

        return <WrappedComponent />
    }

    return Function
}

