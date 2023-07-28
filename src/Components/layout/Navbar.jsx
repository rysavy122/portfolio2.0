import React from 'react';
import MainNavigation from '../navigation/MainNavigation';
import { Box } from '@chakra-ui/react';
import '../layout/navbar.css';




const Navbar = () => {
  return (
    <>
    <MainNavigation />
    <Box h={'200px'} />
    </>
  )
}

export default Navbar