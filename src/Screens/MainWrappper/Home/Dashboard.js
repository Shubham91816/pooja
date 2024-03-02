import React from "react";
import "./Dashboard.css";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownRight } from "react-icons/go";

const Dashboard = () => {
  return (
    <div className="divcontent">
      {/* FIRSTBOX */}
      <div className="dash-widget">
        <div className="dash-boxs">
          <img
            src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/calendar.svg"
            alt="appointment logo"
            className="appointment_logo"
          />
        </div>
        <div className="dash-content">
          <h4>Appointments</h4>
          <h2>
            <span>250</span>
          </h2>
          <p>
            <span className="passive-view">
              {" "}
              <MdArrowOutward /> 40%
            </span>{" "}
            <span>vs last month</span>
          </p>
        </div>
      </div>
      {/* SECOND BOX */}
      <div className="dash-widget">
        <div className="dash-boxs">
          <img
            src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/profile-add.svg"
            alt="appointment logo"
            className="appointment_logo"
          />
        </div>

        <div className="dash-content">
          <h4>New Patients</h4>
          <h2>
            <span>140</span>
          </h2>
          <p>
            <span className="passive-view">
              {" "}
              <MdArrowOutward /> 20%
            </span>{" "}
            <span>vs last month</span>
          </p>
        </div>
      </div>
      {/* THIRD BOX */}
      <div className="dash-widget">
        <div className="dash-boxs">
          <img
            src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/scissor.svg"
            alt="appointment logo"
            className="appointment_logo"
          />
        </div>

        <div className="dash-content">
          <h4>Operations</h4>
          <h2>
            <span>0</span>
          </h2>
          <p>
            <span className="active-view">
              {" "}
              <GoArrowDownRight /> 15%
            </span>{" "}
            <span>vs last month</span>
          </p>
        </div>
      </div>
      {/* FOURTH BOX */}
      <div className="dash-widget">
        <div className="dash-boxs">
          <img
            src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/empty-wallet.svg"
            alt="appointment logo"
            className="appointment_logo"
          />
        </div>

        <div className="dash-content">
          <h4>Earnings</h4>
          <h2>
            <span>$0</span>
          </h2>
          <p>
            <span className="passive-view">
              {" "}
              <MdArrowOutward /> 30%
            </span>{" "}
            <span>vs last month</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
