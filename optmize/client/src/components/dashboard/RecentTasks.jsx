const tasks = [
  {
    title: "Design Landing Page",
    status: "Completed"
  },
  {
    title: "Implement JWT Auth",
    status: "In Progress"
  },
  {
    title: "Create Kanban Board",
    status: "Pending"
  }
];

function RecentTasks() {
  return (
    <div className="glass-card rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Tasks
      </h2>

      <div className="flex flex-col gap-4">

        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#1A1A1A] p-4 rounded-2xl border border-zinc-800"
          >
            <h3>{task.title}</h3>

            <span className="text-orange-400 text-sm">
              {task.status}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}

export default RecentTasks;