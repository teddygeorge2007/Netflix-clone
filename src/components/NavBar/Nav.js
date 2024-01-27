import React, { useEffect, useState } from 'react'
import './Nav.css'
import logo from "./image/net.png";


function Nav() {
    const [show, handleShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleShow]);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      {/* <h3 className="top">Netflix</h3> */}
      <img className="nav_logo" src={logo} alt="" />

      <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix avatar" />
    </div>
  )
}

export default Nav