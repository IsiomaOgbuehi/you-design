import React from 'react';
import style from './footer.module.css';
import Link from 'next/link';
import Logo from "../../../public/assets/img/logo_grey.svg";
import Image from 'next/image';
import {GrFacebook} from 'react-icons/gr';
import { SiTwitter, SiInstagram } from "react-icons/si";


export default function Footer() {
    return (
      <footer>
        <div className={`container px-3 px-lg-5 py-5`}>
          <div className="row m-0 flex-column flex-lg-row flex-lg-row-reverse">
            <div className={`col-12 col-lg-10`}>
              <div className={`row`}>
                <div className={`col-6 col-lg-3 m-0 p-0 mb-4`}>
                  <div
                    className={`mb-4 default-primary-font-color2 ${style.footerHeaders}`}
                  >
                    Company
                  </div>
                  <ul className={`defaul-font-color4 ${style.footerList}`}>
                    <li>
                      <Link href="/">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Team</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Contact</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Privacy policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Terms of use</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={`col-6 col-lg-3 mb-4`}>
                  <div
                    className={`mb-4 default-primary-font-color2 ${style.footerHeaders}`}
                  >
                    Hire a designer
                  </div>
                  <ul className={`defaul-font-color4 ${style.footerList}`}>
                    <li>
                      <Link href="/">
                        <a>Post a job</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Find a designer</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Trending skills</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>How it works</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>YouDesign Business</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={`col-6 col-lg-3 mb-4`}>
                  <div
                    className={`mb-4 default-primary-font-color2 ${style.footerHeaders}`}
                  >
                    Find design jobs
                  </div>
                  <ul className={`defaul-font-color4 ${style.footerList}`}>
                    <li>
                      <Link href="/">
                        <a>Browse jobs</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Trending jobs</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>How it works</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Sign up</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={`col-6 col-lg-3 mb-4`}>
                  <div
                    className={`mb-4 default-primary-font-color2 ${style.footerHeaders}`}
                  >
                    Resources
                  </div>
                  <ul className={`defaul-font-color4 ${style.footerList}`}>
                    <li>
                      <Link href="/">
                        <a>Forum</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Top designers</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Contests</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>YouDesign blog</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`col-12 col-lg-2`}>
              <Link href="/">
                <a>
                  <div className={`${style.footerLogo}`}>
                    <Image
                      src={Logo}
                      layout="fill"
                      alt="Logo"
                      className={`${style.footerLogo}`}
                    />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="row m-0 mt-3 mt-lg-0">
            <div className="d-none d-lg-block col-lg-2"></div>
            <div className={`col-lg-10 p-0 py-2 ${style.socialDiv}`}>
              <div className="row">
                <div className={`col-12 col-md-6`}>
                  <div className={`${style.LowerFooter1}`}>
                    ©2021 YouDesign Tech (RC178349). All Rights Reserved
                  </div>
                  <div className={`mt-2 ${style.LowerFooter2}`}>
                    <Link href="/">
                      <a>Privacy Policy</a>
                    </Link>{" "}
                    <span className="mx-2">|</span>
                    <Link href="/">
                      <a>Terms of Use</a>
                    </Link>{" "}
                    <span className="mx-2">|</span>
                    <Link href="/">
                      <a>Terms & Condition</a>
                    </Link>
                  </div>
                  <div className={`mt-2 ${style.lowerFooter3}`}>
                    6A, Babajide George, Lekki Phase 1, Lagos Nigeria
                  </div>
                </div>
                <div
                  className={`col-12 col-md-6 text-start text-md-end mt-3 mt-md-0`}
                >
                  <span className={`${style.socialIcons} me-3 me-md-0 ms-md-3`}>
                    <Link href="/">
                      <a>
                        <GrFacebook />
                      </a>
                    </Link>
                  </span>
                  <span className={`${style.socialIcons} me-3 me-md-0 ms-md-3`}>
                    <Link href="/">
                      <a>
                        <SiTwitter />
                      </a>
                    </Link>
                  </span>
                  <span className={`${style.socialIcons} me-3 me-md-0 ms-md-3`}>
                    <Link href="/">
                      <a>
                        <SiInstagram />
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}