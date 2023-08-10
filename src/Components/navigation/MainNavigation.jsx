import React from "react";
import { NavLink } from "react-router-dom";
import AboutIcon from "../assets/icons/MainNavIcons/AboutIcon";
import HomeIcon from "../assets/icons/MainNavIcons/HomeIcon";
import ContactIcon from "../assets/icons/MainNavIcons/ContactIcon";
import ProjectIcon from "../assets/icons/MainNavIcons/ProjectIcon";
import { Box } from "@chakra-ui/layout";
import { Button, useColorMode } from "@chakra-ui/react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import "../layout/navbar.css";

const MainNavigation = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box id={"sidenav"}>
        <NavLink as={NavLink} to="/" className="link">
          <HomeIcon />
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
          _hover={{ bg: "yellow", color: "black", border: "1px solid black" }}
          p={"0px 0px"}
          color={"yellow"}
          bg={"black"}
          id="toggle-themes-btn"
          leftIcon={ colorMode === 'light' ? <MdOutlineLightMode /> :<MdOutlineDarkMode />}
          variant="outline">
          </Button>
      </Box>
    </>
  );
};

export default MainNavigation;
