// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JadwalSnapan from "./JadwalSnapan";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JadwalSnapan />} />
      </Routes>
    </BrowserRouter>
  );
}
