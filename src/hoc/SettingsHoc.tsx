import { Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react';


interface Props {
    HocFK: React.FC
}

export function SettingsHoc(WrappedComponent: React.FC) {



    const Function: React.FC = (props: any) => {
        useEffect(() => {
            window.scrollTo(0, 0)

            const body = document.querySelector('body')
            body?.classList.remove('stopScroll')
        }, [])

        return <WrappedComponent />
    }

    return Function
}

