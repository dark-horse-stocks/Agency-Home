import React from "react";
import Teamimg from "../../Assets/Group 290.png";
import "./style.css";

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
  ];
  return (
    <div>
      <div className=" mt-header">
        {" "}
        <p className="container fs-30 text-slide-up-animation-2">Team </p>{" "}
        <h1 className="container fs-95 w-80">
          <div className="text-slide-up-animation-wrapper-2">
            <div className="text-slide-up-animation-content-2">
              <span className="text-slide-up-animation-text-2">
                Best in industry team
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

      <div className="container d-flex flex-wrap">
        {team.map((item) => (
          <div
            className="d-flex justify-content-center team-img img-slide-up-animation-1"
            style={{ margin: "80px 0" }}
          >
            <img src={item.img} alt="item" />
          </div>
        ))}
      </div>

      <div className="container mt-section fs-30 text-slide-up-animation-3">
        Most of the analysts associated with darkhorsestocks have requested to
        keep their identity discrete due to thier association with some of the
        major investment banking funds 🏦 such as JP Morgan, HDFC AMC, Goldman
        Sacs, Morgan Stanley , Mirae AMC, ICICI Securities, ITI Mutual Fund,
        Kotak Securities etc
        <p className="">Therefore please do not ask for the same.</p>
      </div>
    </div>
  );
}

export default TeamPage;
