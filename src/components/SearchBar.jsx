import { useState, useRef, useEffect } from "react";
import jadwalData from "../data/jadwalData"; // import data

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const overlayRef = useRef(null);

  const handleSearch = () => {
    const q = query.toLowerCase().trim();
    let res = [];

    if (!q) return setResults([]);

    if (jadwalData[q]) {
      res.push({
        type: "hari",
        hari: q.charAt(0).toUpperCase() + q.slice(1),
        ruang: jadwalData[q].ruang,
        jadwal: jadwalData[q].jadwal,
      });
    } else {
      Object.entries(jadwalData).forEach(([hari, data]) => {
        data.jadwal.forEach((item) => {
          if (item.mapel.toLowerCase().includes(q)) {
            res.push({
              type: "mapel",
              hari: hari.charAt(0).toUpperCase() + hari.slice(1),
              ruang: data.ruang,
              ...item,
            });
          }
        });
      });
    }

    setResults(res);
  };

  // tutup overlay kalau klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setResults([]);
      }
    };

    if (results.length > 0) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [results]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Search Input */}
      <div className="border border-gray-300 rounded-full px-4 py-2 flex items-center justify-between shadow-sm bg-white">
        <div className="flex items-center gap-3 flex-grow">
          <img
            src="/assets/search.png"
            alt="search"
            className="w-5 h-5 opacity-70"
          />
          <input
            type="text"
            placeholder="Cari berdasarkan hari atau mapel..."
            className="flex-grow bg-transparent outline-none plusjakarta text-gray-700 placeholder-gray-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button
          onClick={handleSearch}
          className="ml-4 bg-blue-500 hover:bg-blue-600 text-white plusjakarta px-6 py-2 rounded-full transition-all"
        >
          Cari
        </button>
      </div>

      {/* Overlay Modal */}
      {results.length > 0 && (
        <div className="fixed inset-0 px-[12px] flex items-center justify-center bg-black/20 z-50">
          <div
            ref={overlayRef}
            className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 space-y-4 animate-fadeIn"
          >
            <h2 className="plusjakarta text-lg font-bold text-gray-800 border-b pb-2">
              Hasil Pencarian
            </h2>

            {results.map((item, idx) =>
              item.type === "hari" ? (
                <div
                  key={idx}
                  className="p-4 border rounded-xl bg-blue-50 hover:bg-blue-100 transition"
                >
                  <h3 className="plusjakarta font-semibold text-blue-700">
                    {item.hari}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Ruang: {item.ruang}
                  </p>
                  <ul className="space-y-1 text-gray-700">
                    {item.jadwal.map((j, i) => (
                      <li key={i}>
                        <span className="font-medium">{j.mapel}</span> ({j.jam})
                        – {j.guru}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div
                  key={idx}
                  className="p-4 border rounded-xl bg-gray-50 hover:bg-gray-100 transition"
                >
                  <p className="plusjakarta text-gray-700">
                    <span className="font-semibold text-blue-600">
                      {item.mapel}
                    </span>{" "}
                    ({item.jam}) – {item.guru}
                    <br />
                    <span className="text-sm text-gray-500">
                      Hari {item.hari}, Ruang {item.ruang}
                    </span>
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
