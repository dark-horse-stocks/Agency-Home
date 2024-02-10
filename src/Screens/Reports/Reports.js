import React from "react";
import Image1 from "../../Assets/Blog/Final/ex-1.png";
import Image2 from "../../Assets/Blog/Final/ex-2.png";
import Image3 from "../../Assets/Blog/Final/ex-3.png";
import Image4 from "../../Assets/Blog/Final/ex-4.png";
import Button from "../../Components/Button/Button";
import SecImage from "../../Assets/Blog/Final/2.jpg";
import SecImage1 from "../../Assets/Blog/Final/4.jpg";
import logo from "../../Assets/logo.mp4";
import "./style.scss";

import TextAnimation2 from "../../Components/Animation/TextAnimation2";
import TextAnimation3 from "../../Components/Animation/TextAnimation3";
import ImageAnimation from "../../Components/Animation/ImageAnimation";

export default function Blog() {
  return (
    <div>
      <div className="mt-header common-mt-header">
        <div className="  container common-main-header">
          <TextAnimation2 Tag="p" className="fs-30">
            Reports
          </TextAnimation2>
          <h1 className="fs-75">
            <TextAnimation2>Fundamentally strong</TextAnimation2>
            <TextAnimation2>companies</TextAnimation2>
          </h1>
        </div>
      </div>
      <div className="hero-img-container">
        <video width="100%" height="100%" autoPlay muted>
          <source src={logo} type="video/mp4" />
        </video>
      </div>
      <div className=" mt-section container common-mt-section">
        <div className="w-70 dashbord-section">
          <TextAnimation3 Tag="p" className="fs-30">
            Darkhorsestock reports feature a weekly presentation of a
            fundamentally strong company, accompanied by a detailed research
            report about the company. Our reports offer a comprehensive analysis
            of each company, concluding with a concise summary at the end of
            each report. We are committed to providing our readers with valuable
            insights and knowledge to help them make informed investment
            decisions. So far majority of the companies suggested have delivered
            a stellar performance post suggestion with almost 30% of companies
            up 100% since suggested.
          </TextAnimation3>
          <div className="d-flex justify-content-center dashbord-btn">
            <a
              href="https://www.darkhorsestocks.in/"
              className="magnetic-wrap button-animation-1 "
              style={{ display: "inline-block", cursor: "pointer" }}
            >
              <div className="magnetic-area"></div>
              <button className="btn-component magnetic-content btn-animate btn">
                <span className="btn-animate__filler"></span>
                <span className="btn-animate__text">Go to reports</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="section-img-container mt-section ">
        <img src={SecImage} alt="Hero" className="hero-img" />
      </div>

      <div className="container reports d-flex mt-section fs-30 feature-section flex-column-tablet feature-section-common">
        <div>
          <TextAnimation3 Tag="h4">7+ years</TextAnimation3>
          <TextAnimation3 Tag="h4">of</TextAnimation3>
          <TextAnimation3 Tag="h4">experience</TextAnimation3>
        </div>
        <div>
          <TextAnimation3 Tag="p" className="overview-content">
            Darkhorsestock reports provide information about companies that may
            have been overlooked by the majority of analysts or broking houses,
            but possess great potential. Most of these companies may not be
            well-known to the general public. Our aim is to offer our readers
            access to valuable insights and knowledge to help them make informed
            decisions.
          </TextAnimation3>
          <br />
          <div className="overview-content">
            <a
              href="https://www.darkhorsestocks.in/philosophy-Page"
              className="magnetic-wrap button-animation-1 "
              style={{ display: "inline-block", cursor: "pointer" }}
            >
              <div className="magnetic-area"></div>
              <button className="btn-component magnetic-content btn-animate btn">
                <span className="btn-animate__filler"></span>
                <span className="btn-animate__text">Philosophy</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-section d-flex container dashbord-image flex-column-tablet">
        <ImageAnimation className="dashbord-image__item dashbord-image__first-img">
          <img src={Image1} alt="Image" />
        </ImageAnimation>
        <ImageAnimation className="dashbord-image__item dashbord-image__secend-img">
          <img src={Image2} alt="Image" />
        </ImageAnimation>
        <ImageAnimation className="dashbord-image__item dashbord-image__first-img">
          <img src={Image3} alt="Image" />
        </ImageAnimation>
        <ImageAnimation className="dashbord-image__item dashbord-image__second-img">
          <img src={Image4} alt="Image" />
        </ImageAnimation>
      </div>

      <div className="container d-flex mt-section fs-30 feature-section flex-column-tablet feature-section-common">
        <div>
          <TextAnimation3 Tag="h4">How much</TextAnimation3>
          <TextAnimation3 Tag="h4">returns</TextAnimation3>
          <TextAnimation3 Tag="h4">can one expect ?</TextAnimation3>
        </div>
        <TextAnimation3 Tag="p" className="overview-content">
          Darkhorsestock reports feature a weekly presentation of a
          fundamentally strong company, accompanied by a detailed research
          report about the company. Our reports offer a comprehensive analysis
          of each company, concluding with a concise summary at the end of each
          report. We are committed to providing our readers with valuable
          insights and knowledge to help them make informed investment
          decisions. So far majority of the companies suggested have delivered a
          stellar performance post suggestion with almost 30% of companies up
          100% since suggested.
        </TextAnimation3>
      </div>

      <div className="section-img-container mt-section ">
        <img src={SecImage1} alt="Hero" className="hero-img" />
      </div>

      <div className="container end-wrapper mt-section end-section-common">
        <div>
          <TextAnimation3 Tag="h2" className="fs-95 header-fs-tablet">
            In the end ✨
          </TextAnimation3>
          <TextAnimation3 Tag="p" className="fs-30">
            The ❤️ of our investment strategy is centred on producing consistent
            alpha and, more crucially, identifying companies that are not on the
            radar of most analysts. To do so, we supplement our in-depth
            industry expertise with rigorous primary research, cutting-edge
            technology, and in-house unique tools to uncover insights and
            provide value.
          </TextAnimation3>
          <TextAnimation3 Tag="p" className="fs-30 end-secend">
            Our team includes some of the most prestigious research analysts,
            fund managers / portfolio managers, and other professionals, making
            it the most effective team of its kind in the Industry. In order to
            uncover the best stocks for our users, our team carries out its own
            independent and bottom-up analysis, which includes studying business
            annual reports and analysing them in depth. 😊
          </TextAnimation3>
        </div>
      </div>
    </div>
  );
}
