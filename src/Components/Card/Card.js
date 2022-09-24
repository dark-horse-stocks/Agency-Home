import "./style.css";
import React from "react";
import AnimatingNumber from "../AnimatingNumber/animation-number";
import { useState } from "react";
import { useInterval } from "../../utils/useInterval";

export default function Card(props) {
  const [counter, setCounter] = useState(500);
  const [counter2, setCounter2] = useState(50);
  const [counter3, setCounter3] = useState(0);

  useInterval(() => {
    let delta = Math.random() * 9999;

    if (Math.floor(delta) % 2 === 0) {
      delta = delta * -1;
    }

    setCounter(Math.max(counter + delta, 0));
  }, 1500);
  useInterval(() => {
    let delta = Math.random() * 2;

    if (Math.floor(delta) % 2 === 0) {
      delta = delta * -1;
    }

    setCounter2(Math.max(counter2 + delta, 0));
  }, 1500);
  useInterval(() => {
    let delta = Math.random();

    if (Math.floor(delta) % 2 === 0) {
      delta = delta * -1;
    }

    setCounter3(Math.max(counter3 + delta, 0));
  }, 1500);

  return (
    <div className="card-container" data-cursor-text="Read report">
      <div className="img-container">
        <img src={props.img} alt="card" />
      </div>
      <div className="card-content ">
        <div className="card-title d-flex align-items-center my-0 justify-content-between">
          <h3 className="my-0">{props.title}</h3>
          {/* <p className="my-0">{props.price}</p> */}
          <AnimatingNumber value={counter} />
        </div>
        <div className="card-rate d-flex align-items-center">
          {/* <p className=""> {props.rate} </p> */}
          <p
            style={{
              width: "70%",
              display: "flex",
              gap: ".5rem",
              alignItems: "center",
            }}
          >
            <div>INR ₹</div>
            <div>
              <AnimatingNumber value={counter2} classes="price-small" />
            </div>
            <div style={{ display: "flex" }}>
              {counter3 < 0 ? "-" : "+"}(
              <AnimatingNumber value={counter3} classes="price-small" />
              %)
            </div>
          </p>
          <span>Today</span>
        </div>
        <div className="card-text my-0">
          <p className="my-0">{props.content}</p>
        </div>
        <div className="card-date">
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
}
