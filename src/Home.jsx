import { useState } from 'react';

// Data jadwal
const jadwalData = {
  senin: {
    ruang: "R Kelas 4",
    jadwal: [
      { mapel: "Pendidikan Agama", jam: "08.30 - 10.00", guru: "Miftahul Maf'ulah, S.Ag" },
      { mapel: "Bahasa Inggris", jam: "12.15 - 13.45", guru: "Kalim, S.Pd" },
      { mapel: "Bahasa Indonesia", jam: "10.15 - 11.45", guru: "Ever Nicolas, S.Pd" },
      { mapel: "Pendidikan Olahraga", jam: "14.00 - 15.30", guru: "Dani Eko Prasetiyo, S.Pd" }
    ]
  },
  selasa: {
    ruang: "Lab PPLG 3",
    jadwal: [
      { mapel: "Informatika", jam: "08.30 - 10.00", guru: "Andreas Aris Suhartono, S.T" },
      { mapel: "Pemrograman Dasar", jam: "10.15 - 11.45", guru: "Agung Setiawan, S.Kom" },
      { mapel: "Pemrograman Dasar", jam: "14.00 - 15.30", guru: "Yari Imantis Abdillah, S.Pd" }
    ]
  },
  rabu: {
    ruang: "R Kelas 12",
    jadwal: [
      { mapel: "Bahasa Inggris", jam: "07.00 - 08.30", guru: "Kalim, S.Pd" },
      { mapel: "Matematika", jam: "08.30 - 10.00", guru: "Chofiriyah, S.Pd, M.Pd" },
      { mapel: "Projek Penguatan Profil Pelajar Pancasila", jam: "10.15 - 11.45", guru: "Sri Astuti Setiani, S.Pd" },
      { mapel: "Seni Musik", jam: "12.15 - 13.45", guru: "Elin Surya Shabrina, S.Pd" },
      { mapel: "Sejarah", jam: "14.00 - 15.30", guru: "Sri Astuti Setiani, S.Pd" }
    ]
  },
  kamis: {
    ruang: "R Kelas 11",
    jadwal: [
      { mapel: "Matematika", jam: "07.00 - 08.30", guru: "Chofiriyah, S.Pd, M.Pd" },
      { mapel: "IPAS", jam: "10.15 - 11.45", guru: "Uly Fitrisia Ghani, S.Pd" },
      { mapel: "Bahasa Jawa", jam: "12.15 - 13.45", guru: "Fanatut Khikmatil, S.Pd" },
      { mapel: "Bahasa Inggris", jam: "14.00 - 15.30", guru: "Ever Nicolas, S.Pd" }
    ]
  },
  jumat: {
    ruang: "Lab PPLG 4",
    jadwal: [
      { mapel: "IPAS", jam: "07.00 - 08.30", guru: "Uly Fitrisia Ghani, S.Pd" },
      { mapel: "Pengembangan Game", jam: "08.30 - 10.00", guru: "Ahmad Zafir Hasmi, S.Pd" },
      { mapel: "KKA", jam: "10.15 - 11.45", guru: "Ahmad Zafir Hasmi, S.Pd" },
      { mapel: "Pemrograman Dasar", jam: "12.15 - 13.45", guru: "Agung Setiawan, S.Kom" }
    ]
  }
};

// Day Selection Component
function DaySelection({ onSelectDay, onClose }) {
  const days = [
    { key: 'senin', name: 'Senin', color: 'from-emerald-400 to-teal-500' },
    { key: 'selasa', name: 'Selasa', color: 'from-blue-400 to-indigo-500' },
    { key: 'rabu', name: 'Rabu', color: 'from-purple-400 to-pink-500' },
    { key: 'kamis', name: 'Kamis', color: 'from-orange-400 to-red-500' },
    { key: 'jumat', name: 'Jumat', color: 'from-green-400 to-emerald-500' }
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-in fade-in duration-300" onClick={onClose}>
      <div 
        className="w-[360px] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl p-8 flex flex-col gap-6 border border-slate-600/30 rounded-3xl shadow-2xl animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="font-sora text-white text-2xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Pilih Hari</h2>
          <p className="font-manrope text-slate-300 text-sm">Pilih hari untuk melihat jadwal pelajaran</p>
        </div>
        
        <div className="flex flex-col gap-3">
          {days.map((day, index) => (
            <button
              key={day.key}
              onClick={() => onSelectDay(day.key)}
              className={`relative overflow-hidden bg-gradient-to-r ${day.color} p-[1px] rounded-2xl hover:scale-105 transform transition-all duration-200 hover:shadow-lg group animate-in slide-in-from-left duration-300`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-slate-800/90 backdrop-blur rounded-2xl py-4 px-6 group-hover:bg-slate-700/90 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <span className="font-sora text-white text-lg font-semibold">{day.name}</span>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${day.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        <button 
          onClick={onClose}
          className="bg-slate-700/80 hover:bg-slate-600/80 text-slate-300 hover:text-white px-6 py-3 rounded-2xl font-sora font-medium text-sm transition-all duration-200 border border-slate-600/30"
        >
          Batal
        </button>
      </div>
    </div>
  );
}

// Overlay component
function Overlay({ selectedDay, onClose, onBack }) {
  const dayData = jadwalData[selectedDay];
  const dayName = selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1);
  
  const subjectColors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500', 
    'from-emerald-500 to-teal-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500'
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-in fade-in duration-300" onClick={onClose}>
      <div 
        className="w-[420px] max-h-[85vh] overflow-y-auto bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl p-8 flex flex-col gap-6 border border-slate-600/30 rounded-3xl shadow-2xl animate-in slide-in-from-bottom-4 duration-300 custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header dengan gradient background */}
        <div className="relative bg-gradient-to-r from-emerald-500/20 to-teal-500/20 p-6 rounded-2xl border border-emerald-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-2xl"></div>
          <div className="relative flex justify-between items-start">
            <div>
              <span className="font-manrope text-emerald-300 text-sm font-medium uppercase tracking-wider">
                Jadwal Hari
              </span>
              <h2 className="font-sora text-white text-3xl font-bold mt-1">{dayName}</h2>
            </div>
            <div className="text-right">
              <span className="font-manrope text-emerald-300 text-sm font-medium uppercase tracking-wider">
                Ruangan
              </span>
              <p className="font-sora text-white text-xl font-bold mt-1">{dayData.ruang}</p>
            </div>
          </div>
        </div>

        {/* Jadwal Cards */}
        <div className="space-y-4">
          {dayData.jadwal.map((item, index) => {
            const colorClass = subjectColors[index % subjectColors.length];
            return (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-5 hover:from-slate-600/50 hover:to-slate-700/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg animate-in slide-in-from-right duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Nama Guru */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Pengajar</span>
                    <p className="text-white font-sora font-medium text-sm leading-tight">{item.guru}</p>
                  </div>
                </div>
                
                {/* Mata Pelajaran & Waktu */}
                <div className="flex items-center gap-3">
                  <div className={`flex-1 bg-gradient-to-r ${colorClass} p-[1px] rounded-xl group-hover:shadow-lg transition-all duration-300`}>
                    <div className="bg-slate-800/80 backdrop-blur rounded-xl py-3 px-4">
                      <span className="text-white font-sora font-semibold text-sm block text-center leading-tight">
                        {item.mapel}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/60 border border-slate-500/30 rounded-xl py-3 px-4 min-w-fit">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-white font-sora font-semibold text-sm whitespace-nowrap">
                        {item.jam}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 mt-6 pt-4 border-t border-slate-600/30">
          <button 
            onClick={onBack}
            className="flex-1 bg-slate-700/80 hover:bg-slate-600/80 text-slate-300 hover:text-white px-6 py-3 rounded-2xl font-sora font-medium text-sm transition-all duration-200 border border-slate-600/30 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Pilih Hari Lain
          </button>
          <button 
            onClick={onClose}
            className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 rounded-2xl font-sora font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Tutup
          </button>
        </div>
      </div>
      
      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #0d9488);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #0f766e);
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  const [showDaySelection, setShowDaySelection] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedDay, setSelectedDay] = useState('senin');

  const handleShowJadwal = () => {
    setShowDaySelection(true);
  };

  const handleSelectDay = (day) => {
    setSelectedDay(day);
    setShowDaySelection(false);
    setShowOverlay(true);
  };

  const handleCloseAll = () => {
    setShowDaySelection(false);
    setShowOverlay(false);
  };

  const handleBackToDaySelection = () => {
    setShowOverlay(false);
    setShowDaySelection(true);
  };

  return (
    <div className="flex bg-gradient-to-br from-[#092220] via-[#0a2f2a] to-[#106351] min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="mx-6 mt-16 flex flex-col justify-between w-full relative z-10">
        <div className="flex flex-col">
          {/* App Title with better visual hierarchy */}
          <div className="flex flex-col mb-20 animate-in slide-in-from-top duration-700">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="font-sora font-semibold text-emerald-300 text-sm uppercase tracking-widest">
                Jadwal X PPLG 2
              </span>
            </div>
            <span className="font-sora font-bold text-white text-lg">Jadwal Pelajaran Harian</span>
          </div>

          {/* Main Heading with enhanced typography */}
          <div className="flex flex-col gap-6 animate-in slide-in-from-left duration-700 delay-200">
            <h1 className="font-sora font-bold text-4xl text-white leading-tight">
              Kelola Jadwal harian, <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Ruang, dan Nama Guru
              </span>
              <br />dengan mudah.
            </h1>
            <p className="font-manrope font-normal text-base text-slate-300 leading-relaxed max-w-md">
              Cukup buka sekali, semua mata pelajaran dan info penting langsung siap di depan mata
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-16 animate-in slide-in-from-bottom duration-700 delay-400">
            <button 
              onClick={handleShowJadwal}
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-500/20 to-teal-500/20 flex-1 text-left px-8 py-4 rounded-2xl border border-emerald-500/30 hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-between">
                <span className="font-manrope font-medium text-slate-200 text-sm">
                  Klik untuk melihat jadwal
                </span>
                <svg className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <button 
              onClick={handleShowJadwal}
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 rounded-2xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg min-w-fit"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-sora font-semibold text-white text-sm">
                  Cek Jadwal
                </span>
              </div>
            </button>
          </div>

          {/* Enhanced Update Notice */}
          <div className="flex flex-col items-center gap-1 mt-14 animate-in fade-in duration-700 delay-600">
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
              <span className="text-xs font-manrope">Terakhir diupdate: 17 Agustus 2025</span>
              <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Footer */}
        <div className="flex justify-center items-center mt-auto pb-8 animate-in fade-in duration-700 delay-800">
          <span className="text-slate-400 font-sora font-light text-xs">
            © 2025 Raditya Rayhan. All rights reserved.
          </span>
        </div>
      </div>
      
      {/* Render modals */}
      {showDaySelection && (
        <DaySelection 
          onSelectDay={handleSelectDay} 
          onClose={handleCloseAll} 
        />
      )}
      
      {showOverlay && (
        <Overlay 
          selectedDay={selectedDay}
          onClose={handleCloseAll}
          onBack={handleBackToDaySelection}
        />
      )}
    </div>
  );
}