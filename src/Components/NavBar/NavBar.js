import React from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import "./style.css";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function NavBar() {
  const history = useHistory();
  const mobile = window.innerWidth < 800;

  console.log(mobile, "mobile");
  return (
    <div className="d-flex justify-content-between container-nav align-items-center">
      <div className="logo" onClick={() => history.push("/")}>
        DARKHORSESTOCKS
      </div>
      <div className="icons d-flex justify-content-between align-items-center">
        {mobile ? (
          <>
            <FaSearch />

            <FaRegUser />
          </>
        ) : (
          <>
            <div
              className="icon search-icon content__item Social-item nav-link-wrapper"
              data-cursor="-menu -icon-blend"
            >
              <a href="/search" className="nav-link">
                <em className="nav-link-hover-wrapper">
                  <span
                    data-text="search"
                    className="nav-link-hover"
                    data-movement="0.2"
                  >
                    search
                  </span>
                </em>
              </a>
            </div>
            <div
              className="icon user-icon content__item Social-item nav-link-wrapper"
              data-cursor="-menu -icon-blend"
            >
              <a href="/login" className="nav-link">
                <em className="nav-link-hover-wrapper">
                  <span
                    data-text="login"
                    className="nav-link-hover"
                    data-movement="0.2"
                  >
                    login
                  </span>
                </em>
              </a>
            </div>
          </>
        )}
        <div>
          {!mobile && (
            <div
              className="icon user-icon content__item Social-item nav-link-wrapper"
              id="hamburgerMenuLabel"
              data-cursor="-menu -icon-blend"
            >
              <div className="nav-link">
                <em className="nav-link-hover-wrapper">
                  <span
                    data-text="menu"
                    className="nav-link-hover"
                    data-movement="0.2"
                  >
                    menu
                  </span>
                </em>
              </div>
            </div>
          )}
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
