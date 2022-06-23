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
      py={10}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <Heading
        fontSize={{ base: "3xl", md: "4xl" }}
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
          fontSize={{ base: "md", md: "xl" }}
          lineHeight="short"
          fontWeight="hairline"
          textAlign="justify"
        >
          Hector started his coding journey late Dec 2021, writing Python code
          for data science,that started an itch to create things with frontend
          development tools. He now as a result has the ability to design your
          vision then create it using various technologies. He is skilled in
          content creation apps like <strong>Figma</strong>,
          <strong>Resolve Davinci</strong>, <strong>Canva</strong>,
          <strong>lightroom</strong>,<strong>Spline</strong> and many more. He
          is up to date with popular JavaScript frameworks like{" "}
          <strong>React</strong>, <strong>NextJs</strong>, and knowledgable in{" "}
          <strong>Html</strong>,<strong>CSS</strong>,
          <strong>Vanilla JavaScript</strong>.
        </Text>
      </Box>
    </ChakraBox>
  );
}
