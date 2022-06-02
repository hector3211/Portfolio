import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import { ChakraBox } from "../layouts/section";
import Skills from "../components/skills";
import About from "../components/about";
export default function Home() {
  return (
    <ChakraBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Nav />
      <Box ml={{ base: 0, md: "3.5rem", lg: 0 }}>
        <Hero />
        <Skills />
        <About />
      </Box>
    </ChakraBox>
  );
}
