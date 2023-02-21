import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import "./Footerstyle.css";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='Left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>123 Housing Society.</p>
                            <p>Chennai.</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />1-2345-6789</h4>
                    </div>
                    <div className='e-mail'>
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />@gmail.com</h4>
                    </div>
                </div>
                <div className='Right'>
                    <h4>About the Company</h4>
                    <p>Advance UX&UI designer. user Experience & user Interface designer, solving problems through innovative approach. New product thinking designing and user based on research designer.</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer