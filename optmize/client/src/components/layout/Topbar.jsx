import { Bell, Search, LogOut, Settings as SettingsIcon, User } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="h-[80px] border-b border-zinc-800 bg-[#121212]/80 backdrop-blur-lg flex items-center justify-between px-8 relative z-50">

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

        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 bg-[#1A1A1A] hover:bg-zinc-800 transition-colors px-4 py-2 rounded-2xl focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center font-bold text-black text-lg">T</div>
            <div className="text-left">
              <h3 className="font-semibold text-sm">Tanya</h3>
              <p className="text-zinc-500 text-xs">Admin</p>
            </div>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 w-56 bg-[#1A1A1A] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="p-4 border-b border-zinc-800/50">
                  <p className="text-white font-medium">Tanya Rajput</p>
                  <p className="text-zinc-500 text-sm truncate">tanya@optimixe.com</p>
                </div>
                <div className="p-2 space-y-1">
                  <button 
                    onClick={() => { setIsDropdownOpen(false); navigate('/settings'); }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-colors"
                  >
                    <User size={18} /> Profile
                  </button>
                  <button 
                    onClick={() => { setIsDropdownOpen(false); navigate('/settings'); }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-colors"
                  >
                    <SettingsIcon size={18} /> Settings
                  </button>
                  <div className="my-1 border-t border-zinc-800/50" />
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2 text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors font-medium"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

export default Topbar;