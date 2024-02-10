import React from "react";
import CustomAccordion from "../../Components/Accordion/CustomAccordion";
import FaqCard from "../../Components/Accordion Card/FaqCard";
import Button from "../../Components/Button/Button";
import BlogAccordion from "../../Components/Accordion/BlogAccordion";
import "./style.scss";

import TextAnimation2 from "../../Components/Animation/TextAnimation2";
import TextAnimation3 from "../../Components/Animation/TextAnimation3";

export default function Faq() {
  return (
    <div className="container">
      <div className="mt-header faq common-mt-header">
        <div className="common-main-header">
          <h1 className="fs-75">
            <TextAnimation2>Frequently</TextAnimation2>
            <TextAnimation2>asked questions</TextAnimation2>
          </h1>
        </div>
      </div>
      <div className="d-flex Overview-Categories  mt-section">
        <TextAnimation3 Tag="p" className="mb-3">
          Overview
        </TextAnimation3>
        <div className="overview-content">
          <TextAnimation3 Tag="p">
            Companies at darkhorsestocks are bifurcated into various different
            categories. Classification of these stocks in to various categories
            is explained below.
          </TextAnimation3>
          <a className="faq-link" href="https://www.darkhorsestocks.in/faq">
            <TextAnimation3>support@darkhorsestocks.in</TextAnimation3>
          </a>
        </div>
      </div>

      <div className="faq-dropdown">
        <BlogAccordion
          right="I Darkhorsestocks Sebi registered?"
          card={<FaqCard />}
        />
      </div>
      <div className="mt-6 container d-flex justify-content-center">
        <a
          href="https://www.darkhorsestocks.in/faq"
          className="magnetic-wrap button-animation-1 viewBtn "
          style={{ display: "inline-block", cursor: "pointer" }}
        >
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
