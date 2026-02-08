import React from "react";
import { NavLink, Link, useLocation,useNavigate} from "react-router-dom";
import logo from "../assets/logog.png";
import "../styles/Navbar.css";
import loginLogo from "../assets/loginlogo.png";
function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const pathName=location.pathname
  const authenticated = localStorage.getItem("loggedin")
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
    navigate("/")
  }
  return (
    <nav className="main-nav">
      <NavLink to="/">
        <img src={logo} alt="homePage" className="logo-img" />
      </NavLink>
      <NavLink to="/host" className="end">
        Host
      </NavLink>
      <NavLink to="/about" className="end">
        About
      </NavLink>
      <NavLink to="/vans" className="end">
        Vans
      </NavLink>
      {!authenticated?(<Link to="login" className="login-link">
        <img src={loginLogo} className="login-icon" />
      </Link>):
      (<button className="tooltip-btn" onClick={fakeLogOut}>X
        <span className="tooltip-text">logout</span>
      </button>)}
    </nav>
  );
}

export default Navbar;
