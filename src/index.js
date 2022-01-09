import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { LatestNews } from "./components";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LatestNews />
  </StrictMode>,
  rootElement
);
