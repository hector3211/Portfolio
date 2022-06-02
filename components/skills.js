import {
  Box,
  Heading,
  Progress,
  Flex,
  Text,
  Center,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { DiJavascript1 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiTailwindcss,
  SiFramer,
  SiFirebase,
  SiMongodb,
  SiPython,
  SiFlask,
} from "react-icons/si";

export default function skills() {
  return (
    <Box
      minWidth={{ base: "100%", md: "83%", lg: "51.1%" }}
      position={{ base: "none", md: "absolute" }}
      top={{ md: "63%", lg: "54.8%" }}
      minHeight={{ base: "5rem", md: "3rem" }}
    >
      <Box
        borderBottomRadius={30}
        p="40px"
        mt="4"
        backdropFilter="auto"
        backdropBlur="5px"
      >
        <Flex justify="space-around">
          <Icon as={DiJavascript1} boxSize={{ base: "8", md: "10" }} />
          <Icon as={AiFillHtml5} boxSize={{ base: "8", md: "10" }} />
          <Icon as={DiCss3Full} boxSize={{ base: "8", md: "10" }} />
          <Icon as={BsFillBootstrapFill} boxSize={{ base: "8", md: "10" }} />
          <Icon as={SiTailwindcss} boxSize={{ base: "8", md: "10" }} />
          <Icon as={SiFramer} boxSize={{ base: "8", md: "10" }} />
          <Icon as={SiFirebase} boxSize={{ base: "8", md: "10" }} />
          <Icon as={SiMongodb} boxSize={{ base: "8", md: "10" }} />
          <Icon as={SiPython} boxSize={{ base: "8", md: "10" }} />
        </Flex>
      </Box>
    </Box>
  );
}
