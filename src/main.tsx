import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className={styles.app}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);
