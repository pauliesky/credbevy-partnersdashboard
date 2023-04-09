import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Total: 590 },
  { name: "Feb", Total: 400 },
  { name: "Mar", Total: 720 },
  { name: "Apr", Total: 350 },
  { name: "May", Total: 800 },
  { name: "Jun", Total: 1060 },
  { name: "Jul", Total: 800 },
  { name: "Aug", Total: 390 },
  { name: "Sep", Total: 640 },
  { name: "Oct", Total: 530 },
  { name: "Nov", Total: 330 },
  { name: "Dec", Total: 500 },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="99%" height="80%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 37, left: 20, bottom: 10 }}
      >
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="100%" stopColor="#8003cd80" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis
          axisLine={false}
          dataKey="name"
          stroke="gray"
          tickMargin={12}
          textAnchor="start"
          tickSize="0"
          tick={{
            fontFamily: "Manrope",
            fontSize: "14px",
            fontWeight: "500",
            fill: "#858688",
            stroke: "none",
            lineHeight: "19px",
          }}
          className="text-xs sm:text-sm"
        />
        <YAxis
          axisLine={false}
          textAnchor="end"
          tickSize="0"
          tickMargin={25}
          tick={{
            // stroke: '',
            fill: "#858688",
            stroke: "none",
            fontFamily: "Manrope",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "19px",
          }}
        />
        <CartesianGrid
          strokeDasharray={10}
          horizontal="true"
          vertical=""
          className="chartGrid"
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Total"
          stroke="#8003cd"
          fillOpacity={1}
          fill="url(#total)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
