import { theme } from '@/theme/theme'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <DefaultSeo
        title="Apidon • Next-G Fan Experience"
        description="The magnificent platform that enables users to connect with their idols, buy and showcase exclusive digital collectibles, while providing a seamless social experience."
        openGraph={{
          type: 'website',
          images: [
            {
              url: 'https://apidon.com/og-image.png',
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
  )
}
