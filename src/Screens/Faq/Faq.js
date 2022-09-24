import React from 'react'
import CustomAccordion from '../../Components/Accordion/CustomAccordion'
import FaqCard from "../../Components/Accordion Card/FaqCard"
import Button from '../../Components/Button/Button'

export default function Faq() {
  return (
    <div>
              <div className=" mt-header">
        <h1 className="container fs-95 w-80">
        Frequently<br/> asked  questions
        </h1>
      </div>
      <div className="d-flex Overview-Categories container mt-section ">
        <p className="mb-3">Overview</p>

        <p className="overview-content">
          Companies at darkhorsestocks are bifurcated into various different
          categories. Classification of these stocks in to various categories is
          explained below.
        </p>
      </div>

      <CustomAccordion right="I Darkhorsestocks Sebi registered?" card={<FaqCard/>}  />
      <div className='mt-6 container d-flex justify-content-center'>
      <Button 
    text="View all" />
      </div>

    </div>
  )
}
