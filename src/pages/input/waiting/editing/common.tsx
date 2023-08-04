import React from 'react'
import { Header } from "~/componentsRoot/Header";
import HeaderBody from "../../../components/elenasComponents/HeaderBody";
import QuestionsBody from "../../../components/elenasComponents/QuestionsBody";
import AccordionMiddle from '~/pages/components/elenasComponents/AccordionMiddle';




const Common = () => {
  return (
    <div>
        <Header />
        <div >
            <HeaderBody/>
            <QuestionsBody/>
            <AccordionMiddle/>
            </div>
    </div>
  )
}

export default Common