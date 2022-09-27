import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Starting Template</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
