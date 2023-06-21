import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AddPost } from "./redux/state";

export const Rerender = state => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} AddPost={AddPost} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

reportWebVitals();
