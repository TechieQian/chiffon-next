import "../styles/globals.scss";
import "bulma/css/bulma.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import Navigation from "../components/Navigation";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Chiffon the maltipoo</title>
      </Head>
      <Header />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
