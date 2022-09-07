import React from "react";
import { AnimatePresence } from "framer-motion";
// Styles
import GlobalStyle from "./App.styles";
// Pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <GlobalStyle />
      <HomePage />
    </AnimatePresence>
  );
}

export default App;
