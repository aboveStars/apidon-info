import StarsAnimatedBg from "@/animatedBg/StarsAnimatedBg";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
        <StarsAnimatedBg />
      </RecoilRoot>
    </>
  );
}
