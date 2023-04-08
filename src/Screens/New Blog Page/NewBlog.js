import React from "react";
import SecImage from "../../Assets/image section.png";
import "./style.scss";
import Component1 from "./Blog Components/Component1";
import Component2 from "./Blog Components/Component2";
import Component3 from "./Blog Components/Component3";
import Component4 from "./Blog Components/Component4";
import Component5 from "./Blog Components/Component5";
import Component6 from "./Blog Components/Component6";
import Component7 from "./Blog Components/Component7";
import Component8 from "./Blog Components/Component8";
import Component9 from "./Blog Components/Component9";
import Component10 from "./Blog Components/Component10";
import BlogAccordion from "../../Components/Accordion/BlogAccordion";
// import { Chart2 } from "../../Components/Chart/Chart2";
// import ChatTest from "../../Components/Chart/ChatTest";

export default function NewBlog() {
  const data = [
    {
      text: "Detailed stats",
      card: <Component1 />,
    },
    {
      text: "Before we explore company products in details let us first understand Why are food colours used?",
      card: <Component2 />,
    },
    {
      text: "Business Products & Certifications",
      card: <Component3 />,
    },
    {
      text: "Applications and Uses of the Synthetic Food Colours",
      card: <Component4 />,
    },
    {
      text: "Clients",
      card: <Component5 />,
    },
    {
      text: "Capex",
      card: <Component6 />,
    },
    {
      text: "Why company is well positioned with better future prospects?",
      card: <Component7 />,
    },
    {
      text: "Financial Highlights",
      card: <Component8 />,
    },
    {
      text: "For Q4FY22",
      card: <Component9 />,
    },
    {
      text: "Industry / Global Outlook",
      card: <Component10 />,
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="blog-header  mt-header">
          <div className="card-date">
            <p>
              <div className="text-slide-up-animation-wrapper-2">
                <div className="text-slide-up-animation-content-2">
                  <span className="text-slide-up-animation-text-2">
                    PUBLISHED ON JAN 23, 2022
                  </span>
                </div>
              </div>
            </p>
          </div>
          <h1 className="container fs-95 blog-title ">
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">
                  macrotech
                </span>
              </div>
            </div>
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">
                  Devlopers limited
                </span>
              </div>
            </div>
          </h1>
          <p>
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">
                  Debt free | Cash Rich | Long Term Investing | Darkhorsestock
                </span>
              </div>
            </div>
          </p>
        </div>
      </div>
      <div className="container mt-section fw-semibold fs-30">
        {" "}
        <h3 className="w-70 text-slide-up-animation-3">
          Newgen Software Technologies is a completely debt free 28 years old
          software company. With huge, mission-critical systems implemented at
          the world's largest banks, governments, BPOs & IT Companies, insurance
          firms, and healthcare organisations, it delivers Business Process
          Management, Enterprise Content Management, and Customer Communication
          Management platforms.{" "}
        </h3>
      </div>

      <div className="section-img-container mt-section ">
        <img src={SecImage} alt="Hero" className="hero-img" />
      </div>
      <h3 className="container mt-section fw-semibold fs-30 text-slide-up-animation-3">
        {" "}
        Market Price at the time of Publishing this report : 590 Rs{" "}
      </h3>

      {/* <div className="container"><ChatTest className="mt-section" /></div>  */}
      <div className="mt-section">
        {data.map((item) => (
          <BlogAccordion text={item.text} card={item.card} />
        ))}
      </div>
    </div>
  );
}
