export default function Header() {
  return (
    <header className="flex w-full justify-between items-center  py-2">
      {/* Profile Section */}
      <div className="flex flex-row items-center gap-4">
        <div className="w-10 h-10">
          <img
            src="/assets/profile.png"
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="text-[16px] plusjakarta font-normal text-black">
          Jadwal X PPLG 2
        </span>
      </div>

      {/* Notification Icon */}
      
    </header>
  );
}
