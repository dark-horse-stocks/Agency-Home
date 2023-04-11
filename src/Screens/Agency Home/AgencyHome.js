import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

// Importing a dummy image and a dummy video for hover animation
import hoverVideo from "../../Assets/hoverVideo.mp4";

export default function AgencyHome() {
  const history = useHistory();
  return (
    <div className="container ">
      <div className="mt-header home-agency-page">
        <p className="fs-30 mb-3 text-slide-up-animation-3">
          Always trying to be contrarian
        </p>

        <div className="d-flex flex-column-tablet " data-cursor="-media-blend">
          <a
            href="/"
            className="text-slide-up-animation-1 outlined fs-95 home-border mb-30 ml-4"
            style={{ borderBottom: "none" }}
            data-cursor-video={hoverVideo}
          >
            <h1 className="fs-95">Blog</h1>
          </a>
          <a
            href="https://dashboard.darkhorsestocks.in/"
            className="text-slide-up-animation-1 outlined fs-95 home-border mb-30 ml-4"
            style={{ borderBottom: "none" }}
            data-cursor-video={hoverVideo}
          >
            <h1 className="fs-95">Dashboard</h1>
          </a>
          <a
            href="https://fundalysis.darkhorsestocks.in/"
            className="text-slide-up-animation-1 outlined  fs-95 home-border"
            style={{ borderBottom: "none" }}
            data-cursor-video={hoverVideo}
          >
            <h1 className="mb-30 fs-95">Fundalysis</h1>
          </a>
        </div>
      </div>
      <div className=" mt-section">
        <p className=" fs-30 home-text text-slide-up-animation-3">
          Darkhorsestocks was started with a simple aim that is to help small
          investors in the stock market. Today we are working in this direction
          to take it to new heights.
        </p>
      </div>
    </div>
  );
}
