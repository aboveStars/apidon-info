import Head from "next/head";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apidon • Next-G Social Media</title>
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/apidon-info.appspot.com/o/icon.png?alt=media&token=6dcecf16-7edd-46d5-809a-2b154158c7c8"
        />
        <meta
          name="description"
          content="The magnificent platform enables users to select their algorithms, create NFTs that are marketable, and additionally welcomes algorithm creators to participate and generate income."
        />
        <meta property="og:title" content="Apidon • Next-G Social Media" />
        <meta
          property="og:description"
          content="The magnificent platform enables users to select their algorithms, create NFTs that are marketable, and additionally welcomes algorithm creators to participate and generate income."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/apidon-info.appspot.com/o/og-image-opt.png?alt=media&token=7c777d81-27c5-4670-8a8a-660eefcfb175"
        />
        <meta
          name="twitter:card"
          content="https://firebasestorage.googleapis.com/v0/b/apidon-info.appspot.com/o/og-image-opt.png?alt=media&token=7c777d81-27c5-4670-8a8a-660eefcfb175"
        />
      </Head>
      <Layout />
    </>
  );
}
