import React from 'react'
import { useColorModeValue, Box } from "@chakra-ui/react";

import './header.css';

const Header = () => {
  const bg = useColorModeValue("white", "rgb(26	32	44)");
  const color = useColorModeValue("black", "black");

  return (
    <Box color={color} id="logo1">
      <br />
      <h1>rysavy</h1>
      <h2>FULLSTACK WEBDEVELOPER</h2>
      <br />
    </Box>
  )
}

export default Header