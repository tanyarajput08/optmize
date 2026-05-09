import { motion } from "framer-motion";
import { Mail, Phone, MoreHorizontal } from "lucide-react";
import DashboardLayout from "../../layouts/DashboardLayout";

const teamMembers = [
  {
    id: 1,
    name: "Tanya Rajput",
    role: "Admin & Lead Developer",
    email: "tanya@optimixe.com",
    avatar: "T",
    status: "online",
    tasksCompleted: 145,
    bgColor: "bg-orange-500",
  },
  {
    id: 2,
    name: "Alex Johnson",
    role: "UI/UX Designer",
    email: "alex@optimixe.com",
    avatar: "A",
    status: "online",
    tasksCompleted: 89,
    bgColor: "bg-blue-500",
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Backend Engineer",
    email: "sarah@optimixe.com",
    avatar: "S",
    status: "offline",
    tasksCompleted: 210,
    bgColor: "bg-green-500",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Product Manager",
    email: "michael@optimixe.com",
    avatar: "M",
    status: "online",
    tasksCompleted: 56,
    bgColor: "bg-purple-500",
  },
  {
    id: 5,
    name: "Emma Davis",
    role: "Marketing Head",
    email: "emma@optimixe.com",
    avatar: "E",
    status: "offline",
    tasksCompleted: 112,
    bgColor: "bg-pink-500",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Sales Lead",
    email: "james@optimixe.com",
    avatar: "J",
    status: "online",
    tasksCompleted: 180,
    bgColor: "bg-yellow-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

function Team() {
  return (
    <DashboardLayout>
      <div className="w-full">
        {/* Header */}
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black">Our Team</h1>
            <p className="text-zinc-500 mt-2">
              Manage team members, roles, and permissions.
            </p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-400 text-black font-bold py-2 px-6 rounded-xl transition-colors shadow-lg shadow-orange-500/20">
            + Add Member
          </button>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 relative overflow-hidden group cursor-pointer"
            >
              {/* Background gradient effect on hover */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${member.bgColor} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full`} />

              <div className="flex justify-between items-start mb-6">
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg ${member.bgColor}`}
                  >
                    {member.avatar}
                  </div>
                  {member.status === "online" && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-[#121212] rounded-full"></div>
                  )}
                </div>
                <button className="text-zinc-500 hover:text-white transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-orange-400 font-medium text-sm mb-4">
                {member.role}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-zinc-400 text-sm">
                  <Mail size={16} className="mr-3" />
                  {member.email}
                </div>
                <div className="flex items-center text-zinc-400 text-sm">
                  <Phone size={16} className="mr-3" />
                  +1 (555) 000-{member.id * 1000}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
                <div className="text-sm">
                  <span className="text-zinc-500 block">Tasks Done</span>
                  <span className="text-white font-bold text-lg">
                    {member.tasksCompleted}
                  </span>
                </div>
                <button className="text-sm text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                  View Profile &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </DashboardLayout>
  );
}

export default Team;
