import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { background__login, logo, owner__logo, user__logo } from "./import.js";

const Auth = () => {
  const [signup, setSignup] = React.useState(false);
  const [activeUser, setActiveUser] = React.useState(true);
  const [activeOwner, setActiveOwner] = React.useState(false);
  const [classNameUser, setClassnameUser] =
    React.useState("logo__image-border");
  const [classNameOwner, setClassnameOwner] = React.useState("logo__image");

  const borderOwner = () => {
    setActiveOwner(true);
    setActiveUser(false);
    setClassnameOwner("logo__image-border");
    setClassnameUser("logo__image");
    console.log(activeOwner);
    console.log(activeUser);
  };
  const borderUser = () => {
    setActiveOwner(false);
    setActiveUser(true);
    setClassnameUser("logo__image-border");
    setClassnameOwner("logo__image");
    console.log(activeOwner);
    console.log(activeUser);
  };
  return (
    <>
      <div className="auth__page">
        <div className="auth__page-logo-wrapper">
          <img src={background__login} className="auth__page-image" />
        </div>
        <div className="auth__content">
          <div className="signup__login__content">
            <div className="signup__content">
              <Link to="/" style={{ display: "flex", alignSelf: "flex-start" }}>
                <img
                  src={logo}
                  className="auth__page-logo-inner auth__page-logo"
                />
              </Link>
              <p className="text__1">{signup ? "Sign up" : "Log in"}</p>
              <div className="signup__content-logo">
                <div className="signup__content-logo-wrapper">
                  <img
                    src={owner__logo}
                    alt="owner-logo"
                    className={classNameOwner}
                    onClick={borderOwner}
                  />
                  Owner
                </div>
                <p className="text__2">OR</p>
                <div className="signup__content-logo-wrapper">
                  <img
                    src={user__logo}
                    alt="user-logo"
                    className={classNameUser}
                    onClick={borderUser}
                  />
                  User
                </div>
              </div>
              <div className="signup__content-logo-circle__container">
                <div
                  className={
                    activeOwner
                      ? "signup__content-logo-circle"
                      : "signup__content-logo-circle-blank"
                  }
                ></div>
                <div
                  className={
                    activeUser
                      ? "signup__content-logo-circle"
                      : "signup__content-logo-circle-blank"
                  }
                ></div>
              </div>
              <div className="signup__content-details">
                <input placeholder="Full Name" />
                <input placeholder="Email Address" />
                {signup && (
                  <input
                    placeholder={
                      activeOwner ? "Hostel Code" : "Enrollment Number"
                    }
                  />
                )}
                {signup && <input placeholder="Hostel Name" />}
                <input placeholder="Password" />
              </div>
              <div className="signup__createAccount-button">
                <button className="button">
                  {signup ? "Create Account" : "Log in"}
                </button>
              </div>
              <div className="signup__buttonto-login">
                <p>{signup ? "Already" : "Don't"} have an account?</p>
                <p
                  className="signup__button-login"
                  onClick={() => {
                    setSignup(!signup);
                  }}
                >
                  {signup ? "Log in" : "Signup"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
