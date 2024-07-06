import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
import { error } from "../assets/icons/logo";

function ErrorPage() {
  return (
    <div className="err-container">
      <div className="err-content">
        <div className="err-title">
          <h1>404-Page Not </h1>
          <img src={error} alt="error" />
        </div>
        <p>
          Sorry, the page you are looking for does not exist. Please check the
          URL or return to the <Link to={"/"}>Home Page</Link>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
