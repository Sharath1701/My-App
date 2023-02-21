import React from 'react';
import Aboutcontent from '../components/Aboutcontent';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="About" text="I'm Full-Stack Developer"/>
      <Aboutcontent/>
      <Footer/>
    </div>
  )
}

export default About;