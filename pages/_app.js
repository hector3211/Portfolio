import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import Layout from "../layouts/main";
import theme from "../layouts/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
