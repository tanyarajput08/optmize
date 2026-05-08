function TaskCard({ task }) {

  return (
    <div className="glass-card rounded-3xl p-6 hover-glow">

      <div className="flex justify-between items-start">

        <h2 className="text-2xl font-bold">
          {task.title}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm
          ${
            task.priority === "High"
              ? "bg-red-500/20 text-red-400"
              : task.priority === "Medium"
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-green-500/20 text-green-400"
          }`}
        >
          {task.priority}
        </span>

      </div>

      <p className="text-zinc-400 mt-4">
        {task.description}
      </p>

      <div className="mt-6 flex justify-between items-center">

        <span className="text-orange-400">
          {task.status}
        </span>

        <span className="text-zinc-500 text-sm">
          {new Date(task.deadline).toLocaleDateString()}
        </span>

      </div>

    </div>
  );
}

export default TaskCard;