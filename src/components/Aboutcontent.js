import "../components/Aboutcontentstyle.css"
import React01 from "../assets/711.jpg"
import React02 from "../assets/971.jpg"


import React from 'react'
import { Link } from "react-router-dom"

const Aboutcontent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I ?</h1>
                <p>Lorem ipsum is placeholder text commonly used in the graphic,</p>
                <div>
                    <Link to="/contect">
                        <button className="btn">Contect</button>
                    </Link>
                </div>
            </div>
            <div className="right">
                <div className="image-container">
                    <div className="img-stack top">
                        <img src={React01} className="img" alt=""/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={React02} className="img" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutcontent