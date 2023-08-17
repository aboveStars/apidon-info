import { ChakraBaseProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { theme } from "./components/chakra/theme";
import { ParticlesContainer } from "@/animatedBg/StarsAnimatedBg";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ParticlesContainer />
      <RecoilRoot>
        <ChakraBaseProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraBaseProvider>
      </RecoilRoot>
    </>
  );
}
