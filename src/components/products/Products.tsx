import React, { useEffect, useRef } from "react"
import { Wraper } from "../../usableComponents/Wraper"
import  './Products.scss'
import { Section } from "../../usableComponents/Section"
import { Navbar } from "../../usableComponents/Navbar"
import { Categories } from "./Categories"
import { useSearchParams } from "react-router-dom"
import { fetchCurrentProducts } from "../../redux/product-reducer"
import { useAppDispatch } from "../../redux/redux-toolkit-store"

export const Products: React.FC = () => {

    const dispatch = useAppDispatch()

    let [searchParams,setSearchParams] = useSearchParams()

    const title = searchParams.get('title') || ''

    useEffect(() => {
        if(title == ''){
            dispatch(fetchCurrentProducts(title))
        }
    },[])

    useEffect(() => {
        dispatch(fetchCurrentProducts(title))
        window.scrollTo(0,0)
    },[title])
    

    return (
        <Wraper>
            <Section>
                <div className={"wrapper_products"}>
                    <Navbar />
                    <div className={"other_content"}>
                        <Categories />
                    </div>
                </div>
            </Section>
        </Wraper>
    )
}
