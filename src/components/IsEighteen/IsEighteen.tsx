import classNames from "classnames"
import React, { useCallback, useEffect, useRef, useState } from "react"
import s from './IsEighteen.module.scss'


type PropsType = {
    children: React.ReactNode
}


function hideWindow() {
    // @ts-ignore
    let hide = JSON.parse(localStorage.getItem('hide') || false)

    hide = false

    JSON.stringify(localStorage.setItem('hide', hide))
}

// @ts-ignore
window.hideWindow = hideWindow


interface Props {
    animation:boolean
    setAnimation:any
}


export const IsEighteen: React.FC<Props> = React.memo(({ children,animation,setAnimation }) => {
    // @ts-ignore
    let hide = JSON.parse(localStorage.getItem('hide') || false)

    const [isEighteen, setIsEighteen] = useState(true)
    const [isHide, setIsHide] = useState(hide)

    const classes = classNames({
        [s.isEighteen]: true,
        [s.hide]: isHide
    })

    function hideLocal() {
        // @ts-ignore
        let hide = JSON.parse(localStorage.getItem('hide') || false)

        hide = true

        JSON.stringify(localStorage.setItem('hide', hide))
    }

    


    useEffect(() => {
        const body = document.querySelector('body')
        body?.classList.remove('stopScroll')
    }, [!isHide])

    

    useEffect(() => {
        if (isEighteen) {
            if(hide){
                return
            }

            document.addEventListener('DOMContentLoaded', () => {
                const body = document.querySelector('body')
                body?.classList.add('stopScroll')
            })
        }

        if (!isEighteen) {

            document.addEventListener('DOMContentLoaded', () => {
                const body = document.querySelector('body')
                body?.classList.remove('stopScroll')
            })
            setIsHide(true)
            hideLocal()
            setAnimation(true)
        }
    }, [isEighteen])



    return (
        <div className={classes}>
            <div className={s.wrap}>
                <div>
                    Вам есть 18?
                </div>
                <div onClick={() => setIsEighteen(!isEighteen)} className={s.btn}>
                    Да
                </div>
            </div>
        </div>
    )
})