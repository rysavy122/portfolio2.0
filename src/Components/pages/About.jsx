import React from "react";
import rysavy from "../../../public/rysavy-removebg-preview.png";
import HtmlIcon from "../assets/icons/TechnologiesIcons/HtmlIcon";
import CssIcon from "../assets/icons/TechnologiesIcons/CSSIcon";
import JsIcon from "../assets/icons/TechnologiesIcons/JsIcon";
import ReactIcon from "../assets/icons/TechnologiesIcons/ReactIcon";
import ChakraIcon from "../assets/icons/TechnologiesIcons/ChakraIcon";
import AngularIcon from "../assets/icons/TechnologiesIcons/AngularIcon";
import NodeIcon from "../assets/icons/TechnologiesIcons/NodeIcon";
import ExpressIcon from "../assets/icons/TechnologiesIcons/ExpressIcon";
import PostgresqlIcon from "../assets/icons/TechnologiesIcons/PostgresqlIcon";
import GitIcon from "../assets/icons/TechnologiesIcons/GitIcon";
import NpmIcon from "../assets/icons/TechnologiesIcons/NpmIcon";
import MongoDbIcon from "../assets/icons/TechnologiesIcons/MongoDbIcon";
import VisualStudioIcon from "../assets/icons/TechnologiesIcons/VisualStudioIcon";
import NestIcon from "../assets/icons/TechnologiesIcons/NestIcon";
import OpenAiIcon from "../assets/icons/TechnologiesIcons/OpenAiIcon";
import TsIcon from "../assets/icons/TechnologiesIcons/TsIcon";
import { Text, Box } from "@chakra-ui/layout";
import { CircularProgress, CircularProgressLabel, useColorModeValue } from "@chakra-ui/react";
import "./about.css";


const About = () => {
  const bg = useColorModeValue('white', 'rgb(26	32	44)')
  const color = useColorModeValue('black', 'white')

  return (
    <>
      <Box id="about-page" bg={bg} color={color}>
        <Text id="about-h1" fontSize="6xl">
          Who I am ...
        </Text>
        <img src={rysavy}></img>
        <Text className="about-text" bg={bg} color={color} fontSize="1xl">
          <Text p={5} mt={"-5vh"} mb={"7vh"} fontSize={"3xl"}>
            ... I am <span style={{ fontSize: "1em" }}>Denis Rysavy</span>.
          </Text>
          <Text p={5} mb={"7vh"}>
            A 27 years old <span>fullstack webdeveloper</span> living in{" "}
            <span>Hamburg, Germany</span>.{" "}
          </Text>
          <Text p={5} mb={"7vh"}>
            I love <b>music</b>, <b>art</b>, <b>cats</b>, <b>science</b>,{" "}
            <b>technology</b>, <b>math</b>, <b>coding</b> and much more.
          </Text>
          <Text p={5} mb={"7vh"}>
            As a fullstack software developer I am capable of covering the full
            range of technology between <span>frontend and backend </span>
            development. I have a big passion for <span>UI & UX </span>
            principles and love clean and user friendly layouts. I am also
            capable of handling <span>server side </span>operations, for example
            setting up and running different kinds of servers, creating and
            connecting to different kinds of <span>databases</span> to handle a
            variety of tasks from password protected login and signup
            functionality to shopping systems or user dashboards where the user
            can create, read, update or delete data, so called{" "}
            <span>CRUD</span> operations, just to name a few.
          </Text>
          <Text p={5} mb={"7vh"}>
            As a Programmer I am a <span>problem solver</span>, tell me whats
            the issue and I will find a solution !
          </Text>
        </Text>
      </Box>
      <br />
      <Box bg={bg} color={color} className="tech-stack-container">
        <Text
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
        <Box>
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
            value={60}
            color="yellow"
            thickness="8px">
            <CircularProgressLabel>
              <TsIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                Typescript
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
          <CircularProgress
            className="tech-stack"
            mr={5}
            size="120px"
            value={80}
            color="yellow"
            thickness="8px">
            <CircularProgressLabel>
              {" "}
              <ChakraIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                chakra
              </Text>{" "}
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
              <AngularIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                Angular
              </Text>{" "}
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Text mt={20} fontSize="4xl" mb="8vh">
          Backend TechStack
        </Text>
        <Box>
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
            value={55}
            color="yellow.400"
            thickness="8px">
            <CircularProgressLabel>
              {" "}
              <NestIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                nest.js
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
        <Text mt={20} fontSize="4xl" mb="8vh">
          Other Tools
        </Text>
        <Box mb={20}>
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
          <CircularProgress
            mr={5}
            size="120px"
            value={90}
            color="yellow.600"
            thickness="8px">
            <CircularProgressLabel>
              {" "}
              <NpmIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                NPM
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
              <OpenAiIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                OpanAi
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Box>
    </>
  );
};

export default About;
