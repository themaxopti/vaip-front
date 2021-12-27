// CategoriesOf


import React, { useEffect, useRef } from "react"
import { Wraper } from "../../usableComponents/Wraper"
import '../products/Products.scss'
import { Section } from "../../usableComponents/Section"
import { Navbar } from "../../usableComponents/Navbar"
import embalCat from '../../assets/imgages/embalishmentCat.png'
import lilSolidCat from '../../assets/imgages/LilSolid.png'
import IqoslCat from '../../assets/imgages/iqosCat.png'
import VapeCat from '../../assets/imgages/VapeCat.png'
import StickslCat from '../../assets/imgages/sticksTwo.png'
import { Link } from "react-router-dom"




const Category: React.FC = () => {

    interface Categories {
        title: string,
        src: any,
        titleCategory:string,
        id:number
    }


    const categories: Categories[] = [
        { title: 'Iqos', src: IqoslCat,titleCategory:'iqos',id:1 },
        { title: 'Vape', src: VapeCat,titleCategory:'vape',id:4 },
        { title: 'Lil Solid', src: lilSolidCat ,titleCategory:'lilSolid',id:2},
        { title: 'Аксесуары', src: embalCat ,titleCategory:'embalishment',id:3},
        { title: 'Блоки для нагревания табака', src: StickslCat ,titleCategory:'sticks',id:5},
    ]

    return (
        <>
            {categories.map((el,i) => {
                return <div key={i} className="category">
                    <Link to={`/products?categoryId=${el.id}&title=${el.titleCategory}&titleH=${el.title}`}>
                        <div className="category__columnOne">
                            <div className="category__columnOne_img">
                                <img src={el.src} alt="" />
                            </div>
                        </div>
                        <div className="category__columnTwo">
                            <div className="category__columnTwo_title">{el.title}</div>
                            <div className="category__columnTwo_btn">Детальнее</div>
                        </div>
                    </Link>
                </div>
            })}
        </>
    )
}


export const CategoriesOf: React.FC = () => {


    return (
        <Wraper>
            <Section>
                <div className={"wrapper_products"}>
                    <Navbar />
                    <div className={"other_content"}>
                        <Category />
                    </div>
                </div>
            </Section>
        </Wraper>
    )
}
