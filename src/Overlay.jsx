export default function Overlay() {
  return (
    <div className="overlay">
      <div className="w-[362px] h-[394px] bg-[#2D3436]/98 p-[32px] justify-center items-center gap-[16px] flex flex-col border border-[#848485] rounded-[12px]">
        <div className="JadwalRuang flex flex-row w-full border">
          <div className="Jadwal flex flex-col">
            <label
              htmlFor="Title"
              className="font-sora font-light text-white text-[16px]"
            >
              Jadwal Hari,
            </label>
            <label
              htmlFor="Subtitle"
              className="font-sora text-white text-[24px] font-bold"
            >
              Senin
            </label>
          </div>

          <div className="Ruang flex flex-col">
            <label
              htmlFor="Title"
              className="font-sora font-light text-white text-[16px]"
            >
              Ruangan,{" "}
            </label>
            <label
              htmlFor="Subtitle"
              className="font-sora text-white text-[24px] font-bold"
            >
              Ruang 8
            </label>
          </div>
        </div>

        <div className="Informasi flex flex-col gap-[4px] w-full">
          <div className="Card-1 border">
            <div className="NamaGuru flex justify-start items-center">
              <label
                htmlFor="Title"
                className="font-sora font-semibold text-white pr-[8px] text-[16px]"
              >
                Nama Guru:
              </label>
              <label
                htmlFor="NamaGuru"
                className="font-sora font-light text-white text-[14px] justify-center items-center"
              >
                {" "}
                example guru
              </label>
            </div>
            <div className="MapelJam flex flex-row justify-between mt-[10px]">
              <div className="Mapel bg-[#31C774] py-[4px] px-[10px] rounded-full">
                <label htmlFor="NamaMapel" className="text-white font-semibold font-sora text-[12px] flex justify-center items-center">Mapel ada disni</label>
              </div>
              <div className="Jam flex border border-[#31C774] py-[4px] px-[10px] rounded-full ">
                <label htmlFor="Jam" className="text-white font-semibold font-sora text-[12px] flex justify-center items-center">07:00 - 08:00</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
