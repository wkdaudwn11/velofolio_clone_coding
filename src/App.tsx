import React from "react";
import Layout from "./components/Layout";
import { Global, css } from "@emotion/react";

function App() {
  return (
    <>
      <Layout>
        <Layout.Side>Side</Layout.Side>
        <Layout.Main>Main</Layout.Main>
      </Layout>
      <Global styles={globalStyles} />
    </>
  );
}

const globalStyles = css`
  html {
    box-sizing: border-box;
    * {
      box-sizing: inherit;
    }
  }
`;

export default App;
