import Head from "next/head";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-weight: 100;
    font-family: 'Tajawal', sans-serif;
  }

  body{
    background-color: #ccc;
    padding-top: 60px;
    padding-left: 75px;
  }

`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
