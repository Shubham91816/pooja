import React from "react";
import { useState } from "react";
import "./sidebar.css";
import { Link,BrowserRouter } from "react-router-dom";
import {
  FaChevronRight,
} from "react-icons/fa6";
import Login from "./Login";
export default function SideBar() {
  const [isListVisible, setListVisibility] = useState(false);
  const [DocVisible, setDocVisibility] = useState(false);
  const [PatientVisible, setPatVisibility] = useState(false);
  const [StaffVisible, setStaffVisibility] = useState(false);
  const handleIconClick = () => {
    setListVisibility(!isListVisible);
  };
  const handleDocClick = () => {
    setDocVisibility(!DocVisible);
  };
  const handlePatClick = () => {
    setPatVisibility(!PatientVisible);
  };
  const handleStaffClick = () => {
    setStaffVisibility(!StaffVisible);
  };
  return (
    <div className="sidebar" id="idebar">
      
      <div className="slimScrollDiv">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">Main</li>
            <li className="submenu">
              <Link to="#" className="active subdrop">
                <span className="menu-side">
                  <img
                    src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/menu-icon-01.svg"
                    alt=""
                  />
                </span>
                <span id="dash"> Dashboard </span>{" "}
                <Link>
                <span>
                  <FaChevronRight className="menu-arrow" onClick={handleIconClick}/>
                </span>
                </Link>  
              </Link>
              <ul className={isListVisible ? 'show-list' : 'hide-list'}>
                <li>
                  <Link className="active" to="../MainWrapper/Home/Main.js">
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="">Doctor Dashboard</Link>
                </li>
                <li>
                  <Link to="">Patient Dashboard</Link>
                </li>
              </ul>
            </li>
            <li className="submenu">
            
             <Link to="#">
                <span className="menu-side">
                  <img
                    src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/menu-icon-02.svg"
                    alt=""
                  />
                </span>{" "}
                <span> Doctors </span> <span><FaChevronRight className="menu-arrow" onClick={handleDocClick} /></span>
              </Link>
             
              <ul className={DocVisible ? 'show-list' : 'hide-list'}>
                <li>
                  <Link to="">Doctor List</Link>
                </li>
                <li>
                  <Link to="">Add Doctor</Link>
                </li>
                <li>
                  <Link to="">Edit Doctor</Link>
                </li>
                <li>
                  <Link to="">Doctor Profile</Link>
                </li>
              </ul>
          
            </li>
            <li className="submenu">
              <Link to="#">
                <span className="menu-side">
                  <img
                    src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/menu-icon-03.svg"
                    alt=""
                  />
                </span>{" "}
                <span>Patients </span> <span><FaChevronRight className="menu-arrow" onClick={handlePatClick}/></span>
              </Link>
              <ul className={PatientVisible ? 'show-list' : 'hide-list'}>
                <li>
                  <Link to="">Patients List</Link>
                </li>
                <li>
                  <Link to="">Add Patients</Link>
                </li>
                <li>
                  <Link to="">Edit Patients</Link>
                </li>
                <li>
                  <Link to="">Patients Profile</Link>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <Link to="">
                <span className="menu-side">
                  <img
                    src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/menu-icon-08.svg"
                    alt=""
                  />
                </span>{" "}
                <span> Staff </span> <span><FaChevronRight className="menu-arrow" onClick={handleStaffClick}/></span>
              </Link>
              <ul className={StaffVisible ? 'show-list' : 'hide-list'}>
                <li>
                  <Link to="">Staff List</Link>
                </li>
                <li>
                  <Link to="">Add Staff</Link>
                </li>
                <li>
                  <Link to="">Staff Profile</Link>
                </li>
                <li>
                  <Link to="">Leaves</Link>
                </li>
                <li>
                  <Link to="">Holidays</Link>
                </li>
                <li>
                  <Link to="">Attendance</Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="logout-btn">
            <Link to='/Login'>
              <span className="menu-side">
                <img
                  src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/logout.svg"
                  alt=""
                />
              </span>{" "}
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
     
    </div>
  );
}
