import { Box, Center, SimpleGrid, Text, Button } from "@chakra-ui/react";
import Nav from "../components/Nav";
import { ChakraBox } from "../layouts/section";
export default function projects() {
  return (
    <ChakraBox initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Nav />
      <Box py={5} ml={{ base: 0, md: "5rem", lg: 0 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Center>
              <Text fontWeight="semibold" fontSize="xl">
                FireBlog
              </Text>
            </Center>
            <Box
              position="relative"
              rounded={20}
              as="video"
              autoPlay={true}
              muted={true}
              loop={true}
              src="/videos/fireblog.mp4"
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
              FireBlog is a application where i threw my own personal touch. A
              user can sign up to the blog, also log into the blog using there
              sign up email and password or they can log in with Google. I made
              it where my email was the "admin" email and only i can create,edit
              and delete posts. Anybody else can only read the posts.
            </Text>
          </Box>
          <Box>
            <Center>
              <Text fontWeight="semibold" fontSize="xl">
                OpenSpace
              </Text>
            </Center>
            <Box
              rounded={20}
              as="video"
              autoPlay={true}
              muted={true}
              loop={true}
              src="/videos/nftsite.mp4"
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
              OpenSpace was something fun i thought of one day and it was
              enjoyable to make, It's a nft marketplace that resembles Open Sea
              in a way. I don't know if i said this or not but I love the idea
              of Web3 and the community it has so far{" "}
            </Text>
          </Box>
          <Box>
            <Center>
              <Text fontWeight="semibold" fontSize="xl">
                OpenSpace V2
              </Text>
            </Center>
            <Box
              rounded={20}
              as="video"
              autoPlay={true}
              muted={true}
              loop={true}
              src="videos/opensea.mp4"
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
              of web3 people would say. With this project you can connect to
              your wallet with ease, view recent transitions, send and receive
              crypto
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </ChakraBox>
  );
}
