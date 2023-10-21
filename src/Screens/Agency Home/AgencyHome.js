import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

import TextAnimation1 from '../../Components/Animation/TextAnimation1';
import TextAnimation2 from '../../Components/Animation/TextAnimation2';
import TextAnimation3 from '../../Components/Animation/TextAnimation3';
import ImageAnimation from '../../Components/Animation/ImageAnimation';

// Importing a dummy image and a dummy video for hover animation
import hoverVideo from '../../Assets/Blog/Final/LogoAnimationDarkhorsestocks.mp4';

export default function AgencyHome() {
  const history = useHistory();
  return (
    <div className="home-page-container">
      <div className="container ">
        <div className="mt-header home-agency-page">
          <TextAnimation3 className="fs-30 mb-3" Tag="p">
            Always trying to be contrarian
          </TextAnimation3>
          <div className="d-flex flex-column-tablet " data-cursor="-media-blend">
            <a
              href="/"
              className="outlined fs-95 home-border mb-30 ml-4"
              style={{ borderBottom: 'none' }}
              data-cursor-video={hoverVideo}>
              <TextAnimation2 Tag="h4">Reports</TextAnimation2>
            </a>
            <a
              href="https://dashboard.darkhorsestocks.in/"
              className="outlined fs-95 home-border mb-30 ml-4"
              style={{ borderBottom: 'none' }}
              data-cursor-video={hoverVideo}>
              <TextAnimation2 Tag="h4">Dashboard</TextAnimation2>
            </a>
            <a
              href="https://fundalysis.darkhorsestocks.in/"
              className="outlined  fs-95 home-border"
              style={{ borderBottom: 'none' }}
              data-cursor-video={hoverVideo}>
              <TextAnimation2 Tag="h4">Fundalysis</TextAnimation2>
            </a>
          </div>
        </div>
        <div className=" mt-section">
          <TextAnimation3 Tag="p" className="fs-30 home-text">
            Darkhorsestocks, is committed to delivering amazing returns by identifying fundamentally
            strong companies. We conduct extensive research and analysis to carefully select and
            present amazing companies which we feel are worth exploring.
          </TextAnimation3>
        </div>
      </div>
    </div>
  );
}
