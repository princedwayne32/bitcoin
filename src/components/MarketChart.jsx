import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useCrypto } from '../context/CryptoContext';

const MarketChart = () => {
  const { coins } = useCrypto();

  // Mapping live data for the chart
  const data = coins.slice(0, 6).map(coin => ({
    name: coin.symbol.toUpperCase(),
    price: coin.current_price,
  }));

  return (
    <div className="h-full w-full">
      <h2 className="text-lg font-bold mb-4 text-slate-300 uppercase tracking-widest">Price Overview (USD)</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis hide />
            <Tooltip 
              cursor={{fill: '#1e293b'}}
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
            />
            <Bar dataKey="price" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#22d3ee' : '#3b82f6'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default MarketChart;