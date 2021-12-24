import React, { useCallback, useEffect, useRef, useState } from "react"
import { Section } from "./Section"
import './scss/Wraper.scss'
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Store } from "./Store"
import { IsEighteen } from "../components/IsEighteen/IsEighteen"


type PropsType = {
    children: React.ReactNode
}


export const Wraper: React.FC = React.memo(({ children }) => {
   
    const [openStore, setOpenStore] = useState(false)


    return (
        <div className="wraper">
            <Store openStore={openStore} setOpenStore={setOpenStore} />


            <Header openStore={openStore} setOpenStore={setOpenStore} />
            <main className="main">
                {children}
            </main>
            <Footer />
        </div>
    )
})