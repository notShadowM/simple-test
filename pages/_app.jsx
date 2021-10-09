import Head from "next/head";
import { createGlobalStyle } from 'styled-components';
import Sidebar from "../src/components/Sidebar";
import Header from "../src/components/Header";
import { useState } from "react";

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
  const [nav,setNav] = useState("Campaign");
  const [data,setData] = useState([]);

  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <GlobalStyle />
      <Header nav={nav} data={data} />
      <Sidebar nav={nav} setNav={setNav} />
      <Component nav={nav} setData={setData} {...pageProps} />
    </>
  )
}

export default MyApp
