import {
  Box,
  Heading,
  Progress,
  Flex,
  Text,
  Center,
  Icon,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { DiJavascript1 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { BsFillBootstrapFill, BsFillLightningChargeFill } from "react-icons/bs";
import {
  SiTailwindcss,
  SiFramer,
  SiFirebase,
  SiMongodb,
  SiPython,
  SiFlask,
} from "react-icons/si";
import { ChakraBox } from "../layouts/section";

export default function skills() {
  return (
    <ChakraBox
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      py={20}
      display="flex"
      flexDirection="column"
    >
      <Heading
        fontSize={{ base: "3xl", md: "4xl" }}
        ml={3}
        pb={5}
        textDecor="underline"
        textUnderlineOffset={5}
      >
        Skills
      </Heading>
      <Flex
        p={2}
        mt={4}
        display="flex"
        justifyContent={"space-evenly"}
        alignItems="center"
        height={{ base: "1rem", md: "8rem" }}
      >
        <Tooltip hasArrow label="Java Script">
          <span>
            <Icon as={DiJavascript1} boxSize={{ base: "8", md: "10" }} />
          </span>
        </Tooltip>
        <Tooltip hasArrow label="HTML">
          <span>
            <Icon as={AiFillHtml5} boxSize={{ base: "8", md: "10" }} />
          </span>
        </Tooltip>
        <Tooltip hasArrow label="CSS">
          <span>
            <Icon as={DiCss3Full} boxSize={{ base: "8", md: "10" }} />
          </span>
        </Tooltip>
        <Tooltip hasArrow label="Chakra Ui">
          <span>
            <Icon
              as={BsFillLightningChargeFill}
              boxSize={{ base: "8", md: "10" }}
            />
          </span>
        </Tooltip>
        <Tooltip hasArrow label="Bootstrap">
          <span>
            <Icon as={BsFillBootstrapFill} boxSize={{ base: "8", md: "10" }} />
          </span>
        </Tooltip>
        <Tooltip hasArrow label="tailwind">
          <span>
            <Icon as={SiTailwindcss} boxSize={{ base: "8", md: "10" }} />
          </span>
        </Tooltip>
        <Tooltip hasArrow label="Framer motion">
          <span>
            <Icon as={SiFramer} boxSize={{ base: "8", md: "10" }} />
          </span>
        </Tooltip>
        <Tooltip hasArrow label="Firebase">
          <span>
            <Icon as={SiFirebase} boxSize={{ base: "8", md: "10" }} />
          </span>
        </Tooltip>
        <Tooltip hasArrow label="MongoDB">
          <span>
            <Icon as={SiMongodb} boxSize={{ base: "8", md: "10" }} />
          </span>
        </Tooltip>
        <Tooltip hasArrow label="Python">
          <span>
            <Icon as={SiPython} boxSize={{ base: "8", md: "10" }} />
          </span>
        </Tooltip>
      </Flex>
    </ChakraBox>
  );
}
