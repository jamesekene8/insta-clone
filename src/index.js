import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/main.css";
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
      <App />
    </FirebaseContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
