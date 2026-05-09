import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend
} from "recharts";
import DashboardLayout from "../../layouts/DashboardLayout";

const growthData = [
  { name: "Jan", users: 4000, revenue: 2400 },
  { name: "Feb", users: 3000, revenue: 1398 },
  { name: "Mar", users: 2000, revenue: 9800 },
  { name: "Apr", users: 2780, revenue: 3908 },
  { name: "May", users: 1890, revenue: 4800 },
  { name: "Jun", users: 2390, revenue: 3800 },
  { name: "Jul", users: 3490, revenue: 4300 },
];

const teamPerformanceData = [
  { name: "Design", completed: 85, pending: 15 },
  { name: "Frontend", completed: 92, pending: 8 },
  { name: "Backend", completed: 78, pending: 22 },
  { name: "Marketing", completed: 65, pending: 35 },
  { name: "Sales", completed: 95, pending: 5 },
];

const skillData = [
  { subject: "React", A: 120, B: 110, fullMark: 150 },
  { subject: "Node.js", A: 98, B: 130, fullMark: 150 },
  { subject: "UI/UX", A: 86, B: 130, fullMark: 150 },
  { subject: "Python", A: 99, B: 100, fullMark: 150 },
  { subject: "Marketing", A: 85, B: 90, fullMark: 150 },
  { subject: "Sales", A: 65, B: 85, fullMark: 150 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a1a1a] p-4 border border-zinc-800 rounded-xl shadow-2xl shadow-black/50">
        <p className="text-zinc-300 font-medium mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }} className="text-sm font-semibold">
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

function Analytics() {
  return (
    <DashboardLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-10">
          <h1 className="text-4xl font-black">Analytics Overview</h1>
          <p className="text-zinc-500 mt-2">
            Dive deep into your team's performance and growth metrics.
          </p>
        </motion.div>

        {/* Top Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Growth Area Chart */}
          <motion.div variants={itemVariants} className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-6 text-zinc-200">Platform Growth</h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#52525b" tick={{ fill: '#71717a' }} />
                  <YAxis stroke="#52525b" tick={{ fill: '#71717a' }} />
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="users" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" />
                  <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Radar Chart */}
          <motion.div variants={itemVariants} className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-6 text-zinc-200">Skill Distribution</h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                  <PolarGrid stroke="#3f3f46" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#a1a1aa' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} tick={{ fill: '#71717a' }} />
                  <Radar name="Team Alpha" dataKey="A" stroke="#f97316" fill="#f97316" fillOpacity={0.5} />
                  <Radar name="Team Beta" dataKey="B" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Tooltip content={<CustomTooltip />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Bottom Chart */}
        <motion.div variants={itemVariants} className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 shadow-xl">
          <h2 className="text-xl font-bold mb-6 text-zinc-200">Department Performance (Tasks)</h2>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={teamPerformanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                barSize={40}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="name" stroke="#52525b" tick={{ fill: '#71717a' }} />
                <YAxis stroke="#52525b" tick={{ fill: '#71717a' }} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#27272a', opacity: 0.4 }} />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="completed" name="Completed Tasks" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} />
                <Bar dataKey="pending" name="Pending Tasks" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

      </motion.div>
    </DashboardLayout>
  );
}

export default Analytics;
