const mapelColors = {
  "Matematika": "bg-blue-200 text-blue-800",
  "Bahasa Indonesia": "bg-green-200 text-green-800",
  "NICKKOOOOO": "bg-pink-200 text-pink-800",
  "Agama": "bg-purple-200 text-purple-800",
  "PJOK": "bg-orange-200 text-orange-800",
  "Informatika": "bg-teal-200 text-teal-800",
  "PPLG - Agung": "bg-yellow-200 text-yellow-800",
  "PPLG - Imanita": "bg-yellow-200 text-yellow-800",
  "Seni Musik": "bg-red-200 text-red-800",
  "Sejarah": "bg-indigo-200 text-indigo-800",
  "IPAS": "bg-cyan-200 text-cyan-800",
  "Bahasa Jawa": "bg-lime-200 text-lime-800",
  "KKA": "bg-fuchsia-200 text-fuchsia-800",
  "Pengembangan Game": "bg-rose-200 text-rose-800",
  "PPKN": "bg-sky-200 text-sky-800",
};

export default function BadgeMapel({ mapel = "—", jam, guru }) {
  const colorClass = mapelColors[mapel] || "bg-gray-200 text-gray-800"; // default soft gray

  return (
    <div
      className={`flex px-[10px] py-[4px] rounded-full w-fit items-center justify-center ${colorClass}`}
      title={jam && guru ? `${jam} • ${guru}` : jam ? jam : undefined}
      aria-label={mapel}
    >
      <h1 className="text-sm plusjakarta">{mapel}</h1>
    </div>
  );
}
