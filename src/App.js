import React from "react";
import "./App.css";
import Page from "./components/Page";
import { atom, useAtom } from "jotai";

const isDark = atom(0);

function App() {
  const [dark, setIsDark] = useAtom(isDark);
  const changeDark = (e) => setIsDark(!dark);
  return <Page isDark={dark} toggleThema={changeDark} />;
}

export default App;
