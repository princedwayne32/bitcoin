import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useCrypto } from "../context/CryptoContext";

export default function MarketChart() {
  const { coins } = useCrypto();

  const data = coins.slice(0, 10).map((coin) => ({
    name: coin.symbol.toUpperCase(),
    price: coin.current_price,
  }));

  return (
    <div className="h-96 bg-slate-900 mt-10 p-6 rounded-xl">
      <h2 className="mb-4 text-xl text-cyan-400">Top 10 Market Overview</h2>

      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#22d3ee" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
