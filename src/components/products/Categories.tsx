import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { Route, Routes, useSearchParams } from "react-router-dom"
import { Card } from "../../usableComponents/Card"
import './Products.scss'
import { RootState } from "../../redux/redux-toolkit-store"
import Loading from '../../assets/imgages/gif/Spinner-1s-200px.gif'


export const Categories: React.FC = () => {
    const [searchParams,setSearchParams] = useSearchParams()

    const products = useSelector((state:RootState) => state.products.currentProductOnPage)
    const isFetching = useSelector((state:RootState) => state.products.fetchingProducts)
    const title = searchParams.get('titleH') || 'Категория'   

    return (

        <div>
            <div className={"title_category"}>{title}</div>
            <div className={"category__cards"}>
                {
                    !isFetching && products.map(el => <Card key={el._id} _id={el._id} title={el.title} value={el.value} colors={el.htmlColor} photo={el.photos} />) || <img style={{width:'70px',height:'70px'}} src={Loading} alt="" />
                }
                {/* <Card title={'el.title'} value={1} colors={['el.htmlColor']} photo={['el.photos']} /> */}
                {/* <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card /> */}
            </div>
        </div>
    )
}
