import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useCrypto } from "../context/CryptoContext";

const MarketChart = () => {
  const { coins } = useCrypto();

  const chartData = coins.slice(0, 10).map((coin) => ({
    name: coin.symbol.toUpperCase(),
    price: coin.current_price,
  }));

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-xl mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Top 10 Price Overview
      </h2>

      <div className="h-80">
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#00f5ff"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketChart;
