import React from "react";
import Teamimg from "../../Assets/Group 290.png";
import "./style.scss";

import TextAnimation2 from "../../Components/Animation/TextAnimation2";
import TextAnimation3 from "../../Components/Animation/TextAnimation3";

function TeamPage() {
  const team = [
    {
      memberName: "Founder, Anonymous",
      img: Teamimg,
    },
    {
      memberName: "Analyst, Anonymous",
      img: Teamimg,
    },
    {
      memberName: "Analyst, Anonymous",
      img: Teamimg,
    },
    {
      memberName: "Analyst, Anonymous",
      img: Teamimg,
    },
    {
      memberName: "Analyst, Anonymous",
      img: Teamimg,
    },
    {
      memberName: "Analyst, Anonymous",
      img: Teamimg,
    },
    {
      memberName: "Nizar, Developer",
      img: Teamimg,
    },
    {
      memberName: "Mahdi, Developer",
      img: Teamimg,
    },
    {
      memberName: "Shripal, Developer",
      img: Teamimg,
    },
    {
      memberName: "Krunal, Developer",
      img: Teamimg,
    },
    {
      memberName: "Samkit, Developer",
      img: Teamimg,
    },
    {
      memberName: "Nesreena, Developer",
      img: Teamimg,
    },
    {
      memberName: "Palak, Developer",
      img: Teamimg,
    },
    {
      memberName: "Ekaksher, Developer",
      img: Teamimg,
    },
    {
      memberName: "Shiven, Developer",
      img: Teamimg,
    },
    {
      memberName: "Dhruv, Developer",
      img: Teamimg,
    },
    {
      memberName: "Bhavik, Analyst",
      img: Teamimg,
    },
    {
      memberName: "Niyam, Analyst",
      img: Teamimg,
    },
    {
      memberName: "Shreeya, Designer",
      img: Teamimg,
    },
    {
      memberName: "Thao, UI/UX",
      img: Teamimg,
    },
    {
      memberName: "Trusha, Legal",
      img: Teamimg,
    },
    {
      memberName: "Aayush, Trademark",
      img: Teamimg,
    },
    {
      memberName: "Jayraj, Operations",
      img: Teamimg,
    },
    {
      memberName: "Harsh, Sound",
      img: Teamimg,
    },
    {
      memberName: "Anurag, Video",
      img: Teamimg,
    },
    {
      memberName: "Tanvi, Marketing",
      img: Teamimg,
    },
    {
      memberName: "Yash, Assistanc",
      img: Teamimg,
    },
  ];
  return (
    <div className="container">
      <div className=" mt-header common-mt-header">
        <TextAnimation2 Tag="p" className="fs-30">
          Team
        </TextAnimation2>
        <div className=" common-main-header">
          <h1 className="container fs-75 ">
            <TextAnimation2>Best in industry team of analysts</TextAnimation2>
            <TextAnimation2>of analysts</TextAnimation2>
          </h1>
        </div>
      </div>

      <div className="container d-flex flex-wrap team-container-svg">
        {team.map((item) => (
          <div
            className="d-flex teme-page-item-body justify-content-center team-img img-slide-up-animation-1"
            style={{ margin: "80px 0" }}
          >
            <svg
              width="134"
              height="134"
              viewBox="0 0 134 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3398 28.1149V67C20.3398 85.8633 51.8661 121.429 66.9998 121.438C82.1334 121.446 113.66 85.8633 113.66 67V28.1149C113.66 13.132 83.1412 12.5625 66.9998 12.5625C50.8583 12.5625 20.3398 13.132 20.3398 28.1149V28.1149Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M54.0385 50.1495C50.8529 48.2228 47.3372 46.9042 43.6703 46.2607C40.0033 46.9042 36.4877 48.2228 33.302 50.1495C36.4877 52.0762 40.0033 53.3948 43.6703 54.0383C47.3372 53.3948 50.8529 52.0762 54.0385 50.1495V50.1495ZM79.962 50.1495C83.1476 48.2228 86.6632 46.9042 90.3302 46.2607C93.9972 46.9042 97.5128 48.2228 100.698 50.1495C97.5128 52.0762 93.9971 53.3948 90.3302 54.0383C86.6633 53.3948 83.1476 52.0762 79.962 50.1495V50.1495ZM61.8161 98.1076V109.771L67.0002 114.961L72.1844 109.774V98.1103L61.8161 98.1076ZM33.302 69.5935L43.6703 89.0346H61.8161L67.0002 83.8505L72.1844 89.0346H90.3302L100.698 69.5935L87.7395 81.2571H77.3685L69.5937 73.4795H64.404L56.6292 81.2571H46.2582L33.302 69.5935ZM32.0039 41.0766C40.1332 36.9533 46.5457 35.4374 55.3339 45.7443C56.0563 46.3631 56.9761 46.7032 57.9273 46.7032C58.8785 46.7032 59.7984 46.3631 60.5208 45.7443C61.1432 45.0241 61.4856 44.104 61.4856 43.1522C61.4856 42.2004 61.1432 41.2803 60.5208 40.5601C49.9683 29.8122 37.4477 30.8368 32.0039 41.0766V41.0766ZM101.997 41.0766C93.8672 36.9533 87.4548 35.4374 78.6666 45.7443C77.9442 46.3631 77.0244 46.7032 76.0732 46.7032C75.122 46.7032 74.2021 46.3631 73.4797 45.7443C72.8573 45.0241 72.5148 44.104 72.5148 43.1522C72.5148 42.2004 72.8573 41.2803 73.4797 40.5601C84.0322 29.8122 96.5528 30.8368 101.997 41.0766V41.0766Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="txtcntr anonumusttxt">{item.memberName}</p>
          </div>
        ))}
      </div>

      <div style={{ width: "100%" }} className="feature-section-common">
        <TextAnimation3
          Tag="p"
          className="container mt-section w-100 overview-content"
        >
          We recognise the critical importance of confidentiality in the
          financial sector. As such, we are committed to safeguarding the
          privacy of our analysts. Our skilled team includes professionals
          possibly linked to leading investment firms, including JP Morgan, HDFC
          AMC, Goldman Sachs, Morgan Stanley, Mirae AMC, ICICI Securities, ITI
          Mutual Fund, Kotak Securities, among others. Given the delicate nature
          of their positions, our analysts prefer anonymity to preserve the
          integrity of their work and ensure confidentiality. We respectfully
          request our clients to honor this confidentiality and refrain from
          inquiring about the identities of our analysts.
        </TextAnimation3>
      </div>
    </div>
  );
}

export default TeamPage;
