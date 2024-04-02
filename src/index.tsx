import "simplebar/src/simplebar.css";
import React from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CollapseDrawerProvider } from "./contexts/CollapseDrawerContext";
import CircularProgress from "@mui/material/CircularProgress";

const container = document.getElementById("root");
// eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <CollapseDrawerProvider>
          <React.Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <CircularProgress
                  sx={{
                    color: "#3650a2",
                  }}
                />
              </div>
            }
          >
            <App />
          </React.Suspense>
        </CollapseDrawerProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
