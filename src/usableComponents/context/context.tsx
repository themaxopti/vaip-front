import React, { SetStateAction, useEffect, useState } from "react"
import { Dispatch } from "redux"

interface Props {
    // children: React.ReactNode,
    openStore: boolean,
    setOpenStore: any,
}


interface Context {
    openStore: boolean,
    setOpenStore: any,
}

function useValues(value:boolean){
    const [openStore, setOpenStore] = useState(value)

    return {openStore, setOpenStore}
}

export const ThemeContext = React.createContext({} as Props)
