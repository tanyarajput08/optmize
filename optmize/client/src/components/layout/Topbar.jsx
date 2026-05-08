import { Bell, Search } from "lucide-react";

function Topbar() {
  return (
    <div className="h-[80px] border-b border-zinc-800 bg-[#121212]/80 backdrop-blur-lg flex items-center justify-between px-8">

      <div className="flex items-center gap-3 bg-[#1A1A1A] px-4 py-3 rounded-2xl w-[350px]">

        <Search className="text-zinc-500" size={20} />

        <input
          type="text"
          placeholder="Search tasks, projects..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      <div className="flex items-center gap-5">

        <button className="relative p-3 rounded-2xl bg-[#1A1A1A] hover-glow">

          <Bell />

          <span className="absolute top-2 right-2 w-2 h-2 bg-orange-400 rounded-full" />
        </button>

        <div className="flex items-center gap-3 bg-[#1A1A1A] px-4 py-2 rounded-2xl">

          <div className="w-10 h-10 rounded-full bg-orange-400" />

          <div>
            <h3 className="font-semibold text-sm">
              Tanya
            </h3>

            <p className="text-zinc-500 text-xs">
              Admin
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Topbar;