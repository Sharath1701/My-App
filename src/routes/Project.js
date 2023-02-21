import React from 'react';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="Project" text="Some of my most recent works"/>
      <Work/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Project;