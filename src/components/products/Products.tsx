import React, { useEffect, useRef } from "react"
import { Wraper } from "../../usableComponents/Wraper"
import  './Products.scss'
import { Section } from "../../usableComponents/Section"
import { Navbar } from "../../usableComponents/Navbar"
import { Categories } from "./Categories"

export const Products: React.FC = () => {

    

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
