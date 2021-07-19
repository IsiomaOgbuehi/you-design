import React from 'react';
import style from './login-signUp.module.css';
import { RiFacebookFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import logo from "../../../public/assets/img/logo.svg";
import Link from 'next/link';
import Image from 'next/image'

interface pageProps {
  pageHeader: React.ReactNode;
  illustrationBG: React.ReactNode;
  form: React.ReactNode;
}

const LoginSignUp: React.FC<pageProps> = ({
  pageHeader,
  form,
  illustrationBG,
}) => {
    // console.log(pageHeader);
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-lg-4 d-flex flex-column justify-content-between align-items-center default-font-color p-3 p-md-5">
          {/* <div className="d-flex flex-column"> */}
          {/* LOGO */}
          <div className={`container ps-0 logoDiv position-relative`}>
            <Link href="/">
              <a>
              <Image
                src={logo}
                // layout="fill"
                alt="Logo"
                className="logoImg"
                
              />
              </a>
            </Link>
          </div>

          <div className="container p-0 m-0 flex-grow-1 d-flex flex-column justify-content-lg-center">
            <div className="row">
              {/* TEXT */}
              <div className="mt-5 mt-lg-0">{pageHeader}</div>

              {/* SOCIAL LOGIN */}
              <div className="mt-4 d-flex align-items-center">
                <div
                  className={`d-flex justify-content-between ${style.socialBtnFb}`}
                >
                  <div
                    className={`${style.iconDiv} d-flex flex-column align-items-center justify-content-center`}
                  >
                    <RiFacebookFill size="1.4rem" color="#3B5998" />
                  </div>
                  <div className="flex-grow-1 d-flex align-items-center justify-content-center text-white font-small">
                    Continue with Facebook
                  </div>
                </div>

                <div
                  className={`d-flex justify-content-between ${style.socialBtnGoogle} ms-3`}
                >
                  {" "}
                  {/* mt-2 added(ms-3) */}
                  <div
                    className={`${style.iconDiv} d-flex flex-column align-items-center justify-content-center`}
                  >
                    <FcGoogle size="1.4rem" />
                  </div>
                  {/* <div className="flex-grow-1 d-flex align-items-center justify-content-center text-white font-small">
              Continue with Google
            </div> */}
                </div>
              </div>

              {/* FORM */}
              <form>{form}</form>

              <div className="terms font-small mt-2 default-font-color2">
                By Signing in, you agree to our{" "}
                <span className="link-danger">
                  {/* <a href="/">Terms of Use</a> */}
                  <Link href="/">Terms of Use</Link>
                </span>{" "}
                and to receive YouDesign emails & updates and acknowledge that
                you read our{" "}
                <span className="link-danger">
                  {/* <a href="/">Privacy Policy.</a> */}
                  <Link href="/">Privacy Policy.</Link>
                </span>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* ILLUSTRATION SIDE BACKGROUND */}

        {illustrationBG}
      </div>
    </div>
  );
};
export default LoginSignUp;