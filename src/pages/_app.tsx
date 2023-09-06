import { theme } from "@/theme/theme";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Apidon • Next-G Social Media</title>
        <meta
          name="description"
          content="The magnificent platform enables users to select their algorithms, create NFTs that are marketable, and additionally welcomes algorithm creators to participate and generate income.
"
        />
        <meta property="og:title" content="Apidon • Next-G Social Media" />
        <meta
          property="og:description"
          content="The magnificent platform enables users to select their algorithms, create NFTs that are marketable, and additionally welcomes algorithm creators to participate and generate income.
          "
        />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/apidon-info.appspot.com/o/og-image-opt.png?alt=media&token=7c777d81-27c5-4670-8a8a-660eefcfb175" />
        <meta name="twitter:card" content="https://firebasestorage.googleapis.com/v0/b/apidon-info.appspot.com/o/og-image-opt.png?alt=media&token=7c777d81-27c5-4670-8a8a-660eefcfb175" />
      </Head>
      <Analytics />
      <RecoilRoot>
        <ChakraBaseProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraBaseProvider>
      </RecoilRoot>
    </>
  );
}
