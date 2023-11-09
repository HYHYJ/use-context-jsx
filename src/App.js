// import React, { useState } from "react";
import "./App.css";
import Page from "./components/Page";
// import useStore from "./store.js";
import { atom, useRecoilState } from "recoil";

function App() {
  let isDark = atom({
    key: "isDark",
    default: 0,
  });

  const [dark, setdark] = useRecoilState(isDark);

  const setDarkFunction = (event) => {
    setdark(!dark);
  };
  return <Page isDark={dark} toggleThema={setDarkFunction} />;
}

export default App;
