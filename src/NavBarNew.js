import React from 'react'
import logo from "./Assets/logo.png";
export default function NavBarNew() {
  return (
    <div>
           <nav>
           <div className="container navbar-div">
          <img
            src={logo}
            style={{ height: "60px", width: "60px", objectFit: "contain" }}
          />
          <h1 className="text-light ml-2" href="#">
            Petaverse
          </h1>
          </div>
        <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Community</a></li>
        </ul>
    </nav>
    </div>
  )
}
