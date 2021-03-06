import classNames from "classnames"
import React, { useEffect, useRef, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import './scss/Navbar.scss'

interface NavElemetn {
    title: string,
    isClicked: number | null,
    isCategory?: boolean,
    titleCategory?: string
}




export const Navbar: React.FC = () => {

    const [scrollTop, setScrollTop] = useState(0)

    let [searchParams, setSearchParams] = useSearchParams()

    const [activeSlide, setActiveSlide] = useState<number>(0)

    const categoryId = searchParams.get('categoryId')


    useEffect(() => {

        // @ts-ignore
        activeSlideRef?.current.forEach(el => el.classList.remove('active'))

        const categoryId = searchParams.get('categoryId') || 0

        // @ts-ignore
        activeSlideRef.current[categoryId].classList.add('active')
    }, [categoryId])


    useEffect(() => {

        // @ts-ignore
        activeSlideRef?.current.forEach(el => el.classList.remove('active'))

        const categoryId = searchParams.get('categoryId') || 0

        console.log(categoryId)
        // @ts-ignore
        activeSlideRef.current[categoryId].classList.add('active')
    }, [activeSlide])



    const tovars: NavElemetn[] = [
        { title: 'Категории', isClicked: null, isCategory: true },
        { title: 'iqos', isClicked: null ,titleCategory:'iqos'},
        { title: 'lil SOLID', isClicked: null ,titleCategory:'lilSolid'},
        { title: 'Аксесуары', isClicked: null,titleCategory:'embalishment' },
        { title: 'Vaip', isClicked: null,titleCategory:'vape' },
        { title: 'Блоки стиков', isClicked: null,titleCategory:'sticks'}
    ]



    const activeSlideRef = useRef([]);



    return (
        <div className={"navbar"}>
            {
                tovars.map((el, i) => {
                    // @ts-ignore
                    return <Link key={i} style={{ color: 'black' }} to={`/${el.isCategory ? 'categories' : 'products'}?categoryId=${i}&title=${el.titleCategory}&titleH=${el.title}`}> <div onClick={() => { setActiveSlide(i) }} ref={el => { activeSlideRef.current[i] = el }} key={i} className="navbar_item">
                        {el.title}
                    </div></Link>
                })
            }
        </div>
    )
}
