import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">
          <img
            src="https://preclinic.dreamstechnologies.com/html/template/assets/img/logo.png"
            className="img"
            width="35"
            height="35"
            alt=""
          />{" "}
          <span>Pre Clinic</span>
        </div>
      </div>

      <a id="toggle_btn">
        <img
          src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/bar-icon.svg"
          alt=""
          className="img"
        />
      </a>

      <div className="top-nav-search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search here"
          />
          <a className="btn">
            <img
              src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/search-normal.svg"
              className="img"
              alt=""
            />
          </a>
        </form>
      </div>

      <ul className="nav user-menu float-end flex-wrap flex">
        <li className="nav-item dropdown">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-bs-toggle="dropdown"
          >
            <img src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/note-icon-02.svg" />
            {/* <span className="pulse"></span>{" "} */}
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            href="#"
            className="dropdown-toggle nav-link "
            data-bs-toggle="dropdown"
          >
            <img src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/note-icon-01.svg" />
            {/* <span className="pulse"></span>{" "} */}
          </a>
        </li>
        <li className="nav-item dropdown has-arrow user-profile-list">
          <a
            href="#"
            className="dropdown-toggle nav-link user-link"
            data-bs-toggle="dropdown"
          >
            <div className="user-names">
              <h5>Liam Michael </h5>
              <span>Admin</span>
            </div>
            <span className="user-img">
              <img
                src="https://preclinic.dreamstechnologies.com/html/template/assets/img/user-06.jpg"
                width="40"
                height="40"
                alt="Admin"
              />
            </span>
          </a>
        </li>
        <li className="nav-item ">
          <a href="settings.html" className="hasnotifications nav-link">
            <img
              src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/setting-icon-01.svg"
              alt=""
            />{" "}
          </a>
        </li>
      </ul>
      {/* icon */}
      {/* icon */}

      {/* icon */}
    </div>
  );
}
