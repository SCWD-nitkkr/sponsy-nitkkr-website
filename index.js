import { StrictMode } from "react";
import ReactDOM from "react-dom";

import LatestNews from "./LatestNews.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LatestNews />
  </StrictMode>,
  rootElement
);
