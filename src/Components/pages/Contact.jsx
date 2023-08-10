import React from "react";
import GmailIcon from "../assets/icons/Contacticons/GmailIcon";
import WhatsAppIcon from "../assets/icons/Contacticons/WhatsAppIcon";
import { useColorModeValue } from "@chakra-ui/react";


import { Box, Flex, Text } from "@chakra-ui/layout";
import { Button, Input, Textarea } from "@chakra-ui/react";
import { SlPaperPlane } from "react-icons/sl";

import "./contact.css";

const Contact = () => {
  const bg = useColorModeValue("white", "rgb(26	32	44)");
  const color = useColorModeValue("black", "white");

  return (
    <div id="contact-page">
      <Text bg={bg} id="contact-h1" fontSize="6xl">
        Let's get in touch{" "}
      </Text>
      <Box bg={bg} id="contact-body">
        <Input
          mb={3}
          borderRadius={1}
          variant="outline"
          placeholder="Whats youre name ? "
        />
        <Input
          required={true}
          type={"email"}
          mb={3}
          borderRadius={1}
          variant="outline"
          placeholder="Whats youre email ?"
        />
        <Input
          mb={3}
          borderRadius={1}
          variant="outline"
          placeholder="Whats the matter ? "
        />
        <Textarea
          h={180}
          mb={1}
          borderRadius={1}
          variant="outline"
          placeholder="Tell me more about it ..."
        />
        <Button
          mt={1}
          w={"100%"}
          borderRadius={1}
          _hover={{
            backgroundColor: "yellow.300",
          }}
          bg={"yellow"}
          type="submit">
          <SlPaperPlane color="black" style={{ margin: "1px" }} />
        </Button>
        <Flex alignItems="center" justifyContent="space-around" mt={20}>
          <a
            href="mailto:rysavydenis3@gmail.com?subject=Hello&body=Hello,%20can%20we%20chat?"
            target={"_blank"}>
            <GmailIcon id="gmail-icon" />
            <Text ml={2}>Write me an email</Text>
          </a>
          <a
            href="https://wa.me/+491630100503?text=Hello,%20can%20we%20chat?"
            target={"_blank"}>
            <WhatsAppIcon />
            <Text ml={2}>Write me on WhatsApp</Text>
          </a>
        </Flex>
      </Box>
    </div>
  );
};

export default Contact;
