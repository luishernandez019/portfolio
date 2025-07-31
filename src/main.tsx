import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ReactGA from 'react-ga4';

const gaId = import.meta.env.VITE_GA_ID

if (gaId) {
  ReactGA.initialize(gaId)
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);