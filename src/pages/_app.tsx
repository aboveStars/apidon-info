import StarsAnimatedBg from "@/animatedBg/StarsAnimatedBg";
import { theme } from "@/theme/theme";
import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <RecoilRoot>
        <ChakraBaseProvider theme={theme}>
          <Component {...pageProps} />
          <StarsAnimatedBg />
        </ChakraBaseProvider>
      </RecoilRoot>
    </>
  );
}
