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
import LinuxIcon from "../assets/icons/TechnologiesIcons/LinuxIcon";
import { Text, Box } from "@chakra-ui/layout";
import {
  CircularProgress,
  CircularProgressLabel,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import "./about.css";

const About = () => {
  const bg = useColorModeValue("white", "black");
  const color = useColorModeValue("black", "white");
  const { t } = useTranslation();

  return (
    <>
      <Box id="about-page" bg={bg} color={color}>
        <Text id="about-h1" fontSize="6xl">
          {t("about.h1")}
        </Text>
        <img src={rysavy}></img>
        <Text className="about-text" bg={bg} color={color} fontSize="1xl">
          <Text p={5} mt={"-5vh"} mb={"7vh"} fontSize={"3xl"}>
            {t("about.h2")}
            <span style={{ fontSize: "1em" }}>Denis Rysavy</span>.
          </Text>
          <Text p={5} mb={"7vh"}>
            {t("about.age")}
            <span>{t("about.developer")}</span>
            {t("about.living")}
            <span>Hamburg, {t("about.country")} </span>.
          </Text>
          <Text id="love" p={5} mb={"5vh"}>
            {t("about.love")}<b>{t("about.hobbies")}</b>{t("about.love1")}
          </Text>
          <Text p={5} mb={"7vh"}>
            {t("about.intro")}
            <span>{t("about.front2back")}</span>
            {t("about.intro2")}
            <span>UI & UX </span>
            {t("about.intro3")}
            <span>{t("about.server")}</span>
            {t("about.intro4")}
            <span>{t("about.database")}</span>
            {t("about.intro5")}
            <span>CRUD</span>
            {t("about.intro6")}
          </Text>
          <Text p={5} mb={"7vh"}>
            {t("about.intro7")}
            <span>{t("about.problem")}</span>
            {t("about.intro8")}
          </Text>
        </Text>
      </Box>
      <Box bg={bg} color={color} className="tech-stack-container">
        <Text pt={"6vh"} pb={"10vh"} mb={200} mt={60} fontSize="6xl">
          {t("about.techstack")}
        </Text>
        <Text pt={1} pb={1} mt={20} fontSize="4xl" mb="8vh">
          {t("about.frontend")}
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
              <AngularIcon />
              <Text ml={"12%"} fontSize="12px">
                Angular
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Text mt={20} fontSize="4xl" mb="8vh">
        {t("about.backend")}
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
          <CircularProgress
            mr={5}
            size="120px"
            value={90}
            color="yellow.600"
            thickness="8px">
            <CircularProgressLabel>
              {" "}
              <LinuxIcon />{" "}
              <Text ml={"12%"} fontSize="12px">
                Linux
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Text mt={20} fontSize="4xl" mb="8vh">
        {t("about.tools")}
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
