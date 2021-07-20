import React, {useState} from 'react';
import style from './home.module.css';
import BannerImg from "../../../public/assets/img/home-banner-illustration.svg";
import Image from 'next/image';
import { Button, ButtonOutline } from "../Buttons/buttons";
// Images
import CompuerGuyMobile from "../../../public/assets/img/homePage/computer_guy_mobile.png";
import CompuerGuyLG from "../../../public/assets/img/homePage/computer_guy_lg.png";
import ComputerIllustration from "../../../public/assets/img/homePage/computeriLLustration.svg";
// ICONS
import verifiedIcon from "../../../public/assets/img/icons/verified.svg";
import Smiley from "../../../public/assets/img/icons/smiley.svg";
import Folder from "../../../public/assets/img/icons/folder.svg";
import Brush from "../../../public/assets/img/icons/brush.svg";
import bookMark from "../../../public/assets/img/icons/bookmark_project.svg";
import HowItWorksRegister from "../../../public/assets/img/icons/how_it_works_register.svg";
import HowItWorksSetupAcct from "../../../public/assets/img/icons/how_it_works_setupAcct.svg";
import {ImArrowRight2} from "react-icons/im";
// import OwlCarousel from "@ntegral/react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Link from 'next/link';
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});

const responsive = {
  0: {
    items: 2,
    nav: false,
    stagePadding: 10,
    margin: 10,
    autoWidth: true,
  },
  480: {
    items: 3,
    nav: false,
    stagePadding: 15,
    autoWidth: true,
    margin: 10,
  },
  768: {
    items: 4,
    nav: true,
    margin: 10,
    stagePadding: 15,
    autoWidth: true,
    navText: [
      "<button className='nav-btn prev-slide'>fff</button>",
      "<button className='nav-btn next-slide'>nnn</button>",
    ],
  },
  920: {
    items: 5,
    nav: true,
    margin: 40,
    stagePadding: 15,
    autoWidth: true,
    navText: [
      "<button className='nav-btn prev-slide'>fff</button>",
      "<button className='nav-btn next-slide'>nnn</button>",
    ],
  },
};

export default function HomePage () {
  const [howItWorks, toggleHowItWorks] = useState(true);

    return (
      <div
        className={`container-fluid p-0 m-0 flex-column justify-content-between ${style.banner}`}
      >
        <div className="container">
          {/* <div className="row"> */}
          <div
            className={`row flex-column flex-md-row align-items-md-center pt-4`}
          >
            {/* BANNER TEXT AND BUTTONS */}
            <div className="col-md-6">
              <h1 className={`${style.bannerPrimaryText}`}>
                Bring your ideas to life with Africa’s top{" "}
                <span className="d-none d-md-inline-block">___</span>
              </h1>
              <h1 className={`${style.bannerSecondaryText} fst-italic`}>
                Creatives
              </h1>
              <div className={`mt-4 d-flex align-items-center`}>
                <button className={`btn btn-primary me-3`}>
                  Hire a Designer
                </button>
                <button className={`btn-secondary-outline`}>
                  Post a Project
                </button>
              </div>
            </div>

            {/* BANNER ILLUSTRATION */}
            <div className="mt-5 mt-md-0 col-md-6 d-flex justify-content-center">
              <div className={`${style.imageBanner}`}>
                <Image
                  src={BannerImg}
                  layout="fill"
                  className={`${style.image}`}
                  alt="Illustration"
                />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="container">
          <div className="row">
            <div className={`mt-5 ${style.featuredButtonsCarousel}`}>
              <div className={`py-3 px-4`}>In high demand</div>
              <div className={`px-4 pb-4 pt-2 position-relative`}>
                <OwlCarousel
                  className={`owl-theme`}
                  loop
                  //   stagePadding={20}
                  //   margin={0}
                  responsive={responsive}
                  dots={false}
                  // nav
                >
                  <div className="item">
                    <button className={`${style.featuredButtons}`}>
                      Logo Design
                    </button>
                  </div>
                  <div className="item">
                    <button className={`${style.featuredButtons}`}>
                      UI Design
                    </button>
                  </div>
                  <div className="item">
                    <button className={`${style.featuredButtons}`}>
                      Letter Head
                    </button>
                  </div>
                </OwlCarousel>
                {/* <div className={`d-none d-lg-flex ${style.owlDiv}`}>
              <button className="owl-prev">Prev</button>
              <button>Next</button>
            </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* HIRE A DESIGNER */}

        <div className={`bg-red`}>
          <div className="container">
            <div className="row py-4 py-md-5 d-block d-md-flex flex-row-reverse">
              <div className={`d-none d-lg-block`}></div>
              <div
                className={`col-12 col-md-6 d-md-flex flex-column justify-content-center`}
              >
                <h5 className={`text-white fw-normal ${style.hireDesiner}`}>
                  Hire a designer
                </h5>
                <div
                  className={`fw-bold fs-2 text-white mt-4 ${style.postProject}`}
                >
                  Post your project! Africa’s top talents are waiting
                </div>
                <p className={`text-white mt-4 ${style.subTextDescription}`}>
                  With access to the largest pool of Africa’s top creatives,
                  shortlist whose profile fits, or post a pitch and shortlist
                  whose bid you will go with.
                </p>
                <div className={`mt-4`}>
                  <button className={`btn btn-white me-2`}>
                    Browse Portfolios
                  </button>
                  <button
                    className={`btn btn-outline-white ${style.btnFontLarge}`}
                  >
                    Post Pitch
                  </button>
                </div>
              </div>
              <div
                className={`col-12 col-md-6 d-md-flex flex-column justify-content-center`}
              >
                <div
                  className={`d-md-none designerImg row mt-4 mt-md-0`}
                  style={{ borderRadius: "12.56px" }}
                >
                  <Image
                    src={CompuerGuyMobile}
                    alt="Designer"
                    className="image"
                  />
                </div>
                <div
                  className={`d-none d-md-flex align-items-center row mt-4 mt-md-0`} // ${style.designerImg}
                >
                  <Image
                    src={CompuerGuyLG}
                    alt="Designer"
                    // className={`${style.image}`}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FIND DESIGN JOBS */}
        <div className={`bg-white`}>
          <div className="container">
            <div className="row  py-4 py-md-5 px-3 px-md-5">
              <div
                className={`col-md-6 d-flex flex-column text-center justify-content-center align-items-center align-items-md-start`}
              >
                <h2 className={`fw-bold ${style.findDesingJobsText}`}>
                  <span style={{ color: "#252a2e" }}>Find design jobs</span>
                </h2>
                <div
                  className={`text-center text-md-start mt-3 ${style.subTextDescription}`}
                >
                  Start earning by bringing your best work to various design
                  projects on the continent
                </div>
                <div className={`mt-4 position-relative w-100`}>
                  <input
                    type="text"
                    className={`form-control ${style.browseJobsInput}`}
                  />
                  <button className={`btn btn-red ${style.browseJobsBtn}`}>
                    Browse Jobs
                  </button>
                </div>
              </div>

              <div
                className={`col-md-6 mt-2 mt-md-0 d-flex flex-column flex-md-row justify-content-center align-items-center `}
              >
                <div className={`${style.designerImg} mt-5 mt-md-0`}>
                  <Image
                    src={ComputerIllustration}
                    alt="Designer"
                    className={`${style.image}`}
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRENDING DESING PROJECTS */}
        <div className="container">
          <div className="row py-4">
            <div className="col-12 text-center">
              <h3 className="">
                <span style={{ color: "#252a2e" }} className="fw-bold">
                  Trending Design Projects
                </span>
              </h3>
            </div>
          </div>
          <div className={`row mx-md-5 ${style.trendingProjects}`}>
            <div className={`container border-bottom`}>
              {/*  */}
              <div className="row px-2 px-md-3 px-lg-4 py-3 justify-content-between">
                <div className="col-9">
                  <div className="container p-0">
                    <div className="row">
                      <div
                        className={`${style.trendingThumbnailImg} col-4`}
                      ></div>
                      <div className={`col-8`}>
                        <div className={` ${style.trendingItemTitle}`}>
                          Need help redesigning my company logo
                        </div>
                        <div className={`mt-1 ${style.trendingItemContent}`}>
                          Lorem ipsum dolor sit amet, consectetuer
                          adipiscing.....
                        </div>
                        <div
                          className={`mt-3 mt-md-4 d-flex justify-content-start align-items-center ${style.trendingItemContent}`}
                        >
                          <div style={{ width: "0.8rem", height: "0.8rem" }}>
                            <Image
                              src={verifiedIcon}
                              alt="Verified"
                              layout="responsive"
                            />
                          </div>
                          <span className="ms-2">Verified</span>
                          <span className="mx-2">|</span>
                          <div
                            className={`border rounded-2 border-2 border-radius-md fw-bold px-1 ${style.trendingItemContent}`}
                          >
                            10 BIDS
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-3`}>
                  <div className="container p-0">
                    <div className="row flex-column align-items-end">
                      <div className={`${style.trendingItemPrice} text-end`}>
                        35k - 40k
                      </div>
                      <div style={{ width: "4rem" }} className="mt-2">
                        <Image
                          src={bookMark}
                          alt="Verified"
                          layout="responsive"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  */}
            </div>
          </div>

          <div
            className={`mx-md-5 py-3 mt-md-0 text-center ${style.seeMoreDiv}`}
          >
            <button className={`${style.btnSeeMore}`}>
              <div className="d-flex align-items-center justify-content-center">
                <span className="me-2">See More</span>{" "}
                <span>
                  <ImArrowRight2 />
                </span>{" "}
              </div>
            </button>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-2 pt-3 pb-5 mt-md-5 bg-white px-3 px-md-5">
          <div className={`container`}>
            <h3 className={`text-center fw-bold`}>How it Works</h3>

            <div className="mt-4 mt-lg-5 d-flex justify-content-center">
              <div className={`${style.tab}`}>
                <button
                  className={`${howItWorks ? style.active : ""}`}
                  onClick={() => toggleHowItWorks(!howItWorks)}
                >
                  For Designers
                </button>
                <button
                  className={`${!howItWorks ? style.active : ""}`}
                  onClick={() => toggleHowItWorks(!howItWorks)}
                >
                  For Project Owner
                </button>
              </div>
            </div>

            <div className={`row mt-4 mt-md-5`}>
              <div className={`col-md-6 mb-4 mb-lg-5`}>
                <div className="row">
                  <div
                    className={`col-md-4 col-lg-2 my-3 my-md-0 d-flex justify-content-center d-md-block mb-3`}
                  >
                    <div style={{ width: "6rem" }}>
                      <Image
                        src={HowItWorksRegister}
                        alt="Verified"
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div
                    className={`col-md-8 col-lg-10 text-center text-md-start`}
                  >
                    <h5 className="default-primary-font-color2 mb-3">
                      Register
                    </h5>
                    <div className="default-font-color3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`col-md-6 mb-4 mb-lg-5`}>
                <div className="row">
                  <div
                    className={`col-md-4 col-lg-2 my-3 my-md-0 d-flex justify-content-center d-md-block mb-3`}
                  >
                    <div style={{ width: "6rem" }}>
                      <Image
                        src={HowItWorksSetupAcct}
                        alt="Verified"
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div
                    className={`col-md-8 col-lg-10 text-center text-md-start`}
                  >
                    <h5 className="default-primary-font-color2 mb-3">
                      Set up Account
                    </h5>
                    <div className="default-font-color3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`col-md-6 mb-4 mb-lg-5`}>
                <div className="row">
                  <div
                    className={`col-md-4 col-lg-2 my-3 my-md-0 d-flex justify-content-center d-md-block mb-3`}
                  >
                    <div style={{ width: "6rem" }}>
                      <Image
                        src={HowItWorksRegister}
                        alt="Verified"
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div
                    className={`col-md-8 col-lg-10 text-center text-md-start`}
                  >
                    <h5 className="default-primary-font-color2 mb-3">Create</h5>
                    <div className="default-font-color3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`col-md-6 mb-4 mb-lg-5`}>
                <div className="row">
                  <div
                    className={`col-md-4 col-lg-2 my-3 my-md-0 d-flex justify-content-center d-md-block mb-3`}
                  >
                    <div style={{ width: "6rem" }}>
                      <Image
                        src={HowItWorksSetupAcct}
                        alt="Verified"
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div
                    className={`col-md-8 col-lg-10 text-center text-md-start`}
                  >
                    <h5 className="default-primary-font-color2 mb-3">Earn</h5>
                    <div className="default-font-color3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`col-md-6`}>
                <div className="row">
                  <div
                    className={`col-md-4 col-lg-2 d-flex justify-content-center d-md-block mb-3`}
                  ></div>
                  <div
                    className={`col-md-8 col-lg-10 text-center text-md-start`}
                  ></div>
                </div>
              </div>

              <div className={`col-md-6`}>
                <div className="row">
                  <div
                    className={`col-md-4 col-lg-2 d-flex justify-content-center d-md-block mb-3`}
                  ></div>
                  <div
                    className={`col-md-8 col-lg-10 text-center text-md-start`}
                  >
                    <Link href="/">
                      <a className="text-decoration-none">
                        <div className="default-primary-font-color2 mb-3 fw-bold">
                          <span className="me-2">Register Now</span>
                          <span>
                            <ImArrowRight2 />
                          </span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OUR IMPACT */}
        <div
          className={`row px-3 py-3 pb-5 px-md-5 ${style.ourImapct} text-center flex-column align-items-center`}
        >
          <h3 className={`pb-3 fw-bold`}>Our Impact</h3>
          <div className={`fs-small ${style.impactText}`}>
            There is a project for every creative discipline and skill. What are
            you doing with yours? Start earning now.
          </div>

          <div className="row mt-3">
            <div
              className={`mt-4 col-6 col-lg-3 d-flex flex-column justify-content-center align-items-center mb-3`}
            >
              <div style={{ width: "3rem" }}>
                <Image src={Smiley} alt="Verified" layout="responsive" />
              </div>
              <span className={`fw-bold`} style={{ fontSize: "3rem" }}>
                3k
              </span>
              <div className={`mt-1`}>Creative Experts</div>
            </div>

            <div
              className={`mt-4 col-6 col-lg-3 d-flex flex-column justify-content-center align-items-center mb-3`}
            >
              <div style={{ width: "3rem" }}>
                <Image src={Folder} alt="Verified" layout="responsive" />
              </div>
              <span className={`fw-bold`} style={{ fontSize: "3rem" }}>
                1.2M
              </span>
              <div className={`mt-1`}>Payouts</div>
            </div>

            <div
              className={`mt-4 col-6 col-lg-3 d-flex flex-column justify-content-center align-items-center mb-3`}
            >
              <div style={{ width: "3rem" }}>
                <Image src={Smiley} alt="Verified" layout="responsive" />
              </div>
              <span className={`fw-bold`} style={{ fontSize: "3rem" }}>
                45k
              </span>
              <div className={`mt-1`}>Satisfied Brands</div>
            </div>

            <div
              className={`mt-4 col-6 col-lg-3 d-flex flex-column justify-content-center align-items-center mb-3`}
            >
              <div style={{ width: "3rem" }}>
                <Image src={Brush} alt="Verified" layout="responsive" />
              </div>
              <span className={`fw-bold`} style={{ fontSize: "3rem" }}>
                1.2k
              </span>
              <div className={`mt-1`}>Completed Projects</div>
            </div>
          </div>
        </div>

        {/* GET ON THE LIST */}
        <div
          className={`px-3 px-md-5 bg-orange pt-3 pb-5 row text-white text-center flex-column align-items-center`}
        >
          <h3 className={`fw-bold`}>Get On The List</h3>
          <div
            className={`mt-3 ${style.getOnListDiv}`}
            // style={{ fontSize: "1rem" }}
          >
            Be the first to know by joining out community and get freebies,
            tips, tricks, competitions, access to closed projects and numerous
            trainings
          </div>

          <div className={`mt-4 position-relative ${style.getOnListDiv}`}>
            <input
              type="text"
              className={`form-control ${style.getOnTheListInput}`}
              placeholder="Your email address"
            />
            <button className={`btn ${style.getOnTheListBtn}`}>Join</button>
          </div>
        </div>
      </div>
    );
}