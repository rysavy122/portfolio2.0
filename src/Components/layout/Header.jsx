import React from 'react'
import { useColorModeValue, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";


import './header.css';

const Header = () => {
  const { t } = useTranslation();
  const bg = useColorModeValue("white", "rgb(26	32	44)");
  const color = useColorModeValue("black", "blue.700");

  return (
    <Box color={color} id="logo1">
      <br />
      <h1>rysavy</h1>
      <h2>FULLSTACK {t("header.developer")}</h2>
      <br />
    </Box>
  )
}

export default Header