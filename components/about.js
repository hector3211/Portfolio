import {
  Heading,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import { ChakraBox } from "../layouts/section";

export default function about() {
  return (
    <ChakraBox
      mt={10}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      display="block"
      backdropFilter="auto"
      pb={4}
    >
      <Heading
        fontSize="4xl"
        ml={3}
        textDecor="underline"
        textUnderlineOffset={5}
      >
        Bio
      </Heading>
      <Box p={2} mt={4} rounded={20}>
        <Text
          style={{ textIndent: "1.2rem" }}
          pt={5}
          fontSize="xl"
          lineHeight="shorter"
          fontWeight="hairline"
          textAlign="justify"
        >
          Hector started his coding journey late Dec 2021, writing Python code
          for data science that gave him an itch to create things with frontend
          development tools such as React. eversince he has been hooked! he has
          the ability to design your vision then create it using various
          technologies. Skillful in content creation apps like Figma, Resolve
          Davinci, Canva, lightroom and more. Up to date with popular JavaScript
          frameworks like React, NextJs, and of course knowledgable in
          Html,Css.Vanilla JavaScript.
        </Text>
      </Box>
    </ChakraBox>
  );
}
