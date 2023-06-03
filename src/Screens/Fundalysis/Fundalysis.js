import React from "react";
import HeroImg from "../../Assets/hereo.png";
import Rectangle from "../../Assets/Rectangle 127.png";
import Button from "../../Components/Button/Button";
import SecImage from "../../Assets/image section.png";
import "./style.scss";

export default function Fundalysis() {
  return (
    <div>
      <div className="mt-header common-mt-header">
        <div className="  container common-main-header">
          <p className="fs-30 text-slide-up-animation-2">Fundalysis</p>
          <h1 className="fs-75">
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">
                Mutual fund analytics
                </span>
              </div>
            </div>
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">
                platform
                </span>
              </div>
            </div>
           
          </h1>
        </div>
      </div>
      <div className="hero-img-container">
        <img src={HeroImg} alt="Hero" className="hero-img" />
      </div>
      <div className=" mt-section container common-mt-section">
        <div className="w-70 dashbord-section">
          <p className="fs-30 text-slide-up-animation-3">
          Fundalysis is a comprehensive mutual fund database that sources data from various public sources about mutual fund schemes, holdings, and sectorial holdings. Our platform generates a wide range of reports based on this data, which are used for research and analysis purposes.
          </p>
          <div className="d-flex justify-content-center dashbord-btn">
            <Button text="Go to Fundalysis" />
          </div>
        </div>
      </div>

      <div className="section-img-container mt-section ">
        <img src={SecImage} alt="Hero" className="hero-img" />
      </div>

      <div className="container d-flex mt-section fs-30 feature-section flex-column-tablet feature-section-common">
        <h4 className="text-slide-up-animation-3">Features</h4>
        <p className="overview-content text-slide-up-animation-3">
        It allows analysis of data based on mutual fund schemes, AMC as a whole, sector, individual companies, and fund managers. The platform generates various types of reports, including monthly scheme reports, sectorial analysis, company analysis, fund manager analysis, and economic analysis. The data can also be mapped with live market trends to identify meaningful patterns.
        </p>
      </div>

      <div className="mt-section d-flex container dashbord-img flex-column-tablet">
        <div className="first-img img-slide-up-animation-1">
          <img src={Rectangle} alt="icon" />
        </div>
        <div className="secend-img img-slide-up-animation-1">
          <img src={Rectangle} alt="icon" />
        </div>
      </div>

      <div className=" d-flex container dashbord-img flex-column-tablet">
        <div className="first-img container img-slide-up-animation-1">
          <img src={Rectangle} alt="icon" />
        </div>
        <div className="secend-img container img-slide-up-animation-1">
          <img src={Rectangle} alt="icon" />
        </div>
      </div>

      <div className="container d-flex mt-section fs-30 feature-section flex-column-tablet feature-section-common">
        <h4 className="text-slide-up-animation-3">What's new?</h4>
        <p className="overview-content text-slide-up-animation-3">
        Fundalysis currently covers over 200 schemes across 21 fund houses on a monthly basis. Various reports, including individual scheme reports, are generated monthly and provided to subscribers for their own analysis. This type of analytics is not currently offered by any other platform.
        </p>
      </div>

      <div className="section-img-container mt-section ">
        <img src={SecImage} alt="Hero" className="hero-img" />
      </div>
    </div>
  );
}
