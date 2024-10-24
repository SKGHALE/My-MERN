import React from "react"; //react core foundation liabary
import ReactDOM from "react-dom/client"; // reactDom is like implementaion in web, Like native is implemented in mobile app.
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); //React Also create its own DOM.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
