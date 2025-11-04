"use client";
import { useEffect, useState } from "react";

export default function WeeklyNotificationPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Munculkan pop-up setiap kali halaman dimuat
    setShowPopup(true);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-80 rounded-2xl border border-amber-200 bg-white p-6 text-center shadow-xl">
        <div className="mx-auto mb-3 w-fit rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700">
          Jadwal Belum Terbaru
        </div>
        <p className="mb-5 text-sm text-gray-700">
          Jadwal pelajaran di website ini belum kami perbarui. Untuk sekarang,
          silakan cek jadwal resmi Snapan.
        </p>
        <button
          onClick={() => setShowPopup(false)}
          className="w-full rounded-lg bg-amber-500 px-4 py-2 text-white transition hover:bg-amber-600"
        >
          Mengerti
        </button>
      </div>
    </div>
  );
}
