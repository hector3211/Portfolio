import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import { ChakraBox } from "../layouts/section";
import About from "../components/about";
import Skills from "../components/skills";
import Rocket from "../components/rocket";
export default function Home() {
  return (
    <ChakraBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0, delay: 0 }}
    >
      <Nav />
      <Box ml={{ base: 0, md: "3.5rem", lg: 0 }} mt={{ base: 0, md: 10 }}>
        <Rocket />
        <Hero />
        <Skills />
        <About />
      </Box>
    </ChakraBox>
  );
}
