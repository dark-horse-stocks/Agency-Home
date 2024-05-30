import React from "react";
import HeroImg from "../../Assets/hereo.png";
import SecImage1 from "../../Assets/Fundalysis/1.jpg";
import SecImage2 from "../../Assets/Fundalysis/2.jpg";
import SecImage7 from "../../Assets/Fundalysis/7.jpg";
import Image1 from "../../Assets/Fundalysis/image-1.png";
import Image2 from "../../Assets/Fundalysis/image-2.png";
import Image3 from "../../Assets/Fundalysis/image-3.png";
import "./style.scss";

import TextAnimation2 from "../../Components/Animation/TextAnimation2";
import TextAnimation3 from "../../Components/Animation/TextAnimation3";
import ImageAnimation from "../../Components/Animation/ImageAnimation";

export default function Fundalysis() {
  return (
    <div>
      <div className="mt-header common-mt-header">
        <div className="  container common-main-header">
          <TextAnimation2 Tag="p" className="fs-30">
            Fundalysis
          </TextAnimation2>
          <h1 className="fs-75">
            <TextAnimation2>Mutual fund analytics</TextAnimation2>
            <TextAnimation2>platform</TextAnimation2>
          </h1>
        </div>
      </div>
      <div className="hero-img-container">
        <img src={SecImage1} alt="Hero" className="hero-img" />
      </div>
      <div className=" mt-section container common-mt-section">
        <div className="w-70 dashbord-section">
          <TextAnimation3 Tag="p" className="fs-30">
            Fundalysis is a comprehensive mutual fund database that sources data
            from various public sources about mutual fund schemes, holdings, and
            sectorial holdings. Our platform generates a wide range of reports
            based on this data, which are used for research and analysis
            purposes.
          </TextAnimation3>
          <div className="d-flex justify-content-center dashbord-btn">
            <a
              href="https://mf.darkhorsestocks.in/home"
              className="magnetic-wrap button-animation-1 "
              style={{ display: "inline-block", cursor: "pointer" }}
            >
              <div className="magnetic-area"></div>
              <button className="btn-component magnetic-content btn-animate btn">
                <span className="btn-animate__filler"></span>
                <span className="btn-animate__text">Fundalysis</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="section-img-container mt-section ">
        <img src={SecImage2} alt="Hero" className="hero-img" />
      </div>

      <div className="container d-flex mt-section fs-30 feature-section flex-column-tablet feature-section-common">
        <TextAnimation3 className="title-padding" Tag="h4">
          Features
        </TextAnimation3>
        <TextAnimation3 Tag="p" className="overview-content">
          It allows analysis of data based on mutual fund schemes, AMC as a
          whole, sector, individual companies, and fund managers. The platform
          generates various types of reports, including monthly scheme reports,
          sectorial analysis, company analysis, fund manager analysis, and
          economic analysis. The data can also be mapped with live market trends
          to identify meaningful patterns.
        </TextAnimation3>
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
          <img src={Image3} alt="Image" />
        </ImageAnimation>
      </div>

      <div className="container d-flex mt-section fs-30 feature-section flex-column-tablet feature-section-common">
        <TextAnimation3 className="title-padding" Tag="h4">
          What's new?
        </TextAnimation3>
        <TextAnimation3 Tag="p" className="overview-content">
          Fundalysis currently covers over 200 schemes across 22 fund houses on
          a monthly basis. Various reports, including individual scheme reports,
          are generated monthly and provided to subscribers for their own
          analysis. This type of analytics is not currently offered by any other
          platform.
        </TextAnimation3>
      </div>

      <div className="section-img-container mt-section ">
        <img src={SecImage7} alt="Hero" className="hero-img" />
      </div>
    </div>
  );
}
