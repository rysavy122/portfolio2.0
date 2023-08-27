import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { keyframes, Button, useColorModeValue } from "@chakra-ui/react";
import { Flex, Text, Link } from "@chakra-ui/layout";
import GithubIcon from "../assets/icons/SocialMedialicons/GithubIcon";
import LinkedinIcon from "../assets/icons/SocialMedialicons/LinkedinIcon";
import "../layout/footer.css";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");  
  const bg = useColorModeValue("white", "black");
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

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "de" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };
  
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
        color={"black"}
        onClick={toggleLanguage}
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
      {language === "en" ? "DE" : "EN"}
      </Button>
      <div id="footer-content">
        <Text bg={bg} textAlign={"center"} fontSize={12}>
          {t("footer.rights", {year: new Date().getFullYear() })}
          {" "}
        </Text>
        <div id="back-to-top">
          <Button
            id="back-to-top-btn"
            color={"black"}
            position="fixed"
            zIndex={10}
            animation={`${fadeIn} 0.3s ease-in-out`}
            style={{ display: showButton ? "inline" : "none" }}
            onClick={scrollToTop}>
            ⇡
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
