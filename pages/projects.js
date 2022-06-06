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
              src="/static/images/fireblog.png"
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
              FireBlog is an application where Hector honed in on his own
              personal touch&#46; A user has the ability to sign up to the
              blog&#44; log into the blog using a sign-up email and password or
              they can log in with Google&#46; Hector created an application
              where his email is the admin email and only he has the ability to
              create&#44; edit and delete posts&#46; Spectators are able to view
              any posts&#46;
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
              src="/static/images/openspace.png"
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
              OpenSpace was something exciting Hector coded one day and was
              enjoyable to create&#44; Its a nft marketplace that resembles Open
              Sea in a way&#46; Hector is currently exploring more about Web3
              and gaining experience under his belt with tools such as
              Hardhat&#44; Moralis&#44; Solidity&#44; Chainlink and
              Openzeplin&#46;
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
              src="/static/images/openspacedash.png"
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
              OpenSpace Dashboard is about Web3, being able to harness the power
              of web3 provides others with the ability to say &#46; &#34;With
              this project you can connect to your wallet with ease&#44; view
              recent transitions, send and receive crypto&#46;&#34;
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </ChakraBox>
  );
}
