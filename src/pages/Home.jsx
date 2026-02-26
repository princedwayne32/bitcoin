import { useState, useRef, useEffect } from "react";
import { useCrypto } from "../context/CryptoContext";
import { useFetchCrypto } from "../hooks/useFetchCrypto";
import MarketChart from "../components/MarketChart";

const Home = () => {
  const { coins, currency, setCurrency } = useCrypto();
  const { loading, error } = useFetchCrypto();
  const [search, setSearch] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      
      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

        <input
          ref={inputRef}
          type="text"
          placeholder="Search coin..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-xl bg-gray-800 focus:outline-none"
        />

        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="p-3 rounded-xl bg-gray-800"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="php">PHP</option>
        </select>
      </div>

      {loading && <p className="text-cyan-400">Scanning Blockchain...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Coin List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCoins.map((coin) => (
          <div
            key={coin.id}
            className="bg-gray-900 p-5 rounded-2xl hover:scale-105 transition"
          >
            <div className="flex items-center gap-3">
              <img src={coin.image} alt="" className="w-8 h-8" />
              <h3 className="font-semibold">{coin.name}</h3>
            </div>

            <p className="mt-3 text-lg">
              {coin.current_price} {currency.toUpperCase()}
            </p>

            <p
              className={`mt-2 ${
                coin.price_change_percentage_24h > 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>

      <MarketChart />
    </div>
  );
};

export default Home;
