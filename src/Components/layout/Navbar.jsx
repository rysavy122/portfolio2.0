import React from 'react';
import MainNavigation from '../navigation/MainNavigation';
import {MdOutlineLightMode} from 'react-icons/md';
import { Box } from '@chakra-ui/react';
import { position } from '@chakra-ui/react';

import '../layout/navbar.css';




const Navbar = () => {
  return (
    <>
    <MainNavigation  />
    <Box h={'200px'} />
    </>
  )
}

export default Navbar