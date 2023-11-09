// import React, { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import useStore from "./store.js";

function App() {
  const { isDark, setIsDark } = useStore((state) => state);
  return <Page isDark={isDark} toggleThema={setIsDark} />;
}

export default App;
