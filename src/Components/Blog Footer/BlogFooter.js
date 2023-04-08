import React from "react";
import "./style.scss";

export default function BlogFooter() {
  return (
    <div className="blog-container">
      <div className="fs-75">
        <h2>Have an idea?</h2>
        <p className="blog-footer-text line-animation-2">Tell us about it</p>
      </div>
      <div className="d-flex justify-content-between footer-wrapper">
        <div className="blog-contact ">
          <h4
            className="fs-20 line-animation-1"
            style={{ marginBottom: "1.5rem" }}
          >
            support@darkhorsestocksinception.in
          </h4>
          <p className=" gray-color" style={{ marginBottom: ".5rem" }}>
            837 Garden street, Milpitas California 95035, USA
          </p>
          <p className=" gray-color">
            {" "}
            Parimit Apartment, Besides parth hospital, Anjali cross road, Bhatta
            380007, Ahmedabad, India.
          </p>
          <p className="fw-bold" style={{ marginTop: "1.5rem" }}>
            Privacy Policy
          </p>
        </div>

        <div className="footer-social">
          <ul className="blog-footer-list d-flex justify-content-between">
            <li className="nav-link-wrapper" data-cursor="-menu -icon-blend">
              <a href="#" className="nav-link magnetic-content">
                <em className="nav-link-hover-wrapper">
                  <span data-text="Linkedin" className="nav-link-hover">
                    Linkedin
                  </span>
                </em>
              </a>
            </li>
            <li className="nav-link-wrapper" data-cursor="-menu -icon-blend">
              <a
                href="https://twitter.com/DARKHORSESTOCKS"
                className="nav-link magnetic-content"
              >
                <em className="nav-link-hover-wrapper">
                  <span data-text="Twitter" className="nav-link-hover">
                    Twitter
                  </span>
                </em>
              </a>
            </li>
            <li className="nav-link-wrapper" data-cursor="-menu -icon-blend">
              <a href="#" className="nav-link magnetic-content">
                <em className="nav-link-hover-wrapper">
                  <span data-text="Behance" className="nav-link-hover">
                    Behance
                  </span>
                </em>
              </a>
            </li>
          </ul>

          <ul className="blog-footer-list d-flex justify-content-between">
            <li className="nav-link-wrapper" data-cursor="-menu -icon-blend">
              <a href="#" className="nav-link magnetic-content">
                <em className="nav-link-hover-wrapper">
                  <span data-text="Dribble" className="nav-link-hover">
                    Dribble
                  </span>
                </em>
              </a>
            </li>
            <li className="nav-link-wrapper" data-cursor="-menu -icon-blend">
              <a
                href="https://www.instagram.com/darkhorse_stocks/"
                className="nav-link magnetic-content"
              >
                <em className="nav-link-hover-wrapper">
                  <span data-text="Instagram" className="nav-link-hover">
                    Instagram
                  </span>
                </em>
              </a>
            </li>
            <li className="nav-link-wrapper" data-cursor="-menu -icon-blend">
              <a
                href="https://www.youtube.com/channel/UCKNoxoowoWYZEfKk8zIe8vQ/featured"
                className="nav-link magnetic-content"
              >
                <em className="nav-link-hover-wrapper">
                  <span data-text="Youtube" className="nav-link-hover">
                    Youtube
                  </span>
                </em>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
