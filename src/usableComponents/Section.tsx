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
    position?: Position,
    fullscreen?: boolean,
    backgroundImage?: any,
    withImage?: boolean,
    borderBottom?: boolean,
    overflowHid?:string,
    minHeight?:string
}



export const Section: React.FC<PropsType> = ({
    children,
    centreObj = false,
    backgroundColor = 'white',
    positionFX = false,
    zIndex,
    position = 'static',
    fullscreen = false,
    backgroundImage,
    withImage = false,
    borderBottom = false,
    overflowHid,
    minHeight
}) => {


    let sectionClasses = classNames({
        [s.section__wrap]: true,
        [s.centerItem]: centreObj,
        [s.borderBottom]:borderBottom
    })


    let mainSectionClasses = classNames({
        [s.section]: true,
        [s.positionFX]: positionFX,
        [s.fullscreen]: fullscreen,
        [s.withImage]: withImage
    })


    return (
        <div className={mainSectionClasses} style={{ backgroundColor: backgroundColor, zIndex,minHeight:minHeight }}>
            <img src={backgroundImage} alt="" />
            <div className={sectionClasses} style={{ backgroundColor: backgroundColor,overflow:overflowHid }}>
                {children}
            </div>
        </div>
    )
}