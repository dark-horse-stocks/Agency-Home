import './App.scss';
import { useEffect, useLayoutEffect, useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import ListPage from './Screens/List Page/ListPage';
import { Route, Switch } from 'react-router-dom';
import NewBlog from './Screens/New Blog Page/NewBlog';
import Dashboard from './Screens/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import TeamPage from './Screens/Team Page/TeamPage';
import Reports from './Screens/Reports/Reports';
import Fundalysis from './Screens/Fundalysis/Fundalysis';
import AgencyHome from './Screens/Agency Home/AgencyHome';
import BlogFooter from './Components/Blog Footer/BlogFooter';
import Faq from './Screens/Faq/Faq';
import Button from './Components/Button/Button';

// Importing footer-animation
import FooterAnimation from './Components/FooterAnimation/FooterAnimation';

// GSAP & Cuberto mousefollower imposts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomTable from './Components/NewComponents/CustomTable';
import PhilosophyPage from './Screens/Philosophy Page/PhilosophyPage';
import PMS from './Screens/pms/Blog';

// Registering ScrollTrigger for smooth scrolling
gsap.registerPlugin(ScrollTrigger);

function App(props) {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    magneticButtonFunc();
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
      ease: 'power1',
      duration: 0.6,
    });
  }

  function magneticButtonFunc() {
    // Magnetic button js
    const mWrap = document.querySelectorAll('.magnetic-wrap');

    mWrap.forEach(function (wrap) {
      wrap.mContent = wrap.querySelector('.magnetic-content');
      wrap.mArea = wrap.querySelector('.magnetic-area');

      wrap.mArea.addEventListener('mousemove', function (e) {
        parallaxIt(e, wrap);
      });
      wrap.mArea.addEventListener('mouseleave', function (e) {
        gsap.to(wrap.mContent, {
          scale: 1,
          x: 0,
          y: 0,
          ease: 'power3',
          duration: 0.6,
        });
      });
    });
  }
  // ===============================

  function getInitialMode() {
    const isReturningUser = 'dark' in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
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

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // Adding class on body element according to the value of darkMode variable
  // to be able to perform specific animations according to the mode
  if (darkMode) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  }

  return (
    <div id="app" className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div id="scroll-container">
        <div id="container-wrapper">
          <NavBar />
          <div className="">
            <Switch>
              <Route exact={true} key={12} path="/team" component={TeamPage} />
              {/* <Route
              exact={true}
              key={18}
              path="/list-page"
              component={ListPage}
            /> */}

              {/* <Route exact={true} key={6} path="/new-blog" component={NewBlog} /> */}
              <Route exact={true} key={7} path="/dashboard" component={Dashboard} />
              <Route exact={true} key={8} path="/reports" component={Reports} />
              <Route exact={true} key={9} path="/fundalysis" component={Fundalysis} />
              <Route exact={true} key={9} path="/Faq" component={Faq} />
              <Route exact={true} key={20} path="/" component={AgencyHome} />
              <Route exact={true} key={28} path="/table" component={CustomTable} />

              <Route exact={true} key={7} path="/philosophy-Page" component={PhilosophyPage} />
              <Route exact={true} key={8} path="/pms" component={PMS} />
              <Route exact={true} key={9} path="/fundalysis" component={Fundalysis} />
              <Route exact={true} key={9} path="/faq" component={Faq} />
              <Route exact={true} key={20} path="/" component={AgencyHome} />
              <Route exact={true} key={28} path="/table" component={CustomTable} />
            </Switch>
          </div>

          <div className="blog-mode">
            <BlogFooter />
            <div className="d-flex justify-content-between sub-footer">
              <ul className="d-flex footer-list flex-column-tablet">
                <li className="line-animation-3">
                  <a href="https://www.darkhorsestocks.in/privacy-policy.php">Privacy Policy</a>
                </li>
                <li className="line-animation-3">
                  <a href="https://www.darkhorsestocks.in/terms-conditions.php">
                    {' '}
                    Terms & Conditions
                  </a>
                </li>
                <li className="line-animation-3">
                  <a href="https://www.darkhorsestocks.in/disclaimer.php"> Disclaimer</a>
                </li>
                <li className="line-animation-3">
                  <a href="https://www.darkhorsestocks.in/refund-policy.php"> Refund policy</a>
                </li>
              </ul>

              <div className="toggle-container mt-section d-flex w-100">
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
        </div>
      </div>
    </div>
  );
}

export default App;
