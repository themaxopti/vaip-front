import React, { useCallback, useEffect, useRef, useState } from "react"
import { Section } from "./Section"
import './scss/Wraper.scss'
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Store } from "./Store"
import { IsEighteen } from "../components/IsEighteen/IsEighteen"
import { ThemeContext } from "./context/context"


type PropsType = {
    children: React.ReactNode,
    openStore?: boolean,
    setOpenStore?: any
}


export const Wraper: React.FC<PropsType> = React.memo(({ children, ...props }) => {

    const [openStore, setOpenStore] = useState(false)

    return (
        <div className="wraper">
            <Store openStore={props.openStore || openStore} setOpenStore={props.setOpenStore || setOpenStore} />

            <Header openStore={props.openStore || openStore} setOpenStore={props.setOpenStore || setOpenStore} />
            <main className="main">
                {children}
            </main>
            <Footer />
        </div>
    )
})