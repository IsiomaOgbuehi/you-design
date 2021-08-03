import React, { useState } from "react";
import LoginSignUp from "../components/login-signUp/login-signUp";
import style from "../styles/signup/signup.module.css";
import Link from "next/link";
import Head from "next/head";
import togglePassword from "../hooks/togglePassword";
import { useRouter } from "next/router";
import { useForm } from "../hooks/useForm";
import { IoWarning } from "react-icons/io5";
import client from "../lib/apollo/apollo-client";
import {
  SIGNUP_FREELANCER_MUTATION,
  SIGNUP_CLIENT_MUTATION,
} from "../components/login-signUp/mutations";
import { useMutation } from "@apollo/client";


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
  const [onBlur, setOnBlur] = useState(false);
  const [PasswordType, Icon] = togglePassword();
  // GET QUERY PARAMS
  const router = useRouter();
  const {
    query: { accountType },
  } = router;

  const [formValues, handleChange] = useForm({
    email: "",
    password: "",
    emailError: false,
    accountType: ""
  });
  
  // HANDLE LOGIN
  const handleSignUp = (e: any) => {
    e.preventDefault();
    // console.log("HANDLING CLICKERS");
    const {email, password} = formValues;
    const userAccountType = accountType !== undefined ? accountType : formValues.accountType;
    if(email === "" || password === "" || userAccountType === "") {
      return;
    }
    console.log(userAccountType);
    new Promise((resolve, reject) => {
      if(userAccountType === "Freelancer"){
        try{
          const query = createFreelancer();
          resolve(query);
        } catch(err){
          reject(err);
        }
      }
      if(userAccountType === "Client"){
        try{
          const query = createClient();
          resolve(query);
        } catch(err){
          reject(err);
        }
      }
    })
    .then((result: any) => {
      console.log(result.data);
    })
    .catch((error) => {
      console.log(error.message);
    })
    
    
  };

  const handleOnBlur = () => {
    if(!onBlur){
      setOnBlur(true);
    }
  }

  const [createFreelancer] = useMutation(SIGNUP_FREELANCER_MUTATION, {
    variables: {
      accountType: accountType !== undefined ? accountType : formValues.accountType,
      email: formValues.email,
      password: formValues.password
    },
  });

  const [createClient] = useMutation(SIGNUP_CLIENT_MUTATION, {
    variables: {
      accountType:
        accountType !== undefined ? accountType : formValues.accountType,
      email: formValues.email,
      password: formValues.password,
    },
  });

  return (
    <>
      <div
        className={`mt-4 ${accountType === undefined ? "d-block" : "d-none"}`}
      >
        <div className="form-check">
          <div className="d-inline-block me-5">
            <input
              className={`form-check-input ${style.formCheckInput}`}
              type="radio"
              name="accountType"
              id="freelancer"
              value="Freelancer"
              onChange={handleChange}
              // defaultChecked
            />
            <label className="form-check-label" htmlFor="freelancer">
              Freelancer
            </label>
          </div>

          <div className="d-inline-block">
            <input
              className={`form-check-input ${style.formCheckInput}`}
              type="radio"
              name="accountType"
              id="client"
              onChange={handleChange}
              value="Client"
            />
            <label className="form-check-label" htmlFor="client">
              Client
            </label>
          </div>
        </div>
        <div className={`text-danger font-small`}>
          <span
            className={`${
              formValues.accountType !== "" ? "d-none" : "d-block"
            }`}
          >
            {/* <IoWarning /> */}
            Select An Account Type
          </span>
        </div>
      </div>
      <div className="mt-4 font-small">
        <label htmlFor="email" className="mb-2 fw-light">
          Email
        </label>
        <input
          type="email"
          className="form-control __form"
          name="email"
          id="email"
          onChange={handleChange}
          value={formValues.email}
          onBlur={handleOnBlur}
        />
        <div className={`font-small text-danger ${style.errorText}`}>
          <span
            className={`${
              formValues.emailError && onBlur ? "d-block" : "d-none"
            }`}
          >
            <IoWarning />
            Wrong Email Address
          </span>
        </div>
      </div>

      <div className="mt-4 font-small position-relative">
        <label htmlFor="password" className="mb-2 fw-light">
          Password
        </label>
        <input
          type={PasswordType}
          className="form-control __form pe-5"
          name="password"
          id="password"
          onChange={handleChange}
          value={formValues.password}
        />
        <div className={style.passwordToggle}>{Icon}</div>
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