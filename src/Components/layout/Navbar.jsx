import React from 'react';
import MainNavigation from '../navigation/MainNavigation';
import '../layout/navbar.css';
import { position } from '@chakra-ui/react';


const Navbar = () => {
  return (
    <>
    <MainNavigation  />
    <div style={{height:"200px"}}></div>
    </>
  )
}

export default Navbar