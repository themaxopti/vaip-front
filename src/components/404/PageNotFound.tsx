import { Section } from "../../usableComponents/Section"
import { Wraper } from "../../usableComponents/Wraper"
import s from './PageNotFound.module.scss'


export const PageNotFound = () => {
    return (
        <Wraper>
            <Section minHeight="600px">
                <div className={s.wrap}>
                    404 Страница не найдена
                </div>
            </Section>
        </Wraper>
    )
}