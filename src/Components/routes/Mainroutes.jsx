import React from 'react'
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import {Routes, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';




export default function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
     
  );
}