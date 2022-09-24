import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import Loading from "./Components/Loading/Loading"
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { flexbox } from "@mui/system";

// Plugin to stop scrolling when the modal is open
class ModalPlugin extends ScrollbarPlugin {
  static pluginName = "modal";

  static defaultOptions = {
    open: false,
  };

  transformDelta(delta) {
    return this.options.open ? { x: 0, y: 0 } : delta;
  }
}

Scrollbar.use(ModalPlugin /* OverscrollPlugin */);

// onModalOpen  => scrollbar.updatePluginOptions('modal', { open: true });
// onModalClose => scrollbar.updatePluginOptions('modal', { open: false });

const root = ReactDOM.createRoot(document.getElementById("root"));

// Registering GSAP for MouseFollower & initializing it
MouseFollower.registerGSAP(gsap);
window.addEventListener("load", () => {
  const cubertoCursor = new MouseFollower({
    container: "#container-wrapper",
    stickDelta: 0,
  });

  // Smooth-scrollbar initialization
  // 3rd party library setup:
  const scrollbar = Scrollbar.init(
    document.querySelector("#scroll-container"),
    {
      damping: 0.1,
      delegateTo: document,
    }
  );

  // Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element:
  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) {
        scrollbar.scrollTop = value; // setter
      }
      return scrollbar.scrollTop; // getter
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  // when the smooth scroller updates, tell ScrollTrigger to update() too:
  scrollbar.addListener(ScrollTrigger.update);

  const fixedElem1 = document.querySelector("#navSticky");
  const fixedElem2 = document.querySelector(".mf-cursor");
  const fixedElem3 = document.querySelector(".menuLabelWrapper");
  const fixedElem4 = document.querySelector("#navBackdropSticky");

  scrollbar.addListener(function (status) {
    const offset = status.offset;

    fixedElem1.style.top = offset.y + "px";
    fixedElem2.style.top = offset.y + "px";
    fixedElem2.style.left = offset.x + "px";
    fixedElem3.style.top = `${offset.y + 32}px`;
    fixedElem4.style.top = offset.y + "px";
  });

  // Button hover animation
  const buttonAnimationElems = document.querySelectorAll(".button-animation-1");
  buttonAnimationElems.forEach((buttonAnimation) => {
    const magneticArea = buttonAnimation.querySelector(".magnetic-area");
    const btnAnimate = buttonAnimation.querySelector(".btn-animate");
    magneticArea.addEventListener("mouseenter", () => {
      btnAnimate.classList.add("active");
      btnAnimate.classList.remove("not-active");
    });
    magneticArea.addEventListener("mouseleave", () => {
      btnAnimate.classList.remove("active");
      btnAnimate.classList.add("not-active");
    });
  });

  // Don't let the user be able to scroll when the navbar is open
  const menuLabelWrapper = document.querySelector("#menuLabelWrapper");
  const navBackdropSticky = document.querySelector("#navBackdropSticky");
  const containerWrapper = document.querySelector("#container-wrapper");
  const navSticky = document.querySelector("#navSticky");
  const hamburger = document.querySelector(".hamburger");

  let menuOpen = false;

  menuLabelWrapper.addEventListener("click", () => {
    if (menuLabelWrapper.classList.contains("menuOpen")) {
      menuOpen = true;

      // HamburgerBar close
      hamburger.classList.add("close");
      hamburger.classList.remove("open");

      scrollbar.updatePluginOptions("modal", { open: false });

      // Navbar display none
      setTimeout(() => {
        if (menuOpen) {
          navSticky.style.display = "none";
        }
      }, 650);
    } else {
      menuOpen = false;

      // HamburgerBar open
      hamburger.classList.add("open");
      hamburger.classList.remove("close");

      scrollbar.updatePluginOptions("modal", { open: true });

      // Navbar display flex
      navSticky.style.display = "flex";
    }
  });
  navBackdropSticky.addEventListener("click", () => {
    if (menuLabelWrapper.classList.contains("menuOpen")) {
      scrollbar.updatePluginOptions("modal", { open: false });
    } else {
      scrollbar.updatePluginOptions("modal", { open: true });
    }
  });
});



root.render(
  <Suspense>
    <React.StrictMode>
      <BrowserRouter forceRefresh={true}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
