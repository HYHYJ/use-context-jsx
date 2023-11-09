import React from "react";
import "./App.css";
import Page from "./components/Page";
import { proxy, useSnapshot } from "valtio";

const state = proxy({
  isDark: 0,
});

function App() {
  const { isDark } = useSnapshot(state);
  const changeDark = () => {
    return !isDark;
  };
  return <Page isDark={isDark} toggleThema={changeDark} />;
}

export default App;
