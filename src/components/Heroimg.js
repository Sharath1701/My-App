import "./Heroimgstyle.css"

import React from 'react'
import Introimg from "../assets/felix-besombes-EzrHLVd83h0-unsplash.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={Introimg} alt="Introimg"/>
        </div>
        <div className="Content">
          <p>Hello! I'm A Full Stack Developer</p>
          <h1>React Developer</h1>
          <div>
            <Link to="/project" className="btn">Project</Link>
            <Link to="/contect" className="btn btn-lite">Contect</Link> 
          </div>
        </div>
    </div>
  )
}

export default Heroimg;