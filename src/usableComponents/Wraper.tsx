import React from "react"
import { Section } from "./Section"
import  './scss/Wraper.scss'
import { Header } from "./Header"
import { Footer } from "./Footer"


type PropsType = {
    children: React.ReactNode
}


export const Wraper: React.FC = ({ children }) => {
    return (
        <div className="wraper">
            <Header/>
            <main className="main">
                {children}
            </main>
            <Footer />
        </div>
    )
}