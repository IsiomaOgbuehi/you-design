import React from "react";
import LoginSignUp from "../components/login-signUp/login-signUp";
import style from "../styles/login/login.module.css";
import Link from 'next/link';
import Head from 'next/head';

export default function Login() {

  return <LoginSignUp 
          pageHeader={<PageHeader />} 
          form={<PageForm />} 
          illustrationBG={<PageIllustration />}
          />;
}

const PageHeader: React.FC = () => {
  return (
    <>
    <Head>
      <title>Login | YouDesign</title>
      <meta property="og:login" content="Login to YouDesin" key="login" />
    </Head>
      <span className="font-large fw-bold">Log In</span>
      <div>
        {`Don't`} have an account?{" "}
        <span className="link-danger">
          <Link href="/signup">Sign Up here</Link>
        </span>
      </div>
    </>
  );
}

const PageForm = () => {
  // HANDLE LOGIN
  const handleLogin = (e: any) => {
    e.preventDefault();
    // console.log("HANLING CLICKERS");
  };

  return (
    <>
      <div className="mt-4 font-small">
        <label htmlFor="email" className="mb-2 fw-light">
          Email
        </label>
        <input type="email" className="form-control __form" name="email" />
      </div>

      <div className="mt-4 font-small">
        <label htmlFor="password" className="mb-2 fw-light">
          Password
        </label>
        <input
          type="password"
          className="form-control __form"
          name="password"
        />
      </div>

      <div className="form-check font-small mt-3 d-flex justify-content-between">
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
          <Link href="/">
            Forgot password?
          </Link>
          </span>
        </div>
      </div>

      <div className="mt-4">
        <button className={`btn ${style.btnSuccess}`} onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </>
  );
}

const PageIllustration = () => {
  return (
    <>
      <div className={`d-none d-lg-block col-8 position-relative p-0 ${style.loginBg}`}>
        <div className={style.overlay}></div>
        <div className="overlay-text">
          The function of Design is letting design function.
          <div className="author">- Micha Commeren, designer</div>
        </div>
      </div>
    </>
  );
}