import React from "react";
import { Text, Link } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  Image,
  Card,
  Heading,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import CodeIcon from "../assets/icons/technologiesIcons/CodeIcon";
import './projects.css';

const Projects = () => {

  const bg = useColorModeValue("white", "rgb(26	32	44)");
  const color = useColorModeValue("black", "white");
  const { t } = useTranslation();


  return (
    <div id="project-page">
      <Text bg={bg} id="projects-h1" fontSize="6xl">
        {t("projects.h1")}
      </Text>
      <SimpleGrid bg={bg}
        w={{ base: "100%", md: "100%" }}
        spacing={20}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        css={css`
          @media screen and (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
          }
        `}
      >
        <Card>
          <CardHeader>
            <Heading size="md"> First Project</Heading>
          </CardHeader>
          <CardBody>
            <Text>Here will be a short description of the Project...</Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />
          <CardFooter justifyContent={"space-between"}>
            <a href="https://github.com/" target={"_blank"}>
              <Button>Visit me</Button>
            </a>
            <Link href="https://github.com/" isExternal>
              <CodeIcon cursor={"pointer"} id="codeicon" />
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Second Project</Heading>
          </CardHeader>
          <CardBody>
            <Text>Here will be a short description of the Project...</Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />
          <CardFooter justifyContent={"space-between"}>
            <a href="https://github.com/" target={"_blank"}>
              <Button>Visit me</Button>
            </a>
            <Link href="https://github.com/" isExternal>
              <CodeIcon cursor={"pointer"} id="codeicon" />
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Third Project</Heading>
          </CardHeader>
          <CardBody>
            <Text>Here will be a short description of the Project...</Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />
          <CardFooter justifyContent={"space-between"}>
            <a href="https://github.com/" target={"_blank"}>
              <Button>Visit me</Button>
            </a>
            <Link href="https://github.com/" isExternal>
              <CodeIcon cursor={"pointer"} id="codeicon" />
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Third Project</Heading>
          </CardHeader>
          <CardBody>
            <Text>Here will be a short description of the Project...</Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />
          <CardFooter justifyContent={"space-between"}>
            <a href="https://github.com/" target={"_blank"}>
              <Button>Visit me</Button>
            </a>
            <Link href="https://github.com/" isExternal>
              <CodeIcon cursor={"pointer"} id="codeicon" />
            </Link>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </div>
  );
};

export default Projects;
