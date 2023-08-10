import React from "react";
import { NavLink } from "react-router-dom";
import AboutIcon from "../assets/icons/MainNavIcons/AboutIcon";
import HomeIcon from "../assets/icons/MainNavIcons/HomeIcon";
import ContactIcon from "../assets/icons/MainNavIcons/ContactIcon";
import ProjectIcon from "../assets/icons/MainNavIcons/ProjectIcon";
import { Box } from "@chakra-ui/layout";
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import "../layout/navbar.css";

const MainNavigation = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue("black", "yellow");
  const color = useColorModeValue("yellow", "black");

  return (
    <>
      <Box id={"sidenav"}>
        <NavLink as={NavLink} to="/" className="link">
          <HomeIcon/>
        </NavLink>
        <NavLink as={NavLink} to="/About" className="link">
          <AboutIcon />
        </NavLink>
        <NavLink as={NavLink} to="/Projects" className="link">
          <ProjectIcon />
        </NavLink>
        <NavLink as={NavLink} to="/Contact" className="link">
          <ContactIcon />
        </NavLink>
        <Button
          onClick={toggleColorMode}
          _hover={ colorMode ==='light' ? {bg: "yellow", color: "black", border: "1px solid black" } : {bg: "black", color: "yellow", border: "1px solid white" }}
          p={"0px 0px"}
          color={color}
          bg={bg}
          id="toggle-themes-btn"
          leftIcon={ colorMode === 'light' ? <MdOutlineDarkMode /> :<MdOutlineLightMode />}
          variant="outline">
          </Button>
      </Box>
    </>
  );
};

export default MainNavigation;
