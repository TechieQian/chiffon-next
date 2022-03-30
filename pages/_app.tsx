import "../styles/globals.scss";
import "bulma/css/bulma.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
