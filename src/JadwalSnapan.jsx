'use client'; // optional kalau kamu pakai Next.js, tapi di React biasa nggak perlu

import Home from "./pages/Home";
import WeeklyNotificationPopup from "./components/WeeklyNotificationPopup"; 
// pastiin path-nya sesuai, misal ./components/WeeklyNotificationPopup.jsx

export default function JadwalSnapan() {
  return (
    <>
      {/* Popup ditaruh di sini supaya muncul di atas seluruh konten halaman */}
      <WeeklyNotificationPopup hour={5} minute={0} />

      {/* Konten utama halaman */}
      <Home />
    </>
  );
}
