'use client';
import { useEffect, useState } from "react";

/**
 * WeeklyNotificationPopup
 * - Tampil pertama kali user buka web.
 * - Setelah itu tampil SEKALI setiap minggu, dengan jendela:
 *   Senin 09:00 WIB s/d Senin berikutnya 09:00 WIB.
 *
 * Catatan:
 * - Kompatibel Next.js (client component + localStorage hanya di useEffect).
 * - Aman kalau storage diblokir (fallback tetap tampil sekali).
 * - WIB = UTC+7 (tanpa DST), jadi kita pakai offset tetap.
 */
export default function WeeklyNotificationPopup({
  hour = 9,           // Jam WIB untuk start window (0-23)
  minute = 0,         // Menit WIB untuk start window (0-59)
  storageKey = "notif:lastShownJakartaMs",
} = {}) {
  const [showPopup, setShowPopup] = useState(false);

  // WIB (UTC+7) offset dalam ms
  const JAKARTA_OFFSET_MS = 7 * 60 * 60 * 1000;

  // "Sekarang" versi jam dinding Jakarta (caranya: geser +7 jam)
  const nowJakarta = () => new Date(Date.now() + JAKARTA_OFFSET_MS);

  // Senin 09:00 (default) di MINGGU INI versi jam dinding Jakarta
  const getThisWeekWindowStartJakarta = (nowJ) => {
    const d = new Date(nowJ.getTime()); // clone
    // Karena kita sudah shift +7 jam, getter UTC di sini = "WIB getter"
    const day = d.getUTCDay(); // 0=Min, 1=Sen, ... 6=Sab (dalam WIB)
    const daysSinceMonday = (day + 6) % 7; // Sen=0, Sel=1, ..., Min=6
    d.setUTCDate(d.getUTCDate() - daysSinceMonday); // mundur ke Senin
    d.setUTCHours(hour, minute, 0, 0); // set ke jam WIB yang diinginkan
    return d;
  };

  // Helper aman untuk akses localStorage
  const safeGet = (key) => {
    try {
      if (typeof window === "undefined") return null;
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  };
  const safeSet = (key, value) => {
    try {
      if (typeof window === "undefined") return;
      window.localStorage.setItem(key, value);
    } catch {
      // abaikan jika storage diblokir
    }
  };

  useEffect(() => {
    // Hanya jalan di client
    const nowJ = nowJakarta();
    const windowStartJ = getThisWeekWindowStartJakarta(nowJ);
    const windowEndJ = new Date(windowStartJ.getTime());
    windowEndJ.setUTCDate(windowEndJ.getUTCDate() + 7); // Senin depan, jam sama

    const raw = safeGet(storageKey);

    // 1) Belum pernah tampil sama sekali → tampilkan sekarang
    if (!raw) {
      setShowPopup(true);
      safeSet(storageKey, String(nowJ.getTime())); // simpan "waktu Jakarta (shifted)"
      return;
    }

    // 2) Sudah pernah tampil → cek apakah sudah masuk jendela minggu ini
    const lastShownJakartaMs = Number(raw) || 0;

    const inThisWeekWindow =
      nowJ.getTime() >= windowStartJ.getTime() &&
      nowJ.getTime() < windowEndJ.getTime();

    const notYetShownThisWeek = lastShownJakartaMs < windowStartJ.getTime();

    if (inThisWeekWindow && notYetShownThisWeek) {
      setShowPopup(true);
      safeSet(storageKey, String(nowJ.getTime()));
    }
  }, [hour, minute, storageKey]); // idempotent & aman di StrictMode

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-80 rounded-2xl bg-white p-6 text-center shadow-xl">
        <h2 className="mb-2 text-xl font-semibold">Peringatan</h2>
        <p className="mb-4 text-gray-600 text-sm">
          Selalu periksa tanggal jadwal pembaruan terbaru.
        </p>
        <button
          onClick={() => setShowPopup(false)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 w-full "
        >
          Oke, sip!
        </button>
      </div>
    </div>
  );
}
