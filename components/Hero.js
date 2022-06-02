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
    <Box pb={20}>
      <Box
        shadow="first"
        minHeight={{ base: "80vh", md: "100vh" }}
        position="relative"
        as="video"
        autoPlay={true}
        muted={true}
        loop={true}
        src="/videos/wind.mp4"
        objectFit="cover"
        sx={{
          aspectRatio: "16/9",
        }}
        rounded={30}
      />
      <Flex
        position="absolute"
        top={{ base: "10rem", md: "10rem", lg: 10 }}
        left={{ base: 10, md: 250, lg: "35%" }}
        direction="column"
      >
        <Image
          shadow="first"
          rounded="full"
          backdropFilter="auto"
          backdropBlur="5px"
          width={{ base: "300px", md: "400px" }}
          height={{ base: "300px", md: "400px" }}
          src="/images/port-pic-removebg.png"
          alt="hector picture"
        ></Image>

        <Flex direction="column" align="center">
          <Text
            textShadow="2px 2px black"
            color="white"
            fontSize="4xl"
            fontWeight="bold"
          >
            Hector Oropesa
          </Text>
          <Text textShadow="2px 2px black" color="white" fontSize="2xl">
            Self-taught Developer
          </Text>
          <ChakraBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="mailto:horopesa494@gmail.com"
              _hover={{ textDecor: "none" }}
            >
              <Button
                borderColor={"white"}
                variant="outline"
                boxShadow="dark-lg"
                mt={5}
                size="lg"
                bgColor={useColorModeValue("blackAlpha.200", "whiteAlpha.200")}
                backdropFilter="auto"
                backdropBlur="10px"
                _hover={{ bg: "e9e4e6" }}
              >
                <Text color="white" textShadow="2px 2px black" fontSize="2xl">
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