import React from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { Link, useHistory } from 'react-router-dom';
import HamburgerMenu from "./HamburgerMenu";
import "./style.scss";

export default function NavBar() {
  const history = useHistory();
  return (
    <div className="d-flex justify-content-between container-nav align-items-center">
      <div className="logo" onClick={() => history.push("/")}>
        DARKHORSESTOCKS
      </div>
      <div className="icons d-flex justify-content-between align-items-center">
        <div className="icon search-icon content__item Social-item nav-link-wrapper" data-cursor="-menu -icon-blend">
          <Link to="/search" className="nav-link">
            <em className="nav-link-hover-wrapper">
              <span data-text="search" className="nav-link-hover" data-movement="0.2">
                Search
              </span>
              <div className="magnetic-wrap mobile-icon-menu">
            <div className="magnetic-area"></div>
              <span  className="nav-link-hover magnetic-content" data-movement="0.2">
  <span className='spanSvg'>
  

  </span>

              </span>
              </div>
            </em>
     
          </Link>
        </div>
        <div className="icon user-icon content__item Social-item nav-link-wrapper" data-cursor="-menu -icon-blend">
          <Link to="/login" className="nav-link">
            <em className="nav-link-hover-wrapper">
              <span data-text="login" className="nav-link-hover" data-movement="0.2">
                login
              </span>
              <div className="magnetic-wrap mobile-icon-menu">
<div className="magnetic-area"></div>
  <span  className="nav-link-hover magnetic-content" data-movement="0.2">
<span className='spanSvg'>


</span>

  </span>
  </div>
            </em>
   
          </Link>
        </div>
        <div>
          <div className="icon user-icon content__item Social-item nav-link-wrapper" id="hamburgerMenuLabel" data-cursor="-menu -icon-blend">
            <div className="nav-link">
              <em className="nav-link-hover-wrapper">
                <span data-text="menu" className="nav-link-hover" data-movement="0.2">
                  menu
                </span>
              </em>
            </div>
          </div>
          <div></div>
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
