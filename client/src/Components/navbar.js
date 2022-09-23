//add imports

import React from "react";
import "bootstrap/dist/css/bootstrap.css"; 
import { Link } from "react-router-dom";
 

export default function Navbar() {
  return (
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <Link class="navbar-brand" to="/">Inventory App Home</Link>
      </div>
    </div>
    </nav>
  )};