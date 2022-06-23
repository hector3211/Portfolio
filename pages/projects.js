import {
  Box,
  Center,
  SimpleGrid,
  Text,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import Nav from "../components/Nav";
import Rocket from "../components/rocket";
import { ChakraBox } from "../layouts/section";
export default function Projects() {
  return (
    <ChakraBox initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Nav />
      <Box
        py={5}
        pb={3}
        ml={{ base: 0, md: "5rem", lg: 0 }}
        mt={{ base: 0, md: 5 }}
      >
        <Rocket />
        <SimpleGrid columns={1} spacing={8}>
          <Box my={5} pt={5}>
            <Center>
              <Text pb={1} fontWeight="semibold" fontSize="3xl">
                Travel Agency
              </Text>
            </Center>
            <Image
              shadow="first"
              rounded={20}
              alt="fireblog picture"
              src="/static/images/travel.jpeg"
              objectFit="cover"
              sx={{
                aspectRatio: "16/9",
              }}
            />
            <Text
              pt={5}
              fontSize={{ base: "md", md: "2xl" }}
              textAlign="justify"
              style={{ textIndent: "1rem" }}
            >
              <Link
                href={"https://travel-hector3211.vercel.app"}
                target="_blank"
                rel="noopener noreferrer"
                fontSize="3xl"
                fontWeight={"bold"}
                color={useColorModeValue("purple", "orange")}
                _hover={{
                  color: useColorModeValue("orange", "purple"),
                }}
              >
                Travel&nbsp;
              </Link>
              is Hector&apos;s newest creation&#46; It is a travel agency
              website that highlists the latest website design trends and offers
              top security user authentication&#44;
            </Text>
          </Box>
          <Box my={5}>
            <Center>
              <Text pb={1} fontWeight="semibold" fontSize="3xl">
                FireBlog
              </Text>
            </Center>
            <Image
              shadow="first"
              alt="fireblog picture"
              src="/static/images/fireblog.png"
              rounded={20}
              objectFit="cover"
              sx={{
                aspectRatio: "16/9",
              }}
            />
            <Text
              pt={5}
              fontSize={{ base: "md", md: "2xl" }}
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
          <Box my={5}>
            <Center>
              <Text pb={1} fontWeight="semibold" fontSize="3xl">
                OpenSpace
              </Text>
            </Center>
            <Image
              shadow={"first"}
              alt="openspace picture"
              rounded={10}
              src="/static/images/openspace.png"
              objectFit="cover"
              sx={{
                aspectRatio: "16/9",
              }}
            />
            <Text
              pt={5}
              fontSize={{ base: "md", md: "2xl" }}
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
          <Box my={5}>
            <Center>
              <Text pb={1} fontWeight="semibold" fontSize="3xl">
                OpenSpace V2
              </Text>
            </Center>
            <Image
              shadow="first"
              alt="openspace Dashboard picture"
              rounded={20}
              src="/static/images/openspacedash.png"
              objectFit="cover"
              sx={{
                aspectRatio: "16/9",
              }}
            />
            <Text
              pt={5}
              fontSize={{ base: "md", md: "2xl" }}
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
