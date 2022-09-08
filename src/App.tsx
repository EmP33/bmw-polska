import React from "react";
import { AnimatePresence } from "framer-motion";
// Styles
import GlobalStyle from "./App.styles";
// Pages
import HomePage from "./pages/HomePage";

import AOS from "aos";

function App() {
  AOS.init();
  return (
    <>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <HomePage />
      </AnimatePresence>
    </>
  );
}

export default App;
