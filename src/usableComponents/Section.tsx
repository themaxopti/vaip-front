import React, { useState } from "react"
import s from './scss/Section.module.scss'
import classNames from 'classnames'



type Position = 'static' | 'relative'




type PropsType = {
    children: React.ReactNode,
    centreObj?: boolean,
    backgroundColor?: string,
    positionFX?: boolean,
    zIndex?: number,
    position?: Position
}



export const Section: React.FC<PropsType> = ({
    children,
    centreObj = false,
    backgroundColor = 'white',
    positionFX = false,
    zIndex,
    position = 'static'
}) => {


    let sectionClasses = classNames({
        [s.section__wrap]: true,
        [s.centerItem]: centreObj,
    })


    let mainSectionClasses = classNames({
        [s.section]: true,
        [s.positionFX]: positionFX
    })


    return (
        <div className={mainSectionClasses} style={{ backgroundColor: backgroundColor, zIndex}}>
            <div className={sectionClasses} style={{backgroundColor:backgroundColor}}>
                {children}
            </div>
        </div>
    )
}