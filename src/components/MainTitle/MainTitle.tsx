import React, { useEffect } from "react"
import { SettingsHoc } from "../../hoc/SettingsHoc"
import { Wraper } from "../../usableComponents/Wraper"
import { AboutIqos } from "./AboutIqos"
import { AboutVaip } from "./AboutVaip"
import { NeverLate } from "./NeverLate"
import { SliderVaip } from "./Slider"
import { VaipAndIqos } from "./VaipAndIqos"
import { WhatIsIcos } from "./WhatIsIcos"


export const MainTitle: React.FC = () => {

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
