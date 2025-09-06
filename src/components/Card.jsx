// "use client"; // kalau Next.js app dir

import BadgeMapel from "./BadgeMapel";

export default function Card({ hariKey, data }) {
  if (!data) return null;

  const displayHari = hariKey.charAt(0).toUpperCase() + hariKey.slice(1);
  const jadwalHari = Array.isArray(data.jadwal) ? data.jadwal : [];

  return (
    <div className="flex flex-col p-4 w-[287px] gap-6 rounded-xl bg-white shadow-md">
      {/* Header Tanggal */}
      <div className="flex flex-row justify-between items-center w-full">
        <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium plusjakarta">
          {displayHari}
        </div>
        <div className="text-gray-600 plusjakarta text-sm ">
          {data.ruang}
        </div>
      </div>

      {/* Info Hari */}
      <div className="text-[16px] plusjakarta text-left font-semibold text-gray-900">
        {displayHari}, {jadwalHari.length} Mata Pelajaran
      </div>

      {/* Badge Mapel */}
      <div className="flex flex-row flex-wrap gap-2">
        {jadwalHari.map((item, idx) => (
          <BadgeMapel key={idx} mapel={item.mapel} jam={item.jam} guru={item.guru} />
        ))}
      </div>
    </div>
  );
}
