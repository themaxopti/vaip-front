import { Section } from "../../usableComponents/Section"
import { Wraper } from "../../usableComponents/Wraper"
import s from './ThanksPage.module.scss'

export const Thanks: React.FC = () => {
    return (
     <Wraper>
         <Section minHeight="600px">
             <div className={s.wrap}>Ваш аккаунт подтвержден</div>
         </Section>
     </Wraper>           
    )
}