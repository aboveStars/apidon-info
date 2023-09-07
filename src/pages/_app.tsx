import { theme } from "@/theme/theme";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <DefaultSeo
        title="Apidon • Next-G Social Media"
        description="The magnificent platform enables users to select their algorithms, create NFTs that are marketable, and additionally welcomes algorithm creators to participate and generate income."
        openGraph={{
          type: "website",
          images: [
            {
              url: "https://firebasestorage.googleapis.com/v0/b/apidon-info.appspot.com/o/og-image-opt.png?alt=media&token=7c777d81-27c5-4670-8a8a-660eefcfb175",
            },
          ],
        }}
      />
      <Analytics />
      <RecoilRoot>
        <ChakraBaseProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraBaseProvider>
      </RecoilRoot>
    </>
  );
}
