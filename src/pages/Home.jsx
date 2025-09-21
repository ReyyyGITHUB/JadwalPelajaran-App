import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import jadwalData from "../data/jadwalData"; // ✅ Import data dari file baru

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-white">
        <div className="flex flex-col items-center justify-center text-center px-[16px] pt-[48px]">
          <div className="flex justify-between w-full HeaderContainer">
            <Header />
          </div>

          <div className="Title plusjakarta flex justify-start w-full mt-[48px]">
            <h1 className="w-[300px] text-[32px] text-black font-semibold text-left font-med">
              Atur Jadwal Pelajaran Anda
            </h1>
          </div>

          <div className="SearchBar flex mt-[32px] justify-center items-center w-full">
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

          <div className="flex items-center px-3 py-2 mt-8 bg-gray-100 border border-gray-200 rounded-lg LastUpdate w-fit">
            <h1 className="text-xs font-normal text-gray-600 plusjakarta">
              📝 Note: Terakhir diperbarui pada{" "}
              <span className="font-medium text-gray-800">18 Agustus 2025</span>
            </h1>
          </div>

          <div className="left-0 right-0 flex justify-center sticky bottom-0 mt-[12px">
            {/* Footer */}
            <Footer version={"2.0.15"} />
          </div>
        </div>
      </div>
    </>
  );
}
