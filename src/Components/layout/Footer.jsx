import React from "react";
import GithubIcon from "../assets/icons/SocialMedialicons/GithubIcon";
import LinkedinIcon from "../assets/icons/SocialMedialicons/LinkedinIcon";
import { SlArrowUp, SlArrowUpCircle } from "react-icons/sl";
import { Link } from "@chakra-ui/layout";
import "../layout/footer.css";
import { Flex, Text } from "@chakra-ui/layout";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";

const Footer = () => {
  const DE = "DE";
  const EN = "EN";
  return (
    <div id="footer">
      <Flex id="external-links">
        <Link href="https://github.com/rysavy122" isExternal>
          <GithubIcon href="https://github.com/rysavy122" />
        </Link>
        <br />
        <Link href="https://www.linkedin.com/in/denisrysavy/" isExternal>
          <LinkedinIcon />
        </Link>
      </Flex>

      <Button
        _hover={{
          backgroundColor: "yellow.300",
        }}
        id="button"
        backgroundColor={"yellow.200"}
        borderRadius={"50%"}
        border={"1px solid blue"}
        float={"left"}
        m={10}
        mt={5}
        mr={5}
        h={10}
        w={10}
      >
        {DE}
      </Button>
      <div id="footer-content">
        <Text textAlign={"center"} fontSize={12}>
          {" "}
          © {new Date().getFullYear()} Denis Rysavy. All rights reserved.
        </Text>
        <div id="back-to-top">
          <SlArrowUp />
        </div>
      </div>
    </div>
  );
};

export default Footer;
