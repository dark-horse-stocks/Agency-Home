import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import ListPage from "./Screens/List Page/ListPage";
import { Route, Switch } from "react-router-dom";
import NewBlog from "./Screens/New Blog Page/NewBlog";
import Dashboard from "./Screens/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import TeamPage from "./Screens/Team Page/TeamPage";
import Blog from "./Screens/Blog/Blog";
import Fundalysis from "./Screens/Fundalysis/Fundalysis";
import AgencyHome from "./Screens/Agency Home/AgencyHome";
import BlogFooter from "./Components/Blog Footer/BlogFooter";
import Faq from "./Screens/Faq/Faq";
import Button from "./Components/Button/Button";

// Importing footer-animation
import FooterAnimation from "./Components/FooterAnimation/FooterAnimation";

// GSAP & Cuberto mousefollower imposts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomTable from "./Components/NewComponents/CustomTable";

// Registering ScrollTrigger for smooth scrolling
gsap.registerPlugin(ScrollTrigger);

function App(props) {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    magneticButtonFunc();

    const txtAnimate1 = document.querySelectorAll(".text-slide-up-animation-1");
    const txtAnimate2 = document.querySelectorAll(".text-slide-up-animation-2");
    const txtAnimate3 = document.querySelectorAll(".text-slide-up-animation-3");
    txtAnimate1.forEach((txt) => {
      const splitWordsArr = txt.innerText.match(/\S+/g);
      txt.innerHTML = "";
      splitWordsArr.forEach((word) => {
        const txtAnimateTemplate1 = `
        <div class="text-slide-up-animation-wrapper-1">
          <div class="text-slide-up-animation-content-1">
            <span class="text-slide-up-animation-text-1">${word}</span>
          </div>
        </div>
        `;

        txt.innerHTML += txtAnimateTemplate1;
      });
    });
    txtAnimate2.forEach((txt) => {
      const splitWordsArr = txt.innerText.match(/\S+/g);
      txt.innerHTML = "";
      splitWordsArr.forEach((word) => {
        const txtAnimateTemplate2 = `
        <div class="text-slide-up-animation-wrapper-2">
          <div class="text-slide-up-animation-content-2">
            <span class="text-slide-up-animation-text-2">${word}</span>
          </div>
        </div>
        `;

        txt.innerHTML += txtAnimateTemplate2;
      });
    });
    txtAnimate3.forEach((txt) => {
      const splitWordsArr = txt.innerText.match(/\S+/g);
      txt.innerHTML = "";
      splitWordsArr.forEach((word) => {
        const txtAnimateTemplate3 = `
        <span class="text-slide-up-animation-wrapper-3">
          <span class="text-slide-up-animation-content-3">
            <span class="text-slide-up-animation-text-3">${word}</span>
          </span>
        </span>
        `;

        txt.innerHTML += txtAnimateTemplate3;
      });
    });

    window.addEventListener("load", () => {
      // Text animation 1
      gsap.fromTo(
        ".text-slide-up-animation-text-1",
        { skewY: "20deg" },
        {
          translateY: "-200%",
          skewY: "0deg",
          duration: 1,
          ease: "power4.out",
          stagger: 0.2,
        }
      );

      // Text animation 2
      gsap.fromTo(
        ".text-slide-up-animation-text-2",
        { rotateX: "-40deg", opacity: 0 },
        {
          translateY: "-130%",
          rotateX: "0deg",
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.1,
        }
      );

      // Text animation 3
      gsap.utils.toArray(".text-slide-up-animation-3").forEach((elem) => {
        const txtAnimate3Wrappers = elem.querySelectorAll(
          ".text-slide-up-animation-wrapper-3"
        );
        const txtAnimate3Text = elem.querySelectorAll(
          ".text-slide-up-animation-text-3"
        );
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: txtAnimate3Wrappers,
              start: "top 80%",
            },
          })
          .fromTo(
            txtAnimate3Text,
            { skewY: "2deg" },
            {
              translateY: "-200%",
              skewY: "0deg",
              duration: 1.5,
              ease: "power4.out",
            }
          );
      });

      // Footer slide up animation
      gsap.fromTo(
        ".footer-animation-slide-up",
        { translateY: "100%", opacity: 0 },
        {
          translateY: "0%",
          opacity: 1,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
          },
        }
      );

      // Footer mountains slide up animation
      gsap.to(".slideUp", {
        translateY: "50px",
        duration: 3,
        ease: "power4.easeOut",
        scrollTrigger: {
          trigger: ".mountains",
          start: "top 80%",
          scrub: 1,
        },
        stagger: 0.05,
      });

      // Footer sun & moon slide up animation
      if (darkMode) {
        gsap.to(".moon", {
          rotate: "0deg",
          duration: 4,
          ease: "power4.easeOut",
          scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
          },
        });
      } else {
        gsap.to(".sun", {
          rotate: "0deg",
          duration: 4,
          ease: "power4.easeOut",
          scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
          },
        });
      }
      const toggleThemeBtn = document.querySelector("#checkbox");
      toggleThemeBtn.addEventListener("change", () => {
        console.log(toggleThemeBtn, darkMode);
        if (document.body.classList.contains("dark-mode")) {
          gsap.to(".moon", {
            rotate: "0deg",
            duration: 4,
            ease: "power4.easeOut",
          });
          gsap.to(".sun", {
            rotate: "90deg",
            duration: 4,
            ease: "power4.easeOut",
          });
        } else if (document.body.classList.contains("light-mode")) {
          gsap.to(".sun", {
            rotate: "0deg",
            duration: 4,
            ease: "power4.easeOut",
          });
          gsap.to(".moon", {
            rotate: "90deg",
            duration: 4,
            ease: "power4.easeOut",
          });
        }
      });

      // Delegating click event
      const allMagneticAreaElem = document.querySelectorAll(".magnetic-area");
      allMagneticAreaElem.forEach((elem) => {
        elem.addEventListener("click", (e) => {
          elem.nextElementSibling.click();
        });
      });
    });
  }, []);

  function parallaxIt(e, wrap) {
    const movement = wrap.mContent.dataset.movement || 0.2;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const boundingRect = wrap.mArea.getBoundingClientRect();
    const halfDiff = Math.abs(boundingRect.width - boundingRect.height) / 2;
    const relX = e.pageX - boundingRect.left - halfDiff;
    const relY = e.pageY - boundingRect.top;

    gsap.to(wrap.mContent, {
      x: (relX - boundingRect.width / 2) * movement,
      y: (relY - boundingRect.height / 2 - scrollTop) * movement,
      ease: "power1",
      duration: 0.6,
    });
  }

  function magneticButtonFunc() {
    // Magnetic button js
    const mWrap = document.querySelectorAll(".magnetic-wrap");

    mWrap.forEach(function (wrap) {
      wrap.mContent = wrap.querySelector(".magnetic-content");
      wrap.mArea = wrap.querySelector(".magnetic-area");

      wrap.mArea.addEventListener("mousemove", function (e) {
        parallaxIt(e, wrap);
      });
      wrap.mArea.addEventListener("mouseleave", function (e) {
        gsap.to(wrap.mContent, {
          scale: 1,
          x: 0,
          y: 0,
          ease: "power3",
          duration: 0.6,
        });
      });
    });
  }
  // ===============================

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // Adding class on body element according to the value of darkMode variable
  // to be able to perform specific animations according to the mode
  if (darkMode) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }

  return (
    <div id="app" className={darkMode ? "dark-mode" : "light-mode"}>
      <div id="scroll-container">
        <div id="container-wrapper">
          <NavBar />
          <Switch>

            <Route exact={true} key={12} path="/team" component={TeamPage} />
            <Route
              exact={true}
              key={18}
              path="/list-page"
              component={ListPage}
            />
            <Route exact={true} key={6} path="/new-blog" component={NewBlog} />
            <Route
              exact={true}
              key={7}
              path="/dashboard"
              component={Dashboard}
            />
            <Route exact={true} key={8} path="/blog" component={Blog} />
            <Route
              exact={true}
              key={9}
              path="/fundalysis"
              component={Fundalysis}
            />
                        <Route
              exact={true}
              key={9}
              path="/Faq"
              component={Faq}
            />
            <Route
              exact={true}
              key={20}
              path="/"
              component={AgencyHome}
            />

            <Route
              exact={true}
              key={24}
              path="/blog-footer"
              component={BlogFooter}
            />

            <Route
              exact={true}
              key={28}
              path="/table"
              component={CustomTable}
            />
          </Switch>
          <div className="footer mt-section">
            <div className="footer-animation-slide-up-wrapper">
              <div className="footer-animation-slide-up">
                <div className="d-flex flex-column-tablet justify-content-between">
                  <h2 className="fs-95 fw-bold footer-text">
                    Suggesting only <br /> fundamentally
                    <br /> <span>strong company</span> <br /> every week
                  </h2>
                  <div>
                    <h3 className="fs-30">
                      Join us for weekly <br />
                      updates
                    </h3>
                    <div className="mt-1">
                      <Button text="Whatsapp" />
                    </div>
                  </div>
                </div>
                <div className="toggle-container mt-section">
                  <span>Night Mode</span>
                  <span className="toggle">
                    <input
                      checked={darkMode}
                      onChange={() => setDarkMode((prevMode) => !prevMode)}
                      id="checkbox"
                      className="checkbox"
                      type="checkbox"
                    />
                    <label htmlFor="checkbox" />
                  </span>
                </div>
              </div>
            </div>
            <FooterAnimation />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
