import React from "react";
import "./Main.css";


const Main = ({ setCurrentPage }) => {
  return (
  
    <nav className="main-bar">
    
      <ul className="page">
        <li>
      
          <a href="#"  onClick={() => setCurrentPage("home")}>Home</a>
        </li>
        <li>
          <a href="#" onClick={() => setCurrentPage("about")}>About</a>
        </li>
        <li>
          <a href="#" onClick={() => setCurrentPage("services")}>Services</a >
        </li>
        <li>
          <a href="#" onClick={() => setCurrentPage("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
         
  );
};

export default Main;