import React from "react";
import "./style.scss";
import Image from "../../Assets/Dashboard/Final/1.png";
import Image2 from "../../Assets/Dashboard/Final/2.jpg";
import Image3 from "../../Assets/Dashboard/Final/3.jpg";
import Image4 from "../../Assets/Dashboard/Final/4.jpg";
import Image5 from "../../Assets/Dashboard/Final/5.jpg";
import Image6 from "../../Assets/Dashboard/Final/6.jpg";

import TextAnimation2 from "../../Components/Animation/TextAnimation2";
import TextAnimation3 from "../../Components/Animation/TextAnimation3";
import ImageAnimation from "../../Components/Animation/ImageAnimation";

export default function Dashboard() {
  const mobile = window.innerWidth < 800;
  return (
    <div>
      <div className="mt-header common-mt-header">
        <div className="  container common-main-header">
          <TextAnimation2 Tag="p" className="fs-30">
            Dashboard
          </TextAnimation2>
          <h1 className="fs-75">
            <TextAnimation2>A unique platform to</TextAnimation2>
            <TextAnimation2>track all darkhorsestock</TextAnimation2>
            <TextAnimation2>ideas</TextAnimation2>
          </h1>
        </div>
      </div>
      <div className="hero-img-container">
        <img src={Image} alt="Hero" className="hero-img" />
      </div>
      <div className=" mt-section container common-mt-section mobile-screen">
        <div className="w-70 dashbord-section">
          <TextAnimation3 Tag="p" className="fs-30">
            Our platform offers a powerful dashboard that enables you to track
            all the companies we suggest in real-time, accompanied by
            comprehensive statistics such as daily gainers and losers, overall
            gainers and losers, and more. By providing this level of detail, we
            aim to reflect our performance in real-time, a feature that is not
            offered by any other advisory services we have encountered thus far.
          </TextAnimation3>
        </div>
        <div className="d-flex justify-content-center dashbord-btn">
          <a
            href="https://www.darkhorsestocks.in/dashboard"
            className="magnetic-wrap button-animation-1 "
            style={{ display: "inline-block", cursor: "pointer" }}
          >
            <div className="magnetic-area"></div>
            <button className="btn-component magnetic-content btn-animate btn">
              <span className="btn-animate__filler"></span>
              <span className="btn-animate__text">Go to Dashboard</span>
            </button>
          </a>
        </div>
      </div>

      <div className="section-img-container">
        <img src={Image2} alt="Hero" className="hero-img" />
      </div>

      <div className="container d-flex mt-section fs-30 feature-section flex-column-tablet feature-section-common mobile-screen">
        <TextAnimation3 Tag="h4" className="head-font">
          Features
        </TextAnimation3>
        <TextAnimation3 Tag="p" className="overview-content">
          Our platform provides a live data feed, along with historical charts
          of indices and all the darkhorsestocks we suggest, 52-week high-lows,
          distance from 52-week highs and lows, links to research reports,
          returns delivered by the companies, global indices, and more. With
          these features, we aim to provide our clients with a comprehensive
          understanding of the market and the companies we suggest.
        </TextAnimation3>
      </div>

      <div
        className={`${
          !mobile && "mt-section"
        } d-flex container dashbord-image flex-column-tablet`}
      >
        <ImageAnimation className="dashbord-image__item dashbord-image__first-img">
          <img src={Image3} alt="Image" />
        </ImageAnimation>
        <ImageAnimation className="dashbord-image__item dashbord-image__secend-img">
          <img src={Image4} alt="Image" />
        </ImageAnimation>
        <ImageAnimation className="dashbord-image__item dashbord-image__first-img">
          <img src={Image5} alt="Image" />
        </ImageAnimation>
        <ImageAnimation className="dashbord-image__item dashbord-image__second-img">
          <img src={Image6} alt="Image" />
        </ImageAnimation>
      </div>

      <div className="container dashboard d-flex mt-section fs-30 feature-section flex-column-tablet feature-section-common">
        <div>
          <TextAnimation3 Tag="h4">Why others</TextAnimation3>
          <TextAnimation3 Tag="h4">don't provide?</TextAnimation3>
        </div>
        <TextAnimation3 Tag="p" className="overview-content mt-3">
          Developing and maintaining a dashboard of this nature, complete with a
          live data feed, can be extremely costly and requires a significant
          effort. Furthermore, it also reveals your true performance, which can
          be a risk if it's not particularly strong. In contrast, other advisory
          services may prioritize marketing and subscriptions above providing
          transparency. Offering such a detailed analytical platform could
          potentially hinder their underlying motive.
        </TextAnimation3>
      </div>

      <div className="section-img-container mt-section ">
        {/* <img src={SecImage} alt="Hero" className="hero-img" /> */}
      </div>
    </div>
  );
}
