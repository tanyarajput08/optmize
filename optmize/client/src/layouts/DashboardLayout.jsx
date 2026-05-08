import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#0D0D0D] text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-6">
          {children}
        </main>

      </div>
    </div>
  );
}

export default DashboardLayout;