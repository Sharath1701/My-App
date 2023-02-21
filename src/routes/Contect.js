import React from 'react';

import Footer from '../components/Footer';
import Form from '../components/Form';
import Heroimg2 from '../components/Heroimg2';
import Navbar from '../components/Navbar';

const Contect = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="Contect" text="Let's Have a Chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contect;