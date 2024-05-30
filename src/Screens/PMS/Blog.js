import React from "react";
import SecImage from "../../Assets/PMS/PMS/1.png";
import SecImage7 from "../../Assets/PMS/PMS/7.jpg";
import Image1 from "../../Assets/PMS/PMS/3.jpg";
import Image2 from "../../Assets/PMS/PMS/4.jpg";
import Image3 from "../../Assets/PMS/PMS/5.jpg";
import Image4 from "../../Assets/PMS/PMS/6.jpg";
import Video from "../../Assets/PMS/PMS/2.mp4";
import "./style.scss";

import TextAnimation2 from "../../Components/Animation/TextAnimation2";
import TextAnimation3 from "../../Components/Animation/TextAnimation3";
import ImageAnimation from "../../Components/Animation/ImageAnimation";
import { Grid } from "@mui/material";

export default function PMS() {
  return (
    <div>
      <div className="mt-header common-mt-header">
        <div className="container common-main-header">
          <TextAnimation2 Tag="p" className="fs-30">
            PMS
          </TextAnimation2>
          <h1 className="fs-75">
            <TextAnimation2>Portfolio Management</TextAnimation2>
            <TextAnimation2>Service</TextAnimation2>
          </h1>
        </div>
      </div>
      <div className="hero-img-container">
        <img src={SecImage} alt="Hero" className="hero-img" />
      </div>
      <div className=" mt-section container common-mt-section">
        <div className="w-70 dashbord-section">
          <TextAnimation3 Tag="p" className="fs-30">
            At our portfolio management service, we recognize that investment
            management can be a complex and overwhelming endeavour. That's why
            we offer a professional service to help you achieve your investment
            goals. We are developing a range of portfolio models that will
            assist you in reaching your investment objectives. Our approach to
            investment management is grounded in discipline, leveraging
            extensive research and active management to produce reliable returns
            over time.
          </TextAnimation3>
        </div>
      </div>

      <div className="hero-img-container">
        <video width="100%" height="100%" autoPlay muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className="container mt-section fs-30 feature-section feature-section-common">
        <Grid
          container
          columnSpacing={8}
          display={"flex"}
          justifyContent={"center"}
        >
          <Grid item display={"flex"} justifyContent={"start"} xs={12} lg={3}>
            <TextAnimation3 className="title-padding" Tag="h4">
              What will differentiate darkhorsestocks?
            </TextAnimation3>
          </Grid>
          <Grid item display={"flex"} justifyContent={"start"} xs={12} lg={9}>
            <TextAnimation3 Tag="p" className="w-100 overview-content">
              At Darkhorsestocks, our aim is to achieve maximum risk-adjusted
              returns for our clients. Unlike other PMS providers who prioritize
              their own profits, we focus on minimizing expenses such as annual
              maintenance fees, brokerage fees, and performance fees while
              striving for consistent returns. Our dedication to maximizing
              returns while minimizing costs sets us apart from the competition.
            </TextAnimation3>
          </Grid>
        </Grid>
      </div>

      <div className="mt-section d-flex container dashbord-image flex-column-tablet">
        <ImageAnimation className="dashbord-image__item dashbord-image__first-img">
          <img src={Image1} alt="Image1" />
        </ImageAnimation>
        <ImageAnimation className="dashbord-image__item dashbord-image__secend-img">
          <img src={Image2} alt="Image2" />
        </ImageAnimation>
        <ImageAnimation className="dashbord-image__item dashbord-image__first-img">
          <img src={Image3} alt="Image3" />
        </ImageAnimation>
        <ImageAnimation className="dashbord-image__item dashbord-image__second-img">
          <img src={Image4} alt="Image4" />
        </ImageAnimation>
      </div>

      <div className="container mt-section fs-30 feature-section feature-section-common">
        <Grid
          container
          columnSpacing={8}
          display={"flex"}
          justifyContent={"center"}
        >
          <Grid item display={"flex"} justifyContent={"start"} xs={12} lg={3}>
            <TextAnimation3 className="title-padding" Tag="h4">
              Our Strategy
            </TextAnimation3>
          </Grid>
          <Grid item display={"flex"} justifyContent={"start"} xs={12} lg={9}>
            <Grid
              container
              rowSpacing={4}
              display={"flex"}
              justifyContent={"start"}
            >
              <Grid item display={"flex"} justifyContent={"start"} xs={12}>
                <TextAnimation3 Tag="p" className="w-100 overview-content">
                  At Darkhorsestocks, our goal is to maximize risk-adjusted
                  returns for our clients. However, one of the biggest
                  challenges we face is that many of the companies we suggest
                  are highly illiquid. This makes it difficult to track their
                  performance over short-term periods, often taking a prolonged
                  period to perform. Nevertheless, we are constantly working on
                  creating portfolio models and analyzing various strategies to
                  overcome this challenge.
                </TextAnimation3>
              </Grid>
              <Grid item display={"flex"} justifyContent={"start"} xs={12}>
                <TextAnimation3 Tag="p" className="w-100 overview-content">
                  While we continue to experiment with various portfolio models,
                  we are also working on resolving the liquidity issue. Once we
                  are confident in our PMS model, we will open it for PMS. Until
                  then, we will keep our clients informed and continue to
                  provide valuable insights to help them make informed
                  investment decisions.
                </TextAnimation3>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className="section-img-container mt-section ">
        <img src={SecImage7} alt="Hero" className="hero-img" />
      </div>

      <div className="container end-wrapper mt-section end-section-common">
        <div className="d-flex justify-content-center dashbord-btn">
          <a
            href="https://linktr.ee/darkhorsestocks"
            className="magnetic-wrap button-animation-1 "
            style={{ display: "inline-block", cursor: "pointer" }}
          >
            <div className="magnetic-area"></div>
            <button className="btn-component magnetic-content btn-animate btn">
              <span className="btn-animate__filler"></span>
              <span className="btn-animate__text">Join Queue</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
