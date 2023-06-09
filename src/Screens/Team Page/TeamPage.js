import React from "react";
import Teamimg from "../../Assets/Group 290.png";
import "./style.scss";

function TeamPage() {
  const team = [
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
  ];
  return (
    <div className="container">
      <div className=" mt-header common-mt-header">
        {" "}
        <p className=" fs-30 text-slide-up-animation-2">Team </p>{" "}
        <div className=" common-main-header">
          <h1 className="container fs-75 ">
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">
                  Best in industry team of analysts
                </span>
              </div>
            </div>
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">
                  of analysts
                </span>
              </div>
            </div>
          </h1>
        </div>
      </div>

      <div className="container d-flex flex-wrap team-container-svg">
        {team.map((item) => (
          <div
            className="d-flex justify-content-center team-img img-slide-up-animation-1"
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
            <p className="txtcntr anonumusttxt">Anonymous</p>
          </div>
        ))}
      </div>

      <div className="container mt-section fs-30 text-slide-up-animation-3 common-txt-300">
        We understand that confidentiality is paramount in the world of finance, which is why we prioritize the privacy of our analysts. Our team is comprised of experts who may have associations with major investment firms such as JP Morgan, HDFC AMC, Goldman Sachs, Morgan Stanley, Mirae AMC, ICICI Securities, ITI Mutual Fund, Kotak Securities, and many more. However, due to the sensitive nature of their roles, our analysts have requested to remain anonymous to maintain confidentiality.We kindly ask our clients to respect their privacy by refraining from asking for their identities.
        {/* <p className="mt-15">Therefore please do not ask for the same.</p> */}
      </div>
    </div>
  );
}

export default TeamPage;
