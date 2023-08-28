import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useColorModeValue } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
  const bg = useColorModeValue("white", "black");
  const color = useColorModeValue("black", "white");

  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <Box
        id="container-home"
        css={{
          "@media (min-width: 768px)": {
            transform: `translateY(${isVisible ? "-80vh" : "0"})`,
            transition: "transform 500ms ease-in-out",
          },
          "@media (max-width: 568px)": {
            transform: `translateY(${isVisible ? "-70vh" : "0"})`,
            transition: "transform 500ms ease-in-out",
          },
        }}>
        <Box bg={bg} pb={4} id="hi">
          <Text>
            <Link to={"/contact"}>{t("home.hi")}</Link>
          </Text>
        </Box>
        <Box bg={color} onClick={handleClick} id="more" title="click me"></Box>
        <Box id="spacer" />
        <Box
          id="box-hidden"
          style={{
            transform: `opacity(${isVisible ? "1" : "0"})`,
            transition: "transform 500ms ease-in-out",
            display: isVisible ? "block" : "none",
          }}>
          <Box id="intro">
            <Box mb={8}>
              <Text>
                {t("home.introName")}
                <Link to="/about">
                  <span id="denis-rysavy" className="span">
                    Denis Rysavy
                  </span>
                </Link>
                ,
              </Text>
              <Text pb={6}>{t("home.devRole")}</Text>
            </Box>
            <Box mb={16}>
              <Text pt={0}>
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                  {t("home.welcome")}
                </Text>
                <br />
              </Text>
              <br />
              <Text>
                {t("home.workLink")}
                <Link id="about-link" color={"yellow"} to={"/projects"}>
                  <span id="projects">{t("home.workText")}</span>
                </Link>
                {t("home.and")}
                <Link id="about-link" color={"yellow"} to={"/contact"}>
                  <span>{t("home.contact")}</span>
                </Link>
                <br />
                {t("home.help")}
              </Text>
            </Box>
            <Text mb={31}>
              {t("home.findOut")}
              <Link to={"/about"}>
                <span id="about-me">{t("home.aboutMe")}</span>.
              </Link>
            </Text>
            <Text mt={20} mb={"20vh"}>
              <span id="thank-you">{t("home.thankYou")}</span>
              <br />
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
