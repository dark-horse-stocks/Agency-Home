import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import HamburgerBar from "./HamburgerBar";

const MenuLabelWrapper = styled.div`
  position: fixed;
  top: 1.75rem;
  right: 1.9%;
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > .magnetic-area {
    top: -1.5rem;
    left: -1.5rem;
    /* right: -1.5rem; */
    bottom: -1.5rem;
  }

  .dark-mode &:hover > label > div::before,
  .dark-mode &:hover > label > div::after {
    background-color: black !important;
  }
  .light-mode &:hover > label > div::before,
  .light-mode &:hover > label > div::after {
    background-color: white !important;
  }

  @media screen and (max-width: 1200px) {
    right: 4%;
  }

  @media screen and (max-width: 700px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const MenuLabel = styled.label`
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-align: center;
`;

const NavBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 8;
  height: 100vh;
  opacity: ${(props) => (props.clicked ? 1 : 0)};
  pointer-events: ${(props) => (props.clicked ? "auto" : "none")};
  transition: opacity 650ms cubic-bezier(0.4, 0, 0.2, 1);

  .dark-mode & {
    background-color: rgba(255, 255, 255, 0.2);
  }
  .light-mode & {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.3s;

  &::before,
  &::after {
    position: absolute;
    content: "";
    background-color: #fff;
    left: 0;
    width: 100%;
    height: 2.5px;
    transition: transform 0.3s;
  }

  .light-mode &::before,
  .light-mode &::after {
    background-color: #000;
  }

  &::before {
    top: 30%;
    transform: ${(props) =>
      props.clicked ? "translateY(5px) rotate(135deg)" : "rotate(0)"};
  }

  &::after {
    bottom: 30%;
    transform: ${(props) =>
      props.clicked ? "translateY(-5px) rotate(-135deg)" : "rotate(0)"};
  }

  @media screen and (max-width: 700px) {
    &::before,
    &::after {
      height: 2px;
    }
    &::before {
      transform: ${(props) =>
        props.clicked ? "translateY(4.5px) rotate(135deg)" : "rotate(0)"};
    }

    &::after {
      transform: ${(props) =>
        props.clicked ? "translateY(-4.5px) rotate(-135deg)" : "rotate(0)"};
    }
  }
`;

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 100%;
  height: 100vh;
  z-index: 10;
  display: none;
  // visibility: hidden;
  flex-direction: column;
  background-color: #fff;
  overflow: hidden;
  padding: 3rem 12rem 3rem 8rem;

  transform: translateX(0%);

  &.nav-open {
    --startTranslateX: 0%;
    --endTranslateX: -100%;
    animation: nav-open 650ms cubic-bezier(0.4, 0, 0.2, 1) forwards;

    & > * {
      --startTranslateX: -100%;
      --endTranslateX: 0%;
      animation: nav-open 650ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
  }

  &.nav-close {
    --startTranslateX: -100%;
    --endTranslateX: 0%;
    animation: nav-close 650ms cubic-bezier(0.4, 0, 0.2, 1) forwards;

    & > * {
      --startTranslateX: 0%;
      --endTranslateX: -100%;
      animation: nav-close 650ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
  }

  & > * {
    opacity: 0;
    transition: transform 650ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 650ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-100%);
  }

  & .vertical-center {
    flex: 1;
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1400px) {
    padding: 8rem 12rem 8rem 8rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 5rem 11rem 5rem 5rem;
  }
  @media screen and (max-width: 992px) {
    padding: 4rem 10rem 4rem 4rem;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 5rem 5rem 5rem 2.8rem;
    justify-content: center;

    & .vertical-center {
      flex: unset;
    }
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;

  & > .menu-color {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 500px) {
    & > .menu-color {
      margin-bottom: 0.5rem;
    }
  }
`;

function HamburgerMenu() {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  useEffect(() => {});

  return (
    <>
      <MenuLabelWrapper
        data-cursor="-menu"
        id="menuLabelWrapper"
        className={
          click
            ? "menuLabelWrapper menuOpen"
            : "menuLabelWrapper magnetic-wrap menuClose"
        }
        clicked={click}
        onClick={handleClick}
      >
        <div className="magnetic-area"></div>
        <MenuLabel
          id="stickyElem"
          className="magnetic-content"
          htmlFor="navi-toggle"
          data-movement="0.3"
        >
          {/* <Icon className="menu-label" clicked={click}></Icon> */}
          <HamburgerBar></HamburgerBar>
        </MenuLabel>
      </MenuLabelWrapper>

      <NavBackdrop
        id="navBackdropSticky"
        clicked={click}
        onClick={handleClick}
      ></NavBackdrop>

      <Navigation
        id="navSticky"
        clicked={click}
        className={click ? "x nav-open" : "x nav-close"}
      >
        <div className="vertical-center">
          <div className="d-flex list-nav">
            <List className="first-list">
              <div className="menu-color">Social</div>
              <li
                className="content__item Social-item magnetic-wrap nav-link-wrapper"
                data-cursor="-opaque"
              >
                <div className="magnetic-area"></div>
                <a
                  href="https://api.whatsapp.com/send?phone=917874999975"
                  className="nav-link magnetic-content"
                >
                  <em className="nav-link-hover-wrapper">
                    <span
                      data-text="Whatsapp"
                      className="nav-link-hover"
                      data-movement="0.2"
                    >
                      Whatsapp
                    </span>
                  </em>
                </a>
              </li>
              <li
                className="content__item Social-item magnetic-wrap nav-link-wrapper"
                data-cursor="-opaque"
              >
                <div className="magnetic-area"></div>
                <a
                  href="https://telegram.me/darkhorsestocks"
                  className="nav-link magnetic-content"
                >
                  <em className="nav-link-hover-wrapper">
                    <span
                      data-text="Telegram"
                      className="nav-link-hover"
                      data-movement="0.2"
                    >
                      Telegram
                    </span>
                  </em>
                </a>
              </li>
              <li
                className="content__item Social-item magnetic-wrap nav-link-wrapper"
                data-cursor="-opaque"
              >
                <div className="magnetic-area"></div>
                <a
                  href="https://www.instagram.com/darkhorse_stocks/"
                  className="nav-link magnetic-content"
                >
                  <em className="nav-link-hover-wrapper">
                    <span
                      data-text="Instagram"
                      className="nav-link-hover"
                      data-movement="0.2"
                    >
                      Instagram
                    </span>
                  </em>
                </a>
              </li>
              <li
                className="content__item Social-item magnetic-wrap nav-link-wrapper"
                data-cursor="-opaque"
              >
                <div className="magnetic-area"></div>
                <a
                  href="https://twitter.com/DARKHORSESTOCKS"
                  className="nav-link magnetic-content"
                >
                  <em className="nav-link-hover-wrapper">
                    <span
                      data-text="Twitter"
                      className="nav-link-hover"
                      data-movement="0.2"
                    >
                      Twitter
                    </span>
                  </em>
                </a>
              </li>
              <li
                className="content__item Social-item magnetic-wrap nav-link-wrapper"
                data-cursor="-opaque"
              >
                <div className="magnetic-area"></div>
                <a
                  href="https://www.getrevue.co/profile/darkhorsestocks/?ltclid="
                  className="nav-link magnetic-content"
                >
                  <em className="nav-link-hover-wrapper">
                    <span
                      data-text="Revue"
                      className="nav-link-hover"
                      data-movement="0.2"
                    >
                      Revue
                    </span>
                  </em>
                </a>
              </li>
              <li
                className="content__item Social-item magnetic-wrap nav-link-wrapper"
                data-cursor="-opaque"
              >
                <div className="magnetic-area"></div>
                <a
                  href="https://www.youtube.com/channel/UCKNoxoowoWYZEfKk8zIe8vQ/featured"
                  className="nav-link magnetic-content"
                >
                  <em className="nav-link-hover-wrapper">
                    <span
                      data-text="Youtube"
                      className="nav-link-hover"
                      data-movement="0.2"
                    >
                      Youtube
                    </span>
                  </em>
                </a>
              </li>
              <li
                className="content__item Social-item magnetic-wrap nav-link-wrapper"
                data-cursor="-opaque"
              >
                <div className="magnetic-area"></div>
                <a
                  href="https://www.youtube.com/channel/UCKNoxoowoWYZEfKk8zIe8vQ/featured"
                  className="nav-link magnetic-content"
                >
                  <em className="nav-link-hover-wrapper">
                    <span
                      data-text="Quora"
                      className="nav-link-hover"
                      data-movement="0.2"
                    >
                      Quora
                    </span>
                  </em>
                </a>
              </li>
            </List>
            <List className="second-list">
              <div className="menu-color">Menu</div>
              <li
                className="content__item fw-bold magnetic-wrap menu-item nav-link-wrapper"
                data-cursor="-opaque"
              >
                <div className="magnetic-area"></div>
                <span
                  className="nav-link magnetic-content"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  <em className="nav-link-hover-wrapper">
                    <span
                      data-text="Home"
                      className="nav-link-hover"
                      data-movement="0.2"
                    >
                      Home
                    </span>
                  </em>
                </span>
              </li>
              <li
                className="content__item fw-bold magnetic-wrap menu-item nav-link-wrapper"
                data-cursor="-opaque"
              >
                <div className="magnetic-area"></div>
                <span
                  className="nav-link magnetic-content"
                  onClick={() => {
                    history.push("/blog")
                  }}
                >
                  <em className="nav-link-hover-wrapper">
                    <span
                      data-text="Blog"
                      className="nav-link-hover"
                      data-movement="0.2"
                    >
                      Blog
                    </span>
                  </em>
                </span>
              </li>
              <li
                className="content__item fw-bold magnetic-wrap menu-item nav-link-wrapper"
                data-cursor="-opaque"
              >
                <div className="magnetic-area"></div>
                <span
                  className="nav-link magnetic-content"
                  onClick={() => {
                    history.push("/dashboard")
                  }}
                >
                  <em className="nav-link-hover-wrapper">
                    <span
                      data-text="Dashboard"
                      className="nav-link-hover"
                      data-movement="0.2"
                    >
                      Dashboard
                    </span>
                  </em>
                </span>
              </li>
              <li
                className="content__item fw-bold magnetic-wrap menu-item nav-link-wrapper"
                data-cursor="-opaque"
              >
                <div className="magnetic-area"></div>
                <span
                  className="nav-link magnetic-content"
                  onClick={() => {
                    history.push("/fundalysis")
                  }}
                >
                  <em className="nav-link-hover-wrapper">
                    <span
                      data-text="Fundalysis"
                      className="nav-link-hover"
                      data-movement="0.2"
                    >
                      Fundalysis
                    </span>
                  </em>
                </span>
              </li>
              <li
                className="content__item fw-bold magnetic-wrap menu-item nav-link-wrapper"
                data-cursor="-opaque"
              >
                <div className="magnetic-area"></div>
                <span
                  className="nav-link magnetic-content"
                  onClick={() => {
                    history.push("/team")
                  }}
                >
                  <em className="nav-link-hover-wrapper">
                    <span
                      data-text="Team"
                      className="nav-link-hover"
                      data-movement="0.2"
                    >
                Team
                    </span>
                  </em>
                </span>
              </li>
              <li
                className="content__item fw-bold magnetic-wrap menu-item nav-link-wrapper"
                data-cursor="-opaque"
              >
                <div className="magnetic-area"></div>
                <span
                  className="nav-link magnetic-content"
                  onClick={() => {
                    history.push("/faq");
                  }}
                >
                  <em className="nav-link-hover-wrapper">
                    <span
                      data-text="Faq's"
                      className="nav-link-hover"
                      data-movement="0.2"
                    >
                      Faq's
                    </span>
                  </em>
                </span>
              </li>
            </List>
          </div>
        </div>
        <div className="contact-menu">
          <h6 className="menu-color">Get in touch</h6>
          <p className="line-animation-1">support@darkhorsestocks.in</p>
        </div>
      </Navigation>
    </>
  );
}

export default HamburgerMenu;
