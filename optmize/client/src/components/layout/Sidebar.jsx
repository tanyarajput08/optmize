import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  BarChart3,
  Users,
  Bell,
  Settings
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard"
  },
  {
    title: "Projects",
    icon: FolderKanban,
    path: "/projects"
  },
  {
    title: "Tasks",
    icon: CheckSquare,
    path: "/tasks"
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics"
  },
  {
    title: "Team",
    icon: Users,
    path: "/team"
  },
  {
    title: "Notifications",
    icon: Bell,
    path: "/notifications"
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings"
  }
];

function Sidebar() {

  const location = useLocation();

  return (
    <div className="w-[270px] min-h-screen bg-[#121212] border-r border-zinc-800 p-5 flex flex-col">

      {/* Logo */}
      <div className="mb-10">

        <h1 className="text-3xl font-black gradient-text">
          Optmize
        </h1>

        <p className="text-zinc-500 text-sm mt-1">
          Team Productivity Platform
        </p>

      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-3">

        {menuItems.map((item, index) => {

          const Icon = item.icon;

          return (
            <Link
              to={item.path}
              key={index}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group
              
              ${
                location.pathname === item.path
                  ? "bg-orange-400 text-black shadow-lg shadow-orange-500/20"
                  : "text-zinc-300 hover:bg-orange-400 hover:text-black"
              }`}
            >

              <Icon
                size={22}
                className="group-hover:scale-110 transition-transform"
              />

              <span className="font-medium">
                {item.title}
              </span>

            </Link>
          );
        })}

      </div>

      {/* Bottom User Card */}
      <div className="mt-auto glass-card rounded-3xl p-4 flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-black font-bold">
          T
        </div>

        <div>
          <h3 className="font-semibold">
            Tanya
          </h3>

          <p className="text-zinc-500 text-sm">
            Admin
          </p>
        </div>

      </div>

    </div>
  );
}

export default Sidebar;