import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import StatCard from "../../components/dashboard/StatCard";
import TaskPieChart from "../../components/dashboard/TaskPieChart";
import ProductivityChart from "../../components/dashboard/ProductivityChart";
import ActivityFeed from "../../components/dashboard/ActivityFeed";
import RecentTasks from "../../components/dashboard/RecentTasks";

import api from "../../services/api";

import {
  FolderKanban,
  CheckSquare,
  AlertTriangle,
  TrendingUp
} from "lucide-react";

function AdminDashboard() {

  const [analytics, setAnalytics] =
    useState(null);

  const fetchAnalytics = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const { data } = await api.get(
        "/analytics",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setAnalytics(data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchAnalytics();

  }, []);

  return (
    <DashboardLayout>

      {/* Header */}
      <div>

        <h1 className="text-4xl font-black">
          Welcome back, Tanya 👋
        </h1>

        <p className="text-zinc-500 mt-2">
          Here's your productivity overview.
        </p>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mt-10">

        <StatCard
          title="Total Projects"
          value={analytics?.totalProjects || 0}
          color="#FF8C42"
          icon={<FolderKanban />}
        />

        <StatCard
          title="Completed Tasks"
          value={analytics?.completedTasks || 0}
          color="#22C55E"
          icon={<CheckSquare />}
        />

        <StatCard
          title="Overdue Tasks"
          value={analytics?.overdueTasks || 0}
          color="#EF4444"
          icon={<AlertTriangle />}
        />

        <StatCard
          title="Productivity"
          value={`${analytics?.productivity || 0}%`}
          color="#3B82F6"
          icon={<TrendingUp />}
        />

      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6 mt-10">

        <TaskPieChart analytics={analytics} />

        <ProductivityChart analytics={analytics} />

      </div>

      {/* Bottom Widgets */}
      <div className="grid grid-cols-2 gap-6 mt-10">

        <ActivityFeed />

        <RecentTasks />

      </div>

    </DashboardLayout>
  );
}

export default AdminDashboard;