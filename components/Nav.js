import {
  Center,
  Button,
  Flex,
  Box,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiGithub } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";
import { ChakraBox } from "../layouts/section";
import ToggleButton from "../components/theme-toggle";
export default function Nav() {
  return (
    <Flex
      position={"relative"}
      mr={3}
      justify={{ base: "end", md: "start" }}
      pt={{ base: 3, md: 0 }}
    >
      <Box
        border={"1px solid useColorModeValue('pruple','orange')"}
        rounded={10}
        maxWidth="3rem"
        minHeight={{ base: "4rem", md: "4rem" }}
        justifyContent="center"
        alignItems="center"
        display={{ base: "flex", md: "none" }}
        p={5}
      >
        <ToggleButton />
        <Box mx={5} display={{ base: "inline-block", md: "none" }}>
          <Menu>
            <MenuButton as={IconButton}>
              <Icon boxSize={6} as={GiHamburgerMenu} />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <NextLink href="/">
                  <Link width="100%" passhref="true">
                    Home
                  </Link>
                </NextLink>
              </MenuItem>
              <MenuItem>
                <NextLink href="/projects">
                  <Link width="100%" passhref="true">
                    Projects
                  </Link>
                </NextLink>
              </MenuItem>
              <MenuItem>
                <Link
                  href="mailto:horopesa494@gmail.com?subject=Website estimate"
                  width="100%"
                >
                  Contact
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="https://github.com/hector3211"
                  target="_blank"
                  rel="noopener noreferrer"
                  width="100%"
                >
                  Github
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="https://twitter.com/HectorOropesa1"
                  target="_blank"
                  rel="noopner noreferrer"
                  width="100%"
                >
                  Twitter
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <ChakraBox
        zIndex={2}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        position="absolute"
        left={{ md: "-4%", lg: "-13%" }}
        minWidth="5rem"
        minHeight={{ md: "30%", lg: "60%" }}
        display={{ base: "none", md: "flex" }}
        justifyContent="space-evenly"
        rounded={40}
      >
        <Flex direction="column" minWidth="100%">
          <Flex
            direction="column"
            minWidth="100%"
            minHeight={"50%"}
            align="center"
          >
            <ToggleButton />

            <ChakraBox
              whileHover={{ scale: 1.5 }}
              nded="full"
              minWidth="4rem"
              minHeight="4rem"
              py={2}
              pl={3}
              fontSize="4xl"
            >
              <NextLink href="/">
                <Icon
                  boxSize={10}
                  aria-label="Home"
                  mt={1}
                  variant="outline"
                  border="none"
                  as={AiFillHome}
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              </NextLink>
            </ChakraBox>

            <ChakraBox
              whileHover={{ scale: 1.5 }}
              nded="full"
              minWidth="4rem"
              minHeight="4rem"
              py={2}
              pl={3}
              fontSize="4xl"
            >
              <NextLink href="/projects">
                <Icon
                  boxSize={10}
                  aria-label="projects"
                  mt={1}
                  variant="outline"
                  border="none"
                  as={AiFillFolderOpen}
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              </NextLink>
            </ChakraBox>

            <ChakraBox
              whileHover={{ scale: 1.5 }}
              minWidth="4rem"
              minHeight="4rem"
              py={2}
              pl={3}
              fontSize="4xl"
            >
              <Link href="mailto:horopesa494@gmail.com?subject=Website estimate">
                <Icon
                  boxSize={10}
                  aria-label="email"
                  mt={1}
                  variant="outline"
                  border="none"
                  as={AiTwotoneMail}
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              </Link>
            </ChakraBox>

            <ChakraBox
              whileHover={{ scale: 1.5 }}
              nded="full"
              minWidth="4rem"
              minHeight="4rem"
              py={2}
              pl={3}
            >
              <Link
                href="https://github.com/hector3211"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  boxSize={10}
                  aria-label="github"
                  mt={1}
                  variant="outline"
                  border="none"
                  as={FiGithub}
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              </Link>
            </ChakraBox>

            <ChakraBox
              whileHover={{ scale: 1.5 }}
              nded="full"
              minWidth="4rem"
              minHeight="4rem"
              py={2}
              pl={3}
            >
              <Link
                href="https://twitter.com/HectorOropesa1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  boxSize={10}
                  aria-label="twitter"
                  mt={1}
                  variant="outline"
                  border="none"
                  as={AiOutlineTwitter}
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              </Link>
            </ChakraBox>
          </Flex>
        </Flex>
      </ChakraBox>
    </Flex>
  );
}
