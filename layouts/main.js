import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
export default function main({ children }) {
  return (
    <Box as="main" minHeight="100vh" mt={5}>
      <Head>
        <meta
          name="Hector's portfolio"
          content="width=device-width, initial-scale=1.0 "
        ></meta>
        <title>Hectors portfolio</title>
      </Head>
      <Container maxWidth="container.md" fontFamily={" 'Roboto', sans-serif;"}>
        {children}
      </Container>
    </Box>
  );
}
