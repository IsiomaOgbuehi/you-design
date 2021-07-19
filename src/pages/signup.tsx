import React from "react";
import LoginSignUp from "../components/login-signUp/login-signUp";
import style from "../styles/signup/signup.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Signup () {
    return (
      <LoginSignUp
        pageHeader={<PageHeader />}
        form={<PageForm />}
        illustrationBG={<PageIllustration />}
      />
    );
}

const PageHeader: React.FC = () => {
  return (
    <>
      <Head>
        <title>SignUp | YouDesign</title>
        <meta property="og:login" content="Login to YouDesin" key="login" />
      </Head>
      <h3 className="fw-lighter">
        Join Africa’s largest Creative Design platform
      </h3>
      <div className="dark-font-color">
        Already have an account?{" "}
        <span className="link-danger">
          <Link href="/login">
            <a>Log in</a>
          </Link>
        </span>
      </div>
    </>
  );
};

const PageForm = () => {
  // HANDLE LOGIN
  const handleSignUp = (e: any) => {
    e.preventDefault();
    // console.log("HANLING CLICKERS");
  };

  return (
    <>
      <div className="mt-4 font-small">
        <label htmlFor="name" className="mb-2 fw-light">
          Name
        </label>
        <input type="text" className="form-control __form" name="name" />
      </div>

      <div className="mt-4 font-small">
        <label htmlFor="email" className="mb-2 fw-light">
          Email
        </label>
        <input type="email" className="form-control __form" name="email" />
      </div>

      {/* <div className="form-check font-small mt-3 d-flex justify-content-between">
        <div>
          <input
            type="checkbox"
            name="rememberMe"
            className="form-check-input"
            id="rememberMe"
          />
          <label htmlFor="rememberMe" className="form-check-label ms-2">
            Remember Me
          </label>
        </div>
        <div>
          <span className="link-danger">
            <a href="/">Forgot password?</a>
          </span>
        </div>
      </div> */}

      <div className="mt-4">
        <button className={`btn ${style.btnSuccess}`} onClick={handleSignUp}>
          Join
        </button>
      </div>
    </>
  );
};

const PageIllustration = () => {
  return (
    <>
      <div
        className={`d-none d-lg-block col-8 position-relative p-0 ${style.signupBg}`}
      >
        <div className={style.overlay}></div>
        <div className="overlay-text">
          Design creates culture. Culture shapes values. Values determine the
          future.
          <div className="author">— Robert L. Peters, designer and author</div>
        </div>
      </div>
    </>
  );
};