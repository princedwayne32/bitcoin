import { useState } from 'react';
import { useCrypto } from '../context/CryptoContext';
import { useFetchCrypto } from '../hooks/useFetchCrypto';
import MarketChart from '../components/MarketChart';

const Home = () => {
  const { coins } = useCrypto();
  const { loading, error } = useFetchCrypto();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="p-20 text-center animate-pulse text-cyan-400">CONNECTING TO NODES...</div>;
  if (error) return <div className="p-20 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Search Interaction */}
      <div className="flex justify-between items-center bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Market Pulse</h2>
          <p className="text-slate-400 text-sm">Real-time e-currency tracking</p>
        </div>
        <input 
          type="text"
          placeholder="Search Currency..."
          className="bg-slate-800 border border-slate-700 p-3 rounded-lg w-64 focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Visual Data Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <MarketChart />
        </div>
        
        {/* Interactive List */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 h-[450px] overflow-y-auto">
          <h3 className="text-xl font-semibold mb-4 border-b border-slate-800 pb-2">Live Ranking</h3>
          <div className="space-y-4">
            {filteredCoins.map(coin => (
              <div key={coin.id} className="flex justify-between items-center p-3 hover:bg-slate-800 rounded-xl transition-all group">
                <div className="flex items-center gap-3">
                  <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-bold uppercase">{coin.symbol}</p>
                    <p className="text-xs text-slate-500">{coin.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono text-cyan-400">${coin.current_price.toLocaleString()}</p>
                  <p className={`text-xs ${coin.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {coin.price_change_percentage_24h?.toFixed(2)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;