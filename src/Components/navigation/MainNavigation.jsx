import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import HomeIcon from "../assets/icons/MainNavIcons/HomeIcon";
import AboutIcon from "../assets/icons/MainNavIcons/AboutIcon";
import ContactIcon from "../assets/icons/MainNavIcons/ContactIcon";
import ProjectIcon from "../assets/icons/MainNavIcons/ProjectIcon";

import "../layout/navbar.css";

const MainNavigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("black", "yellow");
  const color = useColorModeValue("yellow", "black");

  return (
    <Box id={"sidenav"}>
      <NavLink to="/" className={"navlink"}>
        <HomeIcon />
      </NavLink>
      <NavLink to="/About" className={"navlink"}>
        <AboutIcon />
      </NavLink>
      <NavLink to="/Projects" className={"navlink"}>
        <ProjectIcon />
      </NavLink>
      <NavLink to="/Contact" className={"navlink"}>
        <ContactIcon />
      </NavLink>
      <Button
        onClick={toggleColorMode}
        _hover={colorMode === "light" ? { bg: "yellow", color: "black", border: "1px solid black" } : { bg: "black", color: "yellow", border: "1px solid white" }}
        p={"0px 0px"}
        color={color}
        bg={bg}
        id="toggle-themes-btn"
        leftIcon={colorMode === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        variant="outline"
      />
    </Box>
  );
};

export default MainNavigation;
