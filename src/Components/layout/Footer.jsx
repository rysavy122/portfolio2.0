import { useState, useEffect } from 'react'; 
import GithubIcon from "../assets/icons/SocialMedialicons/GithubIcon";
import LinkedinIcon from "../assets/icons/SocialMedialicons/LinkedinIcon";
import { SlArrowUp, SlArrowUpCircle } from "react-icons/sl";
import { IconButton, Button, Icon } from '@chakra-ui/react';
import { keyframes } from '@chakra-ui/react';
import { Link } from "@chakra-ui/layout";
import "../layout/footer.css";
import { Flex, Text } from "@chakra-ui/layout";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

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
      <Flex></Flex>

      <Button
        id="button"
        _hover={{
          backgroundColor: "yellow.300",
        }}
        backgroundColor={"yellow.200"}
        borderRadius={"50%"}
        border={"1px solid blue"}
        float={"left"}
        m={10}
        mt={5}
        mr={5}
        h={10}
        w={10}>
        {DE}
      </Button>
      <div id="footer-content">
        <Text textAlign={"center"} fontSize={12}>
          {" "}
          © {new Date().getFullYear()} Denis Rysavy. All rights reserved.
        </Text>
        <div id="back-to-top">
          <Button
          id='back-to-top-btn'
            position="fixed"
            zIndex={10}
            animation={`${fadeIn} 0.3s ease-in-out`}
            style={{ display: showButton ? "inline" : "none" }}
            onClick={scrollToTop}
          >⇡</Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
