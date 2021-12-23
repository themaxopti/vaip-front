import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { Card } from "../../usableComponents/Card"
import './Products.scss'


export const Categories: React.FC = () => {

    return (

        <div>
            <div className={"title_category"}>Категория</div>
            <div className={"category__cards"}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
