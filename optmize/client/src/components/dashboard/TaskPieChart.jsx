import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Completed", value: 14 },
  { name: "In Progress", value: 8 },
  { name: "Pending", value: 5 }
];

const COLORS = ["#FF8C42", "#FDBA74", "#52525B"];

function TaskPieChart() {
  return (
    <div className="glass-card rounded-3xl p-6 h-[350px]">

      <h2 className="text-2xl font-bold mb-6">
        Task Status
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={110}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TaskPieChart;