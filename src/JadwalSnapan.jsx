"use client"; // optional kalau kamu pakai Next.js, tapi di React biasa nggak perlu

import Home from "./pages/Home";
import WeeklyNotificationPopup from "./components/WeeklyNotificationPopup";
// pastiin path-nya sesuai, misal ./components/WeeklyNotificationPopup.jsx

export default function JadwalSnapan() {
  return (
    <>
      {/* Konten utama halaman */}
      <Home />
    </>
  );
}
