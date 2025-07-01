import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/Login.tsx";
import "./index.css";
import DashboardPage from "./pages/Dashboard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route index path="/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
