import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import DashboardPage from "./pages/Dashboard.tsx";
import TaskPage from "./pages/Dispensation.tsx";
import Home from "./pages/Home.tsx";
import LoginPage from "./pages/Login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<Home />}>
          <Route index element={<DashboardPage />} />
          <Route path="dispensation" element={<TaskPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
