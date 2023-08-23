import StarsAnimatedBg from "@/animatedBg/StarsAnimatedBg";
import { theme } from "@/theme/theme";
import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ChakraBaseProvider theme={theme}>
          <Component {...pageProps} />
          <StarsAnimatedBg />
        </ChakraBaseProvider>
      </RecoilRoot>
    </>
  );
}
