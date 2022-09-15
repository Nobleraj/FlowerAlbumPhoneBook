import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";

function App() {
  return <Layout />;
}

ReactDOM.createRoot(document.querySelector("#app")).render(<App />);
