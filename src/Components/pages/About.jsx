import React from "react";
import rysavy from "../../../public/rysavy-removebg-preview.png";
import { Text, Box } from "@chakra-ui/layout";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import HtmlIcon from "../assets/icons/TechnologiesIcons/HtmlIcon";
import CssIcon from "../assets/icons/TechnologiesIcons/CSSIcon";
import JsIcon from "../assets/icons/TechnologiesIcons/JsIcon";
import ReactIcon from "../assets/icons/TechnologiesIcons/ReactIcon";
import NodeIcon from "../assets/icons/TechnologiesIcons/NodeIcon";
import ExpressIcon from "../assets/icons/TechnologiesIcons/ExpressIcon";
import PostgresqlIcon from "../assets/icons/TechnologiesIcons/PostgresqlIcon";
import GitIcon from "../assets/icons/TechnologiesIcons/GitIcon";
import MongoDbIcon from "../assets/icons/TechnologiesIcons/MongoDbIcon";
import VisualStudioIcon from "../assets/icons/TechnologiesIcons/VisualStudioIcon";

import { SlEye, SlHeart, SlBubbles } from "react-icons/sl";
import { BsBraces } from "react-icons/bs";

import "./about.css";

const About = () => {
  return (
    <>
      <Box id="about-page">
        <Text id="about-h1" fontSize="6xl">
          Who I am ...
        </Text>
        <img src={rysavy}></img>
        <Text className="about-text" fontSize="1xl">
          <Text
            p={5}
            w={"100vw"}
            mt={"-5vh"}
            mb={"7vh"}
            bg={"white"}
            fontSize={"3xl"}>
            ... I am <span style={{ fontSize: "1em" }}>Denis Rysavy</span>.
          </Text>
          <Text p={5} w={"100vw"} mb={"7vh"} bg={"white"}>
            A 27 years old <span>fullstack developer</span> living in{" "}
            <span>Hamburg, Germany</span>.{" "}
          </Text>
          <Text p={5} mb={"7vh"} bg={"white"}>
            I love <b>music</b>, <b>art</b> in general, <b>cats</b>,{" "}
            <b>science</b>, <b>technology</b>, <b>math</b>, <b>coding</b> and
            much more.
          </Text>
          <Text p={5} w={"100vw"} mb={"7vh"} bg={"white"}>
            As a fullstack software developer I am capable of covering the full
            range of technology between <span>frontend and backend </span>
            development. I have a big passion for <span>UI & UX </span>
            principles and love clean and user friendly layouts. I am also
            capable of handling <span>server side </span>operations, for example
            setting up and running different kinds of servers, creating and
            connecting to different kinds of <span>databases</span> to handle a
            variety of tasks from password protected login and signup
            functionality to shopping systems or user dashboards where the user
            can create data, read data, update data or delete data, so called{" "}
            <span>CRUD</span> operations, just to name a few.
          </Text>
          <Text p={5} w={"100vw"} mb={"7vh"} bg={"white"}>
            As a Programmer I am a <span>problem solver</span>, tell me whats
            the issue and I will find a solution !
          </Text>
        </Text>
      </Box>
      <br />
      {/*       <Text className="text-values3">My Qualities</Text>
      <Box className="box-values">
        <Box className="box-values-header">
          <SlHeart />
          <h1>Made with love</h1>
        </Box>
        <Box className="box-values-header">
          <BsBraces />
          <h1>Passion for coding</h1>
        </Box>
        <Box className="box-values-header">
          <SlBubbles />
          <h1>Open for Dialogues</h1>
        </Box>
        <Box className="box-values-header">
          <SlEye />
          <h1>Eye for the Detail</h1>
        </Box>
      </Box> */}
      <Box className="tech-stack-container">
        <Text
          bg={"white"}
          pt={"6vh"}
          pb={"10vh"}
          mb={200}
          mt={60}
          fontSize="6xl">
          My Skillset
        </Text>
        <Text pt={1} pb={1} mt={20} fontSize="4xl" mb="8vh">
          Frontend TechStack
        </Text>
        <Box bg={"white"}>
          <CircularProgress
            className="tech-stack"
            mr={5}
            size="120px"
            value={92}
            color="yellow"
            thickness="8px">
            <CircularProgressLabel>
              <HtmlIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                HTML 5
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            className="tech-stack"
            mr={5}
            size="120px"
            value={96}
            color="yellow"
            thickness="8px">
            <CircularProgressLabel>
              <CssIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                CSS 3
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            className="tech-stack"
            mr={5}
            size="120px"
            value={60}
            color="yellow"
            thickness="8px">
            <CircularProgressLabel>
              <JsIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                JavaScript
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            className="tech-stack"
            mr={5}
            size="120px"
            value={80}
            color="yellow"
            thickness="8px">
            <CircularProgressLabel>
              {" "}
              <ReactIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                React
              </Text>{" "}
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Text mt={20} fontSize="4xl" mb="8vh">
          Backend TechStack
        </Text>
        <Box bg={"white"}>
          <CircularProgress
            mr={5}
            size="120px"
            value={30}
            color="yellow.400"
            thickness="8px">
            <CircularProgressLabel>
              {" "}
              <NodeIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                Node.js
              </Text>{" "}
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            mr={5}
            size="120px"
            value={55}
            color="yellow.400"
            thickness="8px">
            <CircularProgressLabel>
              {" "}
              <ExpressIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                express.js
              </Text>{" "}
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            mr={5}
            size="120px"
            value={60}
            color="yellow.400"
            thickness="8px">
            <CircularProgressLabel>
              {" "}
              <PostgresqlIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                Postgresql
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            mr={5}
            size="120px"
            value={36}
            color="yellow.400"
            thickness="8px">
            <CircularProgressLabel>
              {" "}
              <MongoDbIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                MongoDB
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Text bg={"white"} mt={20} fontSize="4xl" mb="8vh">
          Version Control and Code Editor
        </Text>
        <Box mb={20} bg={"white"}>
          <CircularProgress
            mr={5}
            size="120px"
            value={86}
            color="yellow.600"
            thickness="8px">
            <CircularProgressLabel>
              {" "}
              <GitIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                Git
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            mr={5}
            size="120px"
            value={90}
            color="yellow.600"
            thickness="8px">
            <CircularProgressLabel>
              {" "}
              <VisualStudioIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                VS Code
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Box>
    </>
  );
};

export default About;
