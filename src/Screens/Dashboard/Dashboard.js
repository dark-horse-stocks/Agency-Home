import React from "react";
import HeroImg from "../../Assets/hereo.png";
import Rectangle from "../../Assets/Rectangle 127.png";
import Button from "../../Components/Button/Button";
import Image from "../../Assets/Dashboard/Final/1.png";
import Image2 from "../../Assets/Dashboard/Final/2.jpg";
import Image3 from "../../Assets/Dashboard/Final/3.jpg";
import Image4 from "../../Assets/Dashboard/Final/4.jpg";
import Image5 from "../../Assets/Dashboard/Final/5.jpg";
import Image6 from "../../Assets/Dashboard/Final/6.jpg";
import "./style.css";

export default function Dashboard() {
  const mobile = window.innerWidth < 800;
  return (
    <div>
      <div className="mt-header">
        <div className="  container ">
          <p className="fs-30 text-slide-up-animation-2">Dashboard</p>
          <h1 className="fs-95">
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
        <img src={Image} alt="Hero" className="hero-img" />
      </div>
      <div className=" mt-section container">
        <div className="w-70 dashbord-section">
          <p className="fs-30 text-slide-up-animation-3">
            With the dashboard you can track all the ideas that we have
            suggested on real time basis along with amazing stats such as daily
            gainers & losers, overall gainers & losers as well as much more. It
            reflects our performance in real time basis. Currently no other
            advisory we have come across so far provides with this kind of
            detailed analytical platform.
          </p>
          <div className="d-flex justify-content-center dashbord-btn">
            <Button text="Go to Dashboard" />
          </div>
        </div>
      </div>

      <div className="section-img-container mt-section ">
        <img src={Image2} alt="Hero" className="hero-img" />
      </div>

      <div className="container d-flex mt-section fs-30 feature-section flex-column-tablet">
        <h4 className="text-slide-up-animation-3">Features</h4>
        <p className="overview-content text-slide-up-animation-3">
          Live data feed, Historical charts of Indices as well as all the
          darkhorsestocks suggested, 52 Week high lows , Distance from 52 week
          high lows etc
        </p>
      </div>

      <div className={`${!mobile && "mt-section"} d-flex container dashbord-img flex-column-tablet`}>
        <div className="first-img img-slide-up-animation-1">
          <img src={Image3} alt="icon" />
        </div>
        <div className="secend-img img-slide-up-animation-1">
          <img src={Image4} alt="icon" />
        </div>
      </div>

      <div className=" d-flex container dashbord-img flex-column-tablet">
        <div className="first-img img-slide-up-animation-1 mt-2">
          <img src={Image5} alt="icon" />
        </div>
        <div className="secend-img img-slide-up-animation-1">
          <img src={Image6} alt="icon" />
        </div>
      </div>

      <div className="container d-flex mt-section fs-30 feature-section flex-column-tablet">
        <h4 className="text-slide-up-animation-3">Features</h4>
        <p className="overview-content text-slide-up-animation-3">
          <span>
            Developing this type of dashboard and updating it with live data
            feed is extremely costly and requires huge effort. Besides it also
            shows your true performance. By doing so if your performance is not
            that good it opens up to a huge exposure.
          </span>
          <span className="mt-3">
            Other advisories indulge in marketing as their prime motive is to
            earn heafty subscriptions . By providing this kind of dashboard it
            may act as an obstruction to their ulterior motive.
          </span>
        </p>
      </div>

      <div className="section-img-container mt-section ">
        {/* <img src={SecImage} alt="Hero" className="hero-img" /> */}
      </div>

      <div className="container end-wrapper mt-section">
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
