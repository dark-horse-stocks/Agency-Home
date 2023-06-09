import React from "react";
import HeroImg from "../../Assets/hereo.png";
import Rectangle from "../../Assets/Rectangle 127.png";
import Button from "../../Components/Button/Button";
import SecImage from "../../Assets/image section.png";
import "./style.scss";
import Image from "../../Assets/Dashboard/Final/1.png";
import Image2 from "../../Assets/Dashboard/Final/2.jpg";
import Image3 from "../../Assets/Dashboard/Final/3.jpg";
import Image4 from "../../Assets/Dashboard/Final/4.jpg";
import Image5 from "../../Assets/Dashboard/Final/5.jpg";
import Image6 from "../../Assets/Dashboard/Final/6.jpg";

export default function pms() {
  const mobile = window.innerWidth < 800;
  return (
    <div>
      <div className="mt-header common-mt-header">
        <div className="  container common-main-header">
          <p className="fs-30 text-slide-up-animation-2">PMS</p>
          <h1 className="fs-75">
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">
                  Portfolio Management
                </span>
              </div>
            </div>
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">
                  Service
                </span>
              </div>
            </div>
            {/* <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">ideas</span>
              </div>
            </div> */}
          </h1>
        </div>
      </div>
      <div className="hero-img-container">
        <img src={Image} alt="Hero" className="hero-img" />
      </div>
      <div className=" mt-section container common-mt-section mobile-screen">
        <div className="w-70 dashbord-section">
          <p className="fs-30 text-slide-up-animation-3">
            At our portfolio management service, we recognize that investment management can be a complex and overwhelming endeavor. That's why we offer a professional service to help you achieve your investment goals. We are developing a range of portfolio models that will assist you in reaching your investment objectives. Our approach to investment management is grounded in discipline, leveraging extensive research and active management to produce reliable returns over time.
          </p>
        </div>
      </div>

      <div className="section-img-container">
        <img src={Image2} alt="Hero" className="hero-img" />
      </div>

      <div className="container d-flex mt-section fs-30 feature-section flex-column-tablet feature-section-common mobile-screen">
        <div>
          <h4 className="text-slide-up-animation-3 head-font">What will</h4>
          <h4 className="text-slide-up-animation-3 head-font">differentiate</h4>
          <h4 className="text-slide-up-animation-3 head-font">darkhorsestocks?</h4>
        </div>
        <p className="overview-content text-slide-up-animation-3">
          At Darkhorsestocks, our aim is to achieve maximum risk-adjusted returns for our clients. Unlike other PMS providers who prioritize their own profits, we focus on minimizing expenses such as annual maintenance fees, brokerage fees, and performance fees while striving for consistent returns. Our dedication to maximizing returns while minimizing costs sets us apart from the competition.
        </p>
      </div>

      <div
        className={`${!mobile && "mt-section"
          } d-flex container dashbord-img flex-column-tablet`}
      >
        <div className="first-img img-slide-up-animation-1">
          <img src={Image3} alt="icon" />
        </div>
        <div className="secend-img img-slide-up-animation-1 img-second">
          <img src={Image4} alt="icon" />
        </div>
      </div>

      <div className=" d-flex container dashbord-img flex-column-tablet">
        <div className="first-img img-slide-up-animation-1 mt-2">
          <img src={Image5} alt="icon" />
        </div>
        <div className="secend-img img-slide-up-animation-1 img-second">
          <img src={Image6} alt="icon" />
        </div>
      </div>

      <div className="container d-flex mt-section fs-30 feature-section flex-column-tablet feature-section-common">
        <div>
          <h4 className="text-slide-up-animation-3">Our</h4>
          <h4 className="text-slide-up-animation-3">Strategy</h4>
        </div>
        <p className="overview-content text-slide-up-animation-3">
          <span>
            At Darkhorsestocks, our goal is to maximize risk-adjusted returns for our clients. However, one of the biggest challenges we face is that many of the companies we suggest are highly illiquid. This makes it difficult to track their performance over short-term periods, often taking a prolonged period to perform. Nevertheless, we are constantly working on creating portfolio models and analyzing various strategies to overcome this challenge.
          </span>
          <span className="mt-3">
            While we continue to experiment with various portfolio models, we are also working on resolving the liquidity issue. Once we are confident in our PMS model, we will open it for PMS. Until then, we will keep our clients informed and continue to provide valuable insights to help them make informed investment decisions.
          </span>
        </p>
      </div>

      <div className="section-img-container mt-section ">
        {/* <img src={SecImage} alt="Hero" className="hero-img" /> */}
      </div>
    </div>
  );
}
