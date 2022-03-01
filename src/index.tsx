import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppStateProvider from "./state/AppStateProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// style
import "./assets/style/reset.scss";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <Router>
        <App />
        <ToastContainer />
      </Router>
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
