import React, { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const bg = useColorModeValue("white", "rgb(26	32	44)");
  const color = useColorModeValue("black", "white");

  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <Box
        bg={bg}
        color={color}
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
        {" "}
        <Box bg={bg} color={color} pb={4} id="hi">
          <Link to={"/contact"}>
            <Text>Hi, nice to meet you !</Text>
          </Link>
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
                My Name is{" "}
                <Link to="/about">
                  <span id="denis-rysavy" className="span">
                    Denis Rysavy
                  </span>
                </Link>
                ,
              </Text>
              <Text pb={6}>
                I am a <span className="span">Fullstack Web Developer</span>.{" "}
              </Text>
            </Box>
            <Box mb={16}>
              <Text pt={0}>
                <Link to="/">
                  <span id="home">Welcome </span>
                </Link>
                to my Online Portfolio ! <br />
              </Text>
              <br />
              <Text>
                On this Website you can{" "}
                <Link id="about-link" color={"yellow"} to={"/projects"}>
                  <span id="projects">Take a look at some of my work</span>
                </Link>{" "}
                and{" "}
                <Link id="about-link" color={"yellow"} to={"/contact"}>
                  <span>Contact me</span>
                </Link>{" "}
                if you need help with anything Software related.
              </Text>
            </Box>
            <Text mb={31} p={3}>
              Find out more{" "}
              <Link to={"/about"}>
                <span id="about-me">About me</span>.
              </Link>
            </Text>
            <Text mt={20} mb={"20vh"} p={2}>
              <span id="thank-you">Thank you </span>for visiting my Website !{" "}
              <br />
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
