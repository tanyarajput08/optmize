import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Bell, Shield, LogOut, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";

const tabVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  exit: { y: -10, opacity: 0, transition: { duration: 0.2 } },
};

function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto w-full pb-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-black">Settings</h1>
          <p className="text-zinc-500 mt-2">
            Manage your account preferences and settings.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-zinc-800 mb-8 space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 pb-4 px-2 relative transition-colors ${
                  isActive ? "text-orange-400" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Icon size={20} />
                <span className="font-semibold">{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-orange-400 rounded-t-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "profile" && (
              <motion.div
                key="profile"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                      T
                    </div>
                    <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-2 px-4 rounded-xl transition-colors">
                      Change Avatar
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-zinc-400 text-sm font-medium mb-2">First Name</label>
                      <input type="text" defaultValue="Tanya" className="w-full bg-[#1a1a1a] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-zinc-400 text-sm font-medium mb-2">Last Name</label>
                      <input type="text" defaultValue="Rajput" className="w-full bg-[#1a1a1a] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-zinc-400 text-sm font-medium mb-2">Email Address</label>
                      <input type="email" defaultValue="tanya@optimixe.com" className="w-full bg-[#1a1a1a] border border-zinc-800 rounded-xl px-4 py-3 text-zinc-500 cursor-not-allowed" disabled />
                    </div>
                  </div>

                  <div className="pt-6">
                    <button className="bg-orange-500 hover:bg-orange-400 text-black font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2">
                      <Save size={20} />
                      Save Changes
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "notifications" && (
              <motion.div
                key="notifications"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-2xl font-bold mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  {["Email Notifications", "Push Notifications", "Weekly Report", "Task Assignments"].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-zinc-800/50 last:border-0">
                      <div>
                        <h3 className="font-semibold text-white">{item}</h3>
                        <p className="text-sm text-zinc-500 mt-1">Receive updates about {item.toLowerCase()}.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked={index < 2} />
                        <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                      </label>
                    </div>
                  ))}
                  <div className="pt-6">
                    <button className="bg-orange-500 hover:bg-orange-400 text-black font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2">
                      <Save size={20} />
                      Save Preferences
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "security" && (
              <motion.div
                key="security"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-2xl font-bold mb-6">Security Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-white mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-zinc-400 text-sm font-medium mb-2">Current Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-[#1a1a1a] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-zinc-400 text-sm font-medium mb-2">New Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-[#1a1a1a] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-zinc-800">
                    <h3 className="font-semibold text-white mb-4">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-zinc-500">Secure your account with 2FA.</p>
                      <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-2 px-4 rounded-xl transition-colors">
                        Enable 2FA
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Danger Zone - Logout */}
        <div className="mt-12 bg-red-500/10 border border-red-500/20 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-red-500 mb-2">Danger Zone</h2>
          <p className="text-red-400/70 mb-6">
            Logging out will end your current session and require you to sign in again.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-3 shadow-lg shadow-red-500/20"
          >
            <LogOut size={20} />
            Logout from Account
          </motion.button>
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Settings;
