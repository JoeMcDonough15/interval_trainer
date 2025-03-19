import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import AvailableIntervalsProvider from "./context/AvailableIntervals.tsx";
import SelectedIntervalContextProvider from "./context/SelectedInterval.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AvailableIntervalsProvider>
      <SelectedIntervalContextProvider>
        <App />
      </SelectedIntervalContextProvider>
    </AvailableIntervalsProvider>
  </StrictMode>
);
