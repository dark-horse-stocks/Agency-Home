import React from 'react';
import CustomAccordion from '../../Components/Accordion/CustomAccordion';
import FaqCard from '../../Components/Accordion Card/FaqCard';
import Button from '../../Components/Button/Button';
import BlogAccordion from '../../Components/Accordion/BlogAccordion';
import './style.scss';

export default function Faq() {
  return (
    <div className="container">
      <div className=" mt-header faq common-mt-header">
        <div className="common-main-header">
          <h1 className=" fs-75  ">
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">Frequently</span>
              </div>
            </div>
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">asked questions</span>
              </div>
            </div>
          </h1>
        </div>
      </div>
      <div className="d-flex Overview-Categories  mt-section ">
        <p className="mb-3 text-slide-up-animation-3">Overview</p>
        <div className="overview-content text-slide-up-animation-3">
          <p>
            Companies at darkhorsestocks are bifurcated into various different categories.
            Classification of these stocks in to various categories is explained below.
          </p>
          <a className="faq-link" href="https://reports.darkhorsestocks.in/faq">
            support@darkhorsestocks.in
          </a>
        </div>
      </div>

      <div className="faq-dropdown">
        <BlogAccordion right="I Darkhorsestocks Sebi registered?" card={<FaqCard />} />
      </div>
      <div className="mt-6 container d-flex justify-content-center">
        <a
          href="https://reports.darkhorsestocks.in/faq"
          className="magnetic-wrap button-animation-1 viewBtn "
          style={{ display: 'inline-block', cursor: 'pointer' }}>
          <div className="magnetic-area"></div>
          <button className="btn-component magnetic-content btn-animate btn">
            <span className="btn-animate__filler"></span>
            <span className="btn-animate__text">View all</span>
          </button>
        </a>
      </div>
    </div>
  );
}
