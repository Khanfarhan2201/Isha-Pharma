export default function IshaPreloader() {
    return (
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        style={{
            backgroundColor:"#000000",
            color:"#00FFFD",
          backgroundImage: "url('/bouncing-circles (1).svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "30%",
          backgroundPosition: "center",
        }}
      >
        <img
          src="/logo-1.png"  style={{width:"200px", height:"100px"}}
          alt="Isha Pharma"
          className="w-24 h-24 animate-pulse drop-shadow-[0_0_20px_rgba(34,197,94,0.5)] rounded-full"
        />
        <p className="mt-4 text-gray-800 text-sm font-medium animate-pulse tracking-wide">
          Isha Pharma is loading...
        </p>
      </div>
    );
  }
  