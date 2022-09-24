import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import CardImage from "../../Assets/Card.png"
import Plus from "../../Assets/Vector.png";



export default class SimpleSlider extends Component {

    
  render() {
    var settings = {
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
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="container">

        <Slider {...settings}>

          <>
          <Card
          img={CardImage}
          title="Whirlpool Of India"
          price="₹1576"
          rate="+INR₹0.01 (+0.05%)"
          content="Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... "
          date="PUBLISHED ON JAN 23"
        />
            </>

          <>
          <Card
          img={CardImage}
          title="Whirlpool Of India"
          price="₹1576"
          rate="+INR₹0.01 (+0.05%)"
          content="Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... "
          date="PUBLISHED ON JAN 23"
        />
            </>
          <>
          <Card
          img={CardImage}
          title="Whirlpool Of India"
          price="₹1576"
          rate="+INR₹0.01 (+0.05%)"
          content="Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... "
          date="PUBLISHED ON JAN 23"
        />
          </>
          <>
          <Card
          img={CardImage}
          title="Whirlpool Of India"
          price="₹1576"
          rate="+INR₹0.01 (+0.05%)"
          content="Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... "
          date="PUBLISHED ON JAN 23"
        />
          </>
          <>
          <Card
          img={CardImage}
          title="Whirlpool Of India"
          price="₹1576"
          rate="+INR₹0.01 (+0.05%)"
          content="Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... "
          date="PUBLISHED ON JAN 23"
        />
          </>
          <>
          <Card
          img={CardImage}
          title="Whirlpool Of India"
          price="₹1576"
          rate="+INR₹0.01 (+0.05%)"
          content="Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... "
          date="PUBLISHED ON JAN 23"
        />
          </>
          <>
          <Card
          img={CardImage}
          title="Whirlpool Of India"
          price="₹1576"
          rate="+INR₹0.01 (+0.05%)"
          content="Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... "
          date="PUBLISHED ON JAN 23"
        />
          </>
          <div>
          <div className="view-more">
          <div>
            <img src={Plus} alt=""/>
          </div>
          <p className="fw-bold">View More</p>
        </div>
          </div>
        </Slider>
      </div>
    );
  }
}