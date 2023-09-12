import React from 'react';
import HeroImg from '../../Assets/hereo.png';
import Rectangle from '../../Assets/Rectangle 127.png';
import Button from '../../Components/Button/Button';
import SecImage from '../../Assets/image section.png';
import './style.scss';
import Image from '../../Assets/Dashboard/Final/1.png';
import Image2 from '../../Assets/Dashboard/Final/2.jpg';
import Image3 from '../../Assets/Dashboard/Final/3.jpg';
import Image4 from '../../Assets/Dashboard/Final/4.jpg';
import Image5 from '../../Assets/Dashboard/Final/5.jpg';
import Image6 from '../../Assets/Dashboard/Final/6.jpg';

export default function Dashboard() {
  const mobile = window.innerWidth < 800;
  return (
    <div>
      <div className="mt-header common-mt-header">
        <div className="  container common-main-header">
          <p className="fs-30 text-slide-up-animation-2">Dashboard</p>
          <h1 className="fs-75">
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">A unique platform to</span>
              </div>
            </div>
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">track all darkhorsestock</span>
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
        <img src={Image} alt="Hero" className="hero-img" />
      </div>
      <div className=" mt-section container common-mt-section mobile-screen">
        <div className="w-70 dashbord-section">
          <p className="fs-30 text-slide-up-animation-3">
            Our platform offers a powerful dashboard that enables you to track all the companies we
            suggest in real-time, accompanied by comprehensive statistics such as daily gainers and
            losers, overall gainers and losers, and more. By providing this level of detail, we aim
            to reflect our performance in real-time, a feature that is not offered by any other
            advisory services we have encountered thus far.
          </p>
        </div>
        <div className="d-flex justify-content-center dashbord-btn">
          <a
            href="https://reports.darkhorsestocks.in/subscriptions"
            className="magnetic-wrap button-animation-1 "
            style={{ display: 'inline-block', cursor: 'pointer' }}>
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
        <h4 className="text-slide-up-animation-3 head-font">Features</h4>
        <p className="overview-content text-slide-up-animation-3">
          Our platform provides a live data feed, along with historical charts of indices and all
          the darkhorsestocks we suggest, 52-week high-lows, distance from 52-week highs and lows,
          links to research reports, returns delivered by the companies, global indices, and more.
          With these features, we aim to provide our clients with a comprehensive understanding of
          the market and the companies we suggest.
        </p>
      </div>

      <div
        className={`${!mobile && 'mt-section'} d-flex container dashbord-img flex-column-tablet`}>
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
          <h4 className="text-slide-up-animation-3">Why others </h4>
          <h4 className="text-slide-up-animation-3">don't provide?</h4>
        </div>
        <p className="overview-content text-slide-up-animation-3">
          <span>
            Developing and maintaining a dashboard of this nature, complete with a live data feed,
            can be extremely costly and requires a significant effort. Furthermore, it also reveals
            your true performance, which can be a risk if it's not particularly strong.
          </span>
          <span className="mt-3">
            In contrast, other advisory services may prioritize marketing and subscriptions above
            providing transparency. Offering such a detailed analytical platform could potentially
            hinder their underlying motive.
          </span>
        </p>
      </div>

      <div className="section-img-container mt-section ">
        {/* <img src={SecImage} alt="Hero" className="hero-img" /> */}
      </div>
    </div>
  );
}
