import React, {  useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";




function Navbar(){
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
//adding auth user name to navbar
 
  
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Inventory App
            <i className="fas fa-code"></i>
          </NavLink>
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
      
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/carsList"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Inventory
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/createNew"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Add Item
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/register"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
            );
}

export default Navbar;