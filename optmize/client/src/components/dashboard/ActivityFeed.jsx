const activities = [
  "Tanya assigned a new task",
  "Harsh completed Dashboard UI",
  "Project deadline updated",
  "New member joined the team"
];

function ActivityFeed() {
  return (
    <div className="glass-card rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="flex flex-col gap-4">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] p-4 rounded-2xl border border-zinc-800"
          >
            {activity}
          </div>
        ))}

      </div>
    </div>
  );
}

export default ActivityFeed;