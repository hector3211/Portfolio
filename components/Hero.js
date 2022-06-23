import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChakraBox } from "../layouts/section";

export default function Hero() {
  return (
    <Box py={10}>
      <Flex direction="column" justify={"center"} align="center">
        <Image
          backdropFilter="auto"
          backdropBlur="5px"
          maxWidth={"50%"}
          src="/static/images/port-pic-removebg.png"
          alt="hector picture"
        ></Image>

        <Flex direction="column" align="center">
          <Text fontSize="4xl" fontWeight="bold">
            Hector Oropesa
          </Text>
          <Text fontSize="2xl">Self-taught Developer</Text>
          <ChakraBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="mailto:horopesa494@gmail.com"
              _hover={{ textDecor: "none" }}
            >
              <Button
                boxShadow="dark-lg"
                mt={5}
                size="lg"
                colorScheme={useColorModeValue("purple", "orange")}
              >
                <Text
                  color={useColorModeValue("black", "white")}
                  fontSize="2xl"
                >
                  Contact
                </Text>
              </Button>
            </Link>
          </ChakraBox>
        </Flex>
      </Flex>
    </Box>
  );
}
