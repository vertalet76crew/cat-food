import React from "react";
import "./App.css";
import Main from "./components/Main";
import { data } from "./mock";

function App() {
  return <Main data={data} />;
}

export default App;
