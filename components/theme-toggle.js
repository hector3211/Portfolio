import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { ChakraBox } from "../layouts/section";

export default function ThemeToggle() {
  const { toggleColorMode } = useColorMode();
  return (
    <ChakraBox
      style={{ display: "inline-block" }}
      key={useColorModeValue("light", "dark")}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <IconButton
        boxShadow="dark-lg"
        my={{ base: 0, md: 10 }}
        aria-label="Theme toggle button"
        colorScheme={useColorModeValue("purple", "orange")}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      ></IconButton>
    </ChakraBox>
  );
}
