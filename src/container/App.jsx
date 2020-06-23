import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Info from "../components/Info";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Abilities from "../components/Abilities";
import Skills from "../components/Skills";
import Loader from "../components/Loader";
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
`;

const App = () => {
  const [loder, setLoder] = useState(1);
  setInterval(() => {
    setLoder(0);
  }, 2000);
  return loder === 1 ? (
    <>
      <GlobalStyle />
      <Loader />
    </>
  ) : (
    <Main>
      <GlobalStyle />
      <Sidebar>
        <About />
      </Sidebar>
      <Info>
        <Education />
        <Experience />
        <Abilities />
        <Skills />
      </Info>
    </Main>
  );
};

export default App;
