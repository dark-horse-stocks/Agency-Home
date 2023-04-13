import React from "react";
import HeroImg from "../../Assets/hereo.png";
import Rectangle from "../../Assets/Rectangle 127.png";
import Button from "../../Components/Button/Button";
import SecImage from "../../Assets/image section.png";
import "./style.scss";

export default function Dashboard() {
  return (
    <div>
      <div className="mt-header common-mt-header">
        <div className="  container common-main-header">
          <p className="fs-30 text-slide-up-animation-2">Dashboard</p>
          <h1 className="fs-75">
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">
                  A unique platform to
                </span>
              </div>
            </div>
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">
                  track all darkhorsestock
                </span>
              </div>
            </div>
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">ideas</span>
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
            Developing websites is about so much more than marketing. It’s also
            about aesthetics. For us, your site is the face of your company.
            Let’s make it stunning
          </p>
          <div className="d-flex justify-content-center dashbord-btn">
            <Button text="Go to Dashboard" className="btn" />
          </div>
        </div>
      </div>

      <div className="section-img-container mt-section ">
        <img src={SecImage} alt="Hero" className="hero-img" />
      </div>

      <div className="container d-flex mt-section fs-30 feature-section flex-column-tablet feature-section-common">
        <h4 className="text-slide-up-animation-3">Features</h4>
        <p className="overview-content text-slide-up-animation-3">
          Developing websites is about so much more than marketing. It’s also
          about aesthetics. For us, your site is the face of your company. Let’s
          make it stunning
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
        <div className="first-img img-slide-up-animation-1">
          <img src={Rectangle} alt="icon" />
        </div>
        <div className="secend-img img-slide-up-animation-1">
          <img src={Rectangle} alt="icon" />
        </div>
      </div>

      <div className="container d-flex mt-section fs-30 feature-section flex-column-tablet feature-section-common">
        <h4 className="text-slide-up-animation-3">Features</h4>
        <p className="overview-content text-slide-up-animation-3">
          Developing websites is about so much more than marketing. It’s also
          about aesthetics. For us, your site is the face of your company. Let’s
          make it stunning
        </p>
      </div>

      <div className="section-img-container mt-section ">
        <img src={SecImage} alt="Hero" className="hero-img" />
      </div>

      <div className="container end-wrapper mt-section end-section-common">
        <div className="w-70">
          <h2 className="fs-95 header-fs-tablet text-slide-up-animation-3">
            In the end ✨
          </h2>
          <p className="fs-30 text-slide-up-animation-3">
            The ❤️ of our investment strategy is centred on producing consistent
            alpha and, more crucially, identifying companies that are not on the
            radar of most analysts. To do so, we supplement our in-depth
            industry expertise with rigorous primary research, cutting-edge
            technology, and in-house unique tools to uncover insights and
            provide value.
          </p>
          <p className="fs-30 end-secend text-slide-up-animation-3">
            Our team includes some of the most prestigious research analysts,
            fund managers / portfolio managers, and other professionals, making
            it the most effective team of its kind in the Industry. In order to
            uncover the best stocks for our users, our team carries out its own
            independent and bottom-up analysis, which includes studying business
            annual reports and analysing them in depth. 😊
          </p>
        </div>
      </div>
    </div>
  );
}
