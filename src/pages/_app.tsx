import { ChakraBaseProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "./components/chakra/theme";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraBaseProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraBaseProvider>
    </RecoilRoot>
  );
}
