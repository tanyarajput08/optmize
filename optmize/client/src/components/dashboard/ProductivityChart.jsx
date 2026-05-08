import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { day: "Mon", tasks: 4 },
  { day: "Tue", tasks: 7 },
  { day: "Wed", tasks: 5 },
  { day: "Thu", tasks: 9 },
  { day: "Fri", tasks: 11 },
  { day: "Sat", tasks: 6 }
];

function ProductivityChart() {
  return (
    <div className="glass-card rounded-3xl p-6 h-[350px]">

      <h2 className="text-2xl font-bold mb-6">
        Weekly Productivity
      </h2>

      <ResponsiveContainer width="100%" height="85%">

        <LineChart data={data}>

          <XAxis dataKey="day" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="tasks"
            stroke="#FF8C42"
            strokeWidth={4}
          />

        </LineChart>

      </ResponsiveContainer>
    </div>
  );
}

export default ProductivityChart;