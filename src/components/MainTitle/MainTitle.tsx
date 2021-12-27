import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { SettingsHoc } from "../../hoc/SettingsHoc"
import { RootState } from "../../redux/redux-toolkit-store"
import { Wraper } from "../../usableComponents/Wraper"
import { AboutIqos } from "./AboutIqos"
import { AboutVaip } from "./AboutVaip"
import { NeverLate } from "./NeverLate"
import { SliderVaip } from "./Slider"
import { VaipAndIqos } from "./VaipAndIqos"
import { WhatIsIcos } from "./WhatIsIcos"
import { increment } from "../../redux/slice"
import { useAppDispatch } from '../../redux/redux-toolkit-store'
import { fetchRandomItems } from "../../redux/product-reducer"

export const MainTitle: React.FC = () => {
  
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchRandomItems())
    },[])

    return (
        <Wraper>
            <WhatIsIcos />
            <AboutIqos />
            <AboutVaip />
            <VaipAndIqos />
            <SliderVaip />
            <NeverLate />
        </Wraper>
    )
}
