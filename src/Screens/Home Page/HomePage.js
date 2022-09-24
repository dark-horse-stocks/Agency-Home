import React, { createRef } from "react";

import SecImage from "../../Assets/image section.png";
import CardPic from "../../Assets/hereo.png";
import Plus from "../../Assets/Vector.png";
import Card from "../../Components/Card/Card";
import HomeCard from "../../Components/Home Card/HomeCard";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

import "./style.css";
import Slider from "react-slick";

export default function HomePage() {
  const data = [
    {
      img: SecImage,
      title: "Whirlpool Of India",
      price: "₹1576",
      rate: "+INR₹0.01 (+0.05%)",
      content:
        "Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... ",
      date: "PUBLISHED ON JAN 23",
    },
    {
      img: SecImage,
      title: "Whirlpool Of India",
      price: "₹1576",
      rate: "+INR₹0.01 (+0.05%)",
      content:
        " Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... ",
      date: "PUBLISHED ON JAN 23",
    },
    {
      img: SecImage,
      title: "Whirlpool Of India",
      price: "₹1576",
      rate: "+INR₹0.01 (+0.05%)",
      content:
        " Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... ",
      date: "PUBLISHED ON JAN 23",
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const customeSlider = createRef();
  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const customeSlider2 = createRef();
  const gotoPrev2 = () => {
    customeSlider2.current.slickPrev();
  };
  const gotoNext2 = () => {
    customeSlider2.current.slickNext();
  };

  const customeSlider3 = createRef();
  const gotoPrev3 = () => {
    customeSlider3.current.slickPrev();
  };
  const gotoNext3 = () => {
    customeSlider3.current.slickNext();
  };

  const customeSlider4 = createRef();
  const gotoPrev4 = () => {
    customeSlider4.current.slickPrev();
  };
  const gotoNext4 = () => {
    customeSlider4.current.slickNext();
  };

  return (
    <div>
      <div className="home-container">
        <h1 className="container fs-95 mt-header text-slide-up-animation-1">
          latest darkhorsestock idea
        </h1>
      </div>

      <div className="section-img-container">
        <img src={SecImage} alt="Hero" className="hero-img" />
      </div>

      <div className="container">
        <div className="card-content mt-section">
          <div className="card-title d-flex align-items-center justify-content-between fs-75">
            <h3 className="my-0 fs-75 ">NEWGEN SOFTWARE </h3>
            <p className="my-0 fs-75">₹2056</p>
          </div>
          <div className="card-rate d-flex align-items-center fs-30 ">
            <p className=""> +INR₹0.01 (+0.05%) </p>
            <span>Today</span>
          </div>
          <div className="card-text w-90">
            <p className="fs-30 home-card-text text-slide-up-animation-3">
              Newgen Software Technologies is a completely debt free 28 years
              old software company. With huge, mission-critical systems
              implemented at the world's largest banks, governments, BPOs & IT
              Companies.
            </p>
          </div>
          <div className="card-date fs-30 ">
            <p className="fw-bold">PUBLISHED ON JAN 23, 2022</p>
          </div>
        </div>
      </div>

      <div className="mt-section">
        <h2 className="fs-95 container header-mb">Top Gainers</h2>
        <Slider {...settings} ref={customeSlider}>
          {data.map((item) => (
            <Card
              img={item.img}
              title={item.title}
              price={item.price}
              rate={item.rate}
              content={item.content}
              date={item.date}
            />
          ))}
          <div>
            <div className="view-more">
              <div>
                <img src={Plus} alt="" />
              </div>
              <p className="fw-bold">View More</p>
            </div>
          </div>
        </Slider>
        <div className="d-flex slider-arrow ">
          <div className="slider-arrow-left" onClick={() => gotoPrev()}>
            <BsArrowLeft fontSize={25} />
          </div>
          <div className="slider-arrow-right" onClick={() => gotoNext()}>
            <BsArrowRight fontSize={25} />
          </div>
        </div>
      </div>

      <div className="mt-section">
        <h2 className="fs-95 container header-mb">Top Losers</h2>
        <Slider {...settings} ref={customeSlider2}>
          <HomeCard title="login to view company" btn="Login" img={CardPic} />
          <Card
            img={CardPic}
            title="Whirlpool Of India"
            price="₹1576"
            rate="+INR₹0.01 (+0.05%)"
            content="Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... "
            date="PUBLISHED ON JAN 23"
          />
          <Card
            img={CardPic}
            title="Whirlpool Of India"
            price="₹1576"
            rate="+INR₹0.01 (+0.05%)"
            content="Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... "
            date="PUBLISHED ON JAN 23"
          />
          <div>
            <div className="view-more">
              <div>
                <img src={Plus} alt="" />
              </div>
              <p className="fw-bold">View More</p>
            </div>
          </div>
        </Slider>
        <div className="d-flex slider-arrow ">
          <div className="slider-arrow-left" onClick={() => gotoPrev2()}>
            <BsArrowLeft fontSize={25} />
          </div>
          <div className="slider-arrow-right" onClick={() => gotoNext2()}>
            <BsArrowRight fontSize={25} />
          </div>
        </div>
      </div>

      <div className="sector-contariner">
        <h6 className="fs-95 container header-mb">Sectors</h6>
        <div className="section-img-container d-flex justify-content-between sector-wrapper">
          <Slider {...settings} ref={customeSlider3}>
            <Card img={CardPic} title="Whirlpool Of India" />
            <Card img={CardPic} title="Whirlpool Of India" />
            <Card img={CardPic} title="Whirlpool Of India" />{" "}
            <Card img={CardPic} title="Whirlpool Of India" />
            <div></div>
          </Slider>
        </div>
        <div className="d-flex slider-arrow ">
          <div className="slider-arrow-left" onClick={() => gotoPrev3()}>
            <BsArrowLeft fontSize={25} />
          </div>
          <div className="slider-arrow-right" onClick={() => gotoNext3()}>
            <BsArrowRight fontSize={25} />
          </div>
        </div>
      </div>
      <div className="mt-section">
        <h2 className="fs-95 container header-mb">Top Losers</h2>
        <Slider {...settings} ref={customeSlider4}>
          <HomeCard
            title="WANT TO READ THIS?"
            text="Become a member and get unlimited access."
            btn="SUBSCRIBE"
            img={CardPic}
          />
          <Card
            img={CardPic}
            title="Whirlpool Of India"
            price="₹1576"
            rate="+INR₹0.01 (+0.05%)"
            content="Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... "
            date="PUBLISHED ON JAN 23"
          />
          <Card
            img={CardPic}
            title="Whirlpool Of India"
            price="₹1576"
            rate="+INR₹0.01 (+0.05%)"
            content="Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... "
            date="PUBLISHED ON JAN 23"
          />
          <div>
            <div className="view-more">
              <div>
                <img src={Plus} alt="" />
              </div>
              <p className="fw-bold">View More</p>
            </div>
          </div>
        </Slider>
        <div className="d-flex slider-arrow ">
          <div className="slider-arrow-left" onClick={() => gotoPrev4()}>
            <BsArrowLeft fontSize={25} />
          </div>
          <div className="slider-arrow-right" onClick={() => gotoNext4()}>
            <BsArrowRight fontSize={25} />
          </div>
        </div>
      </div>
    </div>
  );
}
