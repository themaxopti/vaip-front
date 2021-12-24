import React, { useCallback, useEffect, useRef, useState } from "react"
import s from './Animation.module.scss'
import { useTrail, a, useSpring, animated, config } from '@react-spring/web'
import SigaretsIcon from '../../assets/imgages/NoSigarets.svg'
import { Spring } from 'react-spring'


const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 10, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 500, height: 0 },
    })
    return (
        <div className={s.flexItem}>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}




export const Animation: React.FC = React.memo(({ children }) => {

    const [open, set] = useState(true)

    const { size, ...rest } = useSpring({
        config: config.stiff,
        from: { size: '1000px', transition: '1s', opacity: 1,display:'flex' },
        to: async (next) => {
            await next({ size: open ? '400px' : '1000px' })
            await next({ opacity: open ? 0 : 1, delay: 2000 })
            await next({ display: open ? 'none' : 'flex' })
        }
    })

    return (
        <animated.div style={{display:rest.display,opacity:rest.opacity}} className={s.animation} onClick={() => set(prew => !prew)}>

            <animated.div onClick={() => set(prev => !prev)} style={{ maxWidth: size, transition: rest.transition,opacity:rest.opacity }} className={s.wrap}>
                <Trail open={open}>
                    <div><div className={s.iconColumn}><img src={SigaretsIcon} alt="" /></div></div>
                    <div>Брось курить сигареты</div>
                </Trail>
            </animated.div>

        </animated.div >
    )
})