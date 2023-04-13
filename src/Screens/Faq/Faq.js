import React from "react";
import CustomAccordion from "../../Components/Accordion/CustomAccordion";
import FaqCard from "../../Components/Accordion Card/FaqCard";
import Button from "../../Components/Button/Button";

export default function Faq() {
  return (
    <div>
      <div className=" mt-header faq common-mt-header">
        <div className="common-main-header">
        <h1 className="container fs-75 w-80 ">
          <div className="text-slide-up-animation-wrapper-2">
            <div className="text-slide-up-animation-content-2">
              <span className="text-slide-up-animation-text-2">Frequently</span>
            </div>
          </div>
          <div className="text-slide-up-animation-wrapper-2">
            <div className="text-slide-up-animation-content-2">
              <span className="text-slide-up-animation-text-2">
                asked questions
              </span>
            </div>
          </div>
        </h1>
        </div>
    
      </div>
      <div className="d-flex Overview-Categories container mt-section ">
        <p className="mb-3 text-slide-up-animation-3">Overview</p>

        <p className="overview-content text-slide-up-animation-3">
          Companies at darkhorsestocks are bifurcated into various different
          categories. Classification of these stocks in to various categories is
          explained below.
        </p>
      </div>

     <div className="faq-dropdown">
     <CustomAccordion
        right="I Darkhorsestocks Sebi registered?"
        card={<FaqCard />}
      />
     </div>
      <div className="mt-6 container d-flex justify-content-center">
        <Button text="View all" />
      </div>
    </div>
  );
}
