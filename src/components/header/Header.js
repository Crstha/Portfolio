import React, { useState } from "react";
import "./Header.css";

const Header = () => {
/* =======================Change Background Header ============================ */

  window.addEventListener("scroll",function(){
    const header = this.document.querySelector(".header");
    // when the scroll is higher than 200 viewport height, add the show-header class to a tag with the header tag
    if(this.scrollY>=80)header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
})

/* =======================Toggle Menu============================ */
    const [toggleMenu, showToggleMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home"); 

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Subarna
        </a>
        <div className={toggleMenu ? "nav__menu show-menu":"nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav ==="#home" ? "nav__link active-link" :"nav__link"}>
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" onClick={()=>setActiveNav('#home')} className={activeNav ==="#about" ? "nav__link active-link" :"nav__link"}>
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav ==="#skills" ? "nav__link active-link" :"nav__link"}>
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav ==="#services" ? "nav__link active-link" :"nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav ==="#portfolio" ? "nav__link active-link" :"nav__link"}>
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav ==="#contact" ? "nav__link active-link" :"nav__link"}>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i class="uil uil-times nav__close" onClick={()=>(showToggleMenu(!toggleMenu))}></i>
        </div>
          
          <div className="nav__toggle" onClick={()=>(showToggleMenu(!toggleMenu))}>
          <i class="uil uil-apps"></i>
          </div>
      </nav>
    </header>
  );
};

export default Header;
