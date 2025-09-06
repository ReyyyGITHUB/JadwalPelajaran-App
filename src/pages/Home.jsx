import Card from "../components/Card";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const jadwalData = {
    senin: {
      ruang: "R Kelas 4",
      jadwal: [
        {
          mapel: "Agama",
          jam: "08.30 - 10.00",
          guru: "Miftahul Maf'ulah, S.Ag",
        },
        { mapel: "Bahasa Indonesia", jam: "12.15 - 13.45", guru: "Kalim, S.Pd" },
        {
          mapel: "Bahasa Inggris",
          jam: "10.15 - 11.45",
          guru: "Ever Nicolas, S.Pd",
        },
        {
          mapel: "PJOK",
          jam: "14.00 - 15.30",
          guru: "Dani Eko Prasetiyo, S.Pd",
        },
      ],
    },
    selasa: {
      ruang: "Lab PPLG 3",
      jadwal: [
        {
          mapel: "Informatika",
          jam: "08.30 - 10.00",
          guru: "Andreas Aris Suhartono, S.T",
        },
        {
          mapel: "PPLG - Agung",
          jam: "10.15 - 11.45",
          guru: "Agung Setiawan, S.Kom",
        },
        {
          mapel: "PPLG - Imanita",
          jam: "14.00 - 15.30",
          guru: "Yari Imantis Abdillah, S.Pd",
        },
      ],
    },
    rabu: {
      ruang: "R Kelas 12",
      jadwal: [
        { mapel: "Bahasa Indonesia", jam: "07.00 - 08.30", guru: "Kalim, S.Pd" },
        {
          mapel: "Matematika",
          jam: "08.30 - 10.00",
          guru: "Chofiriyah, S.Pd, M.Pd",
        },
        {
          mapel: "PPKN",
          jam: "10.15 - 11.45",
          guru: "Sri Astuti Setiani, S.Pd",
        },
        {
          mapel: "Seni Musik",
          jam: "12.15 - 13.45",
          guru: "Elin Surya Shabrina, S.Pd",
        },
        {
          mapel: "Sejarah",
          jam: "14.00 - 15.30",
          guru: "Sri Astuti Setiani, S.Pd",
        },
      ],
    },
    kamis: {
      ruang: "R Kelas 11",
      jadwal: [
        {
          mapel: "Matematika",
          jam: "07.00 - 08.30",
          guru: "Chofiriyah, S.Pd, M.Pd",
        },
        {
          mapel: "IPAS",
          jam: "10.15 - 11.45",
          guru: "Uly Fitrisia Ghani, S.Pd",
        },
        {
          mapel: "Bahasa Jawa",
          jam: "12.15 - 13.45",
          guru: "Fanatut Khikmatil, S.Pd",
        },
        {
          mapel: "Bahasa Inggris",
          jam: "14.00 - 15.30",
          guru: "Ever Nicolas, S.Pd",
        },
      ],
    },
    jumat: {
      ruang: "Lab PPLG 4",
      jadwal: [
        {
          mapel: "IPAS",
          jam: "07.00 - 08.30",
          guru: "Uly Fitrisia Ghani, S.Pd",
        },
        {
          mapel: "Pengembangan Game",
          jam: "08.30 - 10.00",
          guru: "Ahmad Zafir Hasmi, S.Pd",
        },
        { mapel: "KKA", jam: "10.15 - 11.45", guru: "Ahmad Zafir Hasmi, S.Pd" },
        {
          mapel: "PPLG - Agung",
          jam: "12.15 - 13.45",
          guru: "Agung Setiawan, S.Kom",
        },
      ],
    },
  };
  return (
    <>
      <div className="h-screen w-screen bg-white overflow-hidden">
        <div className="flex flex-col items-center justify-center text-center px-[16px] pt-[48px]">
          <div className="HeaderContainer flex justify-between w-full">
            <Header />
          </div>

          <div className="Title plusjakarta flex justify-start w-full mt-[48px] ">
            <h1 className=" w-[300px] text-[32px] text-black font-semibold text-left font-med ">
              Atur Jadwal Pelajaran Anda
            </h1>
          </div>

          <div className="SearchBar flex mt-[32px] justify-center items-center">
            <SearchBar />
          </div>

          <div className="CardContainer py-[8px] flex flex-row w-full mt-12 overflow-x-auto flex-nowrap gap-4 scrollbar-hide">
            <div className="shrink-0">
              <div className="flex flex-wrap gap-4">
                {Object.entries(jadwalData).map(([hariKey, data], idx) => (
                  <Card key={idx} hariKey={hariKey} data={data} />
                ))}
              </div>
            </div>
          </div>

          <div className="LastUpdate flex items-center mt-8 px-3 py-2 bg-gray-100 rounded-lg border border-gray-200 w-fit">
            <h1 className="plusjakarta text-xs text-gray-600 font-normal">
              📝 Note: Terakhir diperbarui pada{" "}
              <span className="font-medium text-gray-800">18 Agustus 2025</span>
            </h1>
          </div>

          <div className="Copyright fixed bottom-8 left-0 right-0 flex justify-center">
            <p className="plusjakarta text-xs text-gray-400">
              © 2025 Raditya Rayhan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
