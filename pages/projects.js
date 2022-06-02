import { Box, Center, SimpleGrid, Text, Image } from "@chakra-ui/react";
import Nav from "../components/Nav";
import { ChakraBox } from "../layouts/section";
export default function projects() {
  return (
    <ChakraBox initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Nav />
      <Box py={5} pb={3} ml={{ base: 0, md: "5rem", lg: 0 }}>
        <SimpleGrid columns={1} spacing={8}>
          <Box>
            <Center>
              <Text pb={1} fontWeight="semibold" fontSize="xl">
                FireBlog
              </Text>
            </Center>
            <Image
              alt="fireblog picture"
              src="static/images/fireblog.png"
              rounded={10}
              objectFit="contain"
              sx={{
                aspectRatio: "16/9",
              }}
            />
            <Text
              pt={5}
              fontSize="md"
              textAlign="justify"
              style={{ textIndent: "1rem" }}
            >
              FireBlog is a application where I threw my own personal touch&#46;
              A user can sign up to the blog&#44; also log into the blog using
              there sign up email and password or they can log in with
              Google&#46; I made it where my email was the admin email and only
              I can create&#44; edit and delete posts. Anybody else can only
              read the posts&#46;
            </Text>
          </Box>
          <Box>
            <Center>
              <Text pb={1} fontWeight="semibold" fontSize="xl">
                OpenSpace
              </Text>
            </Center>
            <Image
              alt="openspace picture"
              rounded={10}
              src="static/images/openspace.png"
              objectFit="contain"
              sx={{
                aspectRatio: "16/9",
              }}
            />
            <Text
              pt={5}
              fontSize="md"
              textAlign="justify"
              style={{ textIndent: "1rem" }}
            >
              OpenSpace was something fun I thought of one day and it was
              enjoyable to make&#44; Its a nft marketplace that resembles Open
              Sea in a way&#46; I don&apos;t know if I said this or not but I
              love the idea of Web3 and the community it has so far&#46;
            </Text>
          </Box>
          <Box>
            <Center>
              <Text pb={1} fontWeight="semibold" fontSize="xl">
                OpenSpace V2
              </Text>
            </Center>
            <Image
              alt="openspace Dashboard picture"
              rounded={10}
              src="static/images/openspace-dashboard.png"
              objectFit="contain"
              sx={{
                aspectRatio: "16/9",
              }}
            />
            <Text
              pt={5}
              fontSize="md"
              textAlign="justify"
              style={{ textIndent: "1rem" }}
            >
              OpenSpace Dashboard is about Web3, being able to harnest the power
              of web3 people would say&#46; With this project you can connect to
              your wallet with ease&#44; view recent transitions, send and
              receive crypto&#46;
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </ChakraBox>
  );
}
