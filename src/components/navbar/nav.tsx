import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import style from './nav.module.css';
import logo from "../../../public/assets/img/logo.svg";
import Link from 'next/link';
import Hamburger from "hamburger-react";


export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const sideNav = () => {
      return (
        <MobileMenu
          show={isMenuOpen}
          toggle={() => setIsMenuOpen(!isMenuOpen)}
        />
      );
    }
    // useEffect(() => {
    //   const nav = document.querySelector('nav');
    //   window.addEventListener('scroll', () => {
    //     nav?.classList.toggle("sticky", window.pageYOffset > 500);
    //   });
      
    //    () => {return null;}
    // }, []);
    return (
      <>
        <nav
          className={`w-100 px-3 px-md-5 pt-3 pb-2  d-flex justify-content-between align-items-center ${style.nav}`} // ${style.nav}
        >
          <MobileMenu
            show={isMenuOpen}
            toggle={() => setIsMenuOpen(!isMenuOpen)}
          />
          <Link href="/">
            <a>
              <div className={`${style.navLogo}`}>
                <Image
                  src={logo}
                  layout="fill"
                  alt="Logo"
                  className={`${style.navLogoImg}`}
                />
              </div>
            </a>
          </Link>

          <div className={`d-flex flex-grow-1 justify-content-end`}>
            <div className={`d-md-none d-flex align-items-center`}>
              <span
                className={`${style.hamburgerDark}`}
                // onClick={() => setIsMenuOpen(!isMenuOpen)}
                onClick={sideNav}
              >
                <Hamburger
                  toggled={isMenuOpen}
                  toggle={setIsMenuOpen}
                  direction="right"
                  duration={0.5}
                  color={`${isMenuOpen ? "#f7f7f7" : "#000"}`}
                  rounded
                  // z-index={`${isMenuOpen ? "1000" : "10"}`}
                />
              </span>
            </div>

            <div
              className={`d-none d-md-flex justify-content-end align-items-center ms-md-5 
              ${style.menu}`}
            >
              <div className={`${style.navLink}`}>
                <Link href="/">
                  <a className={` ${style.nav_item}`}>Hire a Designer</a>
                </Link>
                <div className={`${style.dropdown_container}`}>
                <div className={`${style.dropdown}`}>
                    <a href="">
                      <div className="d-flex align-items-center p-2">
                        <img width="30" height="30" src="" />
                        <div className="d-flex ps-2 flex-column align-items-start">
                          <span className={`${style.dropdown_title}`}>Create a new project</span>
                          Get proposals for your brief
                          </div>
                      </div>
                    </a>
                    <a href="">
                      <div className="d-flex align-items-center p-2">
                        <img width="30" height="30" src="" />
                        <div className="d-flex ps-2 flex-column align-items-start">
                          <span className={`${style.dropdown_title}`}>Browse Portfolios</span>
                         See works from top creatives
                          </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className={`${style.navLink}`}>
                <Link href="/">
                  <a className={` ${style.nav_item}`}>Find Design Jobs</a>
                </Link>
              </div>

              <div className={`${style.navLink}`}>
                <Link href="/">
                  <a className={` ${style.nav_item}`}>How it Works</a>
                </Link>
              </div>

              <div className={`${style.navLink}`}>
                <Link href="/login">
                  <a className={` ${style.nav_item}`}>Sign In</a>
                </Link>
              </div>

              <div className={`${style.navLink}`}>
                <Link href="/signup" passHref>
                  <button
                    className={`btn btn-outline-primary ${style.navJoin}`}
                  >
                    Join
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}

const MobileMenu: React.FC<{ show: boolean; toggle: () => any; }> = ({
  show,
  toggle,
}) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add("hiddenBody");
    } else {
      document.body.classList.remove("hiddenBody");
    }
  }, [show]);
  return (
    <div
      className={` ${
        show ? `${style.mobileMenu} ${style.isActive}` : "d-none"
      }`}
    >
      <div className={`${style.mobileMenuContentDiv} px-3`}>
        <ul className={`${style.mobileMenuUL}`}>
          <li
            className={`${style.mobileMenuLI} ${
              show ? `${style.isActive}` : ""
            }`}
            style={{ animationDelay: ".4s" }}
            onClick={toggle}
          >
            <Link href="/">
              <a>Hire a Designer</a>
            </Link>
          </li>

          <li
            className={`${style.mobileMenuLI} ${
              show ? `${style.isActive}` : ""
            }`}
            style={{ animationDelay: ".6s" }}
            onClick={toggle}
          >
            <Link href="/">
              <a>Find Design Jobs</a>
            </Link>
          </li>

          <li
            className={`${style.mobileMenuLI} ${
              show ? `${style.isActive}` : ""
            }`}
            style={{ animationDelay: ".8s" }}
            onClick={toggle}
          >
            <Link href="/">
              <a>How it Works</a>
            </Link>
          </li>

          <li
            className={`${style.mobileMenuLI} ${
              show ? `${style.isActive}` : ""
            }`}
            style={{ animationDelay: "1s" }}
            onClick={toggle}
          >
            <Link href="/login">
              <a>Sign In</a>
            </Link>
          </li>

          <li
            className={`${style.mobileMenuLI} ${
              show ? `${style.isActive}` : ""
            }`}
            style={{ animationDelay: "1.2s" }}
            onClick={toggle}
          >
            <Link href="/signup" passHref>
              <button className={`btn btn-outline-white ${style.navJoin}`}>
                Join
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};