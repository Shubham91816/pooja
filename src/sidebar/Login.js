
import React, { useState } from "react";
import User from '../assets/login.png';
import Clinic from "../assets/login-logo.png";
import Google from "../assets/login-icon-01.svg";
import Facebook from "../assets/login-icon-02.svg";
import Twitter from "../assets/login-icon-03.svg";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
   
    const handlechange =()=>{
        console.log("handle change called");
        navigate("/MainWrapper");
    }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container-fluid px-0">
      <div className="row">
        <div className="col-lg-6 login-wrap">
          <div className="log-img">
            <img class="img-fluid" src={User} alt="Logo" />
          </div>
        </div>
        <div className="col-lg-6 login-wrap-bg">
          <div className="login-wrapper">
            <div className="loginbox">
              <div className="login-right">
                <div className="account-logo">
                  <img src={Clinic} alt="" />
                </div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label>
                      Email <span className="login-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="input-block">
                    <label>
                      Password <span className="login-danger">*</span>
                    </label>
                    <input
                      className="form-control pass-input"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <span className="profile-views feather-eye-off toggle-password"></span>
                  </div>
                  <div className="forgotpass">
                    <div className="remember-me">
                      <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                        Remember me
                        <input
                          className="inputCheckbox"
                          type="checkbox"
                          name="radio"
                          checked={rememberMe}
                          onChange={handleRememberMeChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <Link to="/">Forgot Password?</Link>
                  </div>
                  
                  <div className="input-block login-btn">
                    <button className="btn btn-primary btn-block" type="submit" onClick={handlechange}>
                      Login
                    </button>
                  </div>
                  
                  
                </form>
                <div className="next-sign">
                  <p className="account-subtitle">
                    Need an account? <Link to="/">Sign Up</Link>
                  </p>
                  <div className="social-login">
                    <Link to="/">
                      <img src={Google} alt="" />
                    </Link>
                    <Link to="/">
                      <img src={Facebook} alt="" />
                    </Link>
                    <Link to="/">
                      <img src={Twitter} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
