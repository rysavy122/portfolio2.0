import React from 'react'
import { NavLink } from 'react-router-dom';
import AboutIcon from '../assets/icons/MainNavIcons/AboutIcon';
import HomeIcon from '../assets/icons/MainNavIcons/HomeIcon';
import ContactIcon from '../assets/icons/MainNavIcons/ContactIcon';
import ProjectIcon from '../assets/icons/MainNavIcons/ProjectIcon';
import { Box } from '@chakra-ui/layout';
import '../layout/navbar.css';







const MainNavigation = () => {
  return (
    <Box  id={'sidenav'} mr={400}>
        <NavLink as={NavLink} to="/" className="link"><HomeIcon/></NavLink>
        <NavLink as={NavLink} to ="/About" className="link" ><AboutIcon /></NavLink>
        <NavLink as={NavLink} to="/Projects" className="link" ><ProjectIcon/></NavLink>
        <NavLink as={NavLink} to="/Contact" className="link" ><ContactIcon/></NavLink>
    </Box>  
    )
}

export default MainNavigation