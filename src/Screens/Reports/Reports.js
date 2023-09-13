import React from 'react';
import Image1 from '../../Assets/Blog/Final/ex-1.png';
import Image2 from '../../Assets/Blog/Final/ex-2.png';
import Image3 from '../../Assets/Blog/Final/ex-3.png';
import Image4 from '../../Assets/Blog/Final/ex-4.png';
import Button from '../../Components/Button/Button';
import SecImage from '../../Assets/Blog/Final/2.jpg';
import SecImage1 from '../../Assets/Blog/Final/4.jpg';
import logo from '../../Assets/logo.mp4';
import './style.scss';

export default function Blog() {
  return (
    <div>
      <div className="mt-header common-mt-header">
        <div className="  container common-main-header">
          <p className="fs-30 text-slide-up-animation-2">Reports</p>
          <h1 className="fs-75">
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">Fundamentally strong</span>
              </div>
            </div>
            <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">companies</span>
              </div>
            </div>
            {/* <div className="text-slide-up-animation-wrapper-2">
              <div className="text-slide-up-animation-content-2">
                <span className="text-slide-up-animation-text-2">ideas</span>
              </div>
            </div> */}
          </h1>
        </div>
      </div>
      <div className="hero-img-container">
        <video width="100%" height="100%" autoPlay muted>
          <source src={logo} type="video/mp4" />
        </video>
      </div>
      <div className=" mt-section container common-mt-section">
        <div className="w-70 dashbord-section">
          <p className="fs-30 text-slide-up-animation-3">
            Darkhorsestock reports feature a weekly presentation of a fundamentally strong company,
            accompanied by a detailed research report about the company. Our reports offer a
            comprehensive analysis of each company, concluding with a concise summary at the end of
            each report. We are committed to providing our readers with valuable insights and
            knowledge to help them make informed investment decisions. So far majority of the
            companies suggested have delivered a stellar performance post suggestion with almost 30%
            of companies up 100% since suggested.
          </p>
          <div className="d-flex justify-content-center dashbord-btn">
            <a
              href="https://reports.darkhorsestocks.in/"
              className="magnetic-wrap button-animation-1 "
              style={{ display: 'inline-block', cursor: 'pointer' }}>
              <div className="magnetic-area"></div>
              <button className="btn-component magnetic-content btn-animate btn">
                <span className="btn-animate__filler"></span>
                <span className="btn-animate__text">Go to reports</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="section-img-container mt-section ">
        <img src={SecImage} alt="Hero" className="hero-img" />
      </div>

      <div className="container reports d-flex mt-section fs-30 feature-section flex-column-tablet feature-section-common">
        <div>
          <h4 className="text-slide-up-animation-3">7+ years</h4>
          <h4 className="text-slide-up-animation-3">of</h4>
          <h4 className="text-slide-up-animation-3">experience</h4>
        </div>
        <div>
          <p className="overview-content text-slide-up-animation-3">
            Darkhorsestock reports provide information about companies that may have been overlooked
            by the majority of analysts or broking houses, but possess great potential. Most of
            these companies may not be well-known to the general public. Our aim is to offer our
            readers access to valuable insights and knowledge to help them make informed decisions.
          </p>
          <br />
          <div className="overview-content">
            <a
              href="https://reports.darkhorsestocks.in/philosophy-Page"
              className="magnetic-wrap button-animation-1 "
              style={{ display: 'inline-block', cursor: 'pointer' }}>
              <div className="magnetic-area"></div>
              <button className="btn-component magnetic-content btn-animate btn">
                <span className="btn-animate__filler"></span>
                <span className="btn-animate__text">Philosophy</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-section d-flex container dashbord-img flex-column-tablet">
        <div className="first-img img-slide-up-animation-1 blog-images-galeray">
          <img src={Image1} alt="icon" />
        </div>
        <div className="secend-img img-slide-up-animation-1 blog-images-galeray">
          <img src={Image2} alt="icon" />
        </div>
      </div>

      <div className=" d-flex container dashbord-img flex-column-tablet">
        <div className="first-img container img-slide-up-animation-1 blog-images-galeray">
          <img src={Image3} alt="icon" />
        </div>
        <div className="secend-img container img-slide-up-animation-1 blog-images-galeray">
          <img src={Image4} alt="icon" />
        </div>
      </div>

      <div className="container d-flex mt-section fs-30 feature-section flex-column-tablet feature-section-common">
        <div>
          <h4 className="text-slide-up-animation-3">How much</h4>
          <h4 className="text-slide-up-animation-3">returns</h4>
          <h4 className="text-slide-up-animation-3">can one expect ?</h4>
        </div>
        <p className="overview-content text-slide-up-animation-3">
          At Darkhorsestock, we do not provide any target prices for our suggested companies.
          However, we are proud to say that most of our past ideas have delivered a minimum of
          30-35% returns over 2 years. We also acknowledge that some of our ideas may fail, and we
          are transparent in stating that we expect around 20-30% of our ideas to not meet
          expectations. For this reason, we do not suggest that our readers overexpose themselves to
          any particular company.
        </p>
      </div>

      <div className="section-img-container mt-section ">
        <img src={SecImage1} alt="Hero" className="hero-img" />
      </div>

      <div className="container end-wrapper mt-section end-section-common">
        <div className="">
          <h2 className="fs-95 header-fs-tablet text-slide-up-animation-3">In the end ✨</h2>
          <p className="fs-30 text-slide-up-animation-3">
            The ❤️ of our investment strategy is centred on producing consistent alpha and, more
            crucially, identifying companies that are not on the radar of most analysts. To do so,
            we supplement our in-depth industry expertise with rigorous primary research,
            cutting-edge technology, and in-house unique tools to uncover insights and provide
            value.
          </p>
          <p className="fs-30 end-secend text-slide-up-animation-3">
            Our team includes some of the most prestigious research analysts, fund managers /
            portfolio managers, and other professionals, making it the most effective team of its
            kind in the Industry. In order to uncover the best stocks for our users, our team
            carries out its own independent and bottom-up analysis, which includes studying business
            annual reports and analysing them in depth. 😊
          </p>
        </div>
      </div>
    </div>
  );
}
