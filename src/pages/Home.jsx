import { useState, useRef, useEffect } from "react";
import { useCrypto } from "../context/CryptoContext";
import { useFetchCrypto } from "../hooks/useFetchCrypto";
import MarketChart from "../components/MarketChart";

export default function Home() {
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

  if (loading) return <p className="p-10">🔄 Scanning Blockchain...</p>;
  if (error) return <p className="p-10 text-red-500">{error}</p>;

  return (
    <div className="p-6">

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search coin..."
          className="p-3 rounded bg-slate-800 w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-3 rounded bg-slate-800"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="php">PHP</option>
        </select>
      </div>

      {/* Coins List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCoins.map((coin) => (
          <div
            key={coin.id}
            className="bg-slate-900 p-5 rounded-xl shadow hover:scale-105 transition"
          >
            <div className="flex items-center gap-3">
              <img src={coin.image} className="w-8" />
              <h2 className="font-bold">{coin.name}</h2>
            </div>

            <p className="mt-3 text-lg">
              {coin.current_price} {currency.toUpperCase()}
            </p>

            <p
              className={`mt-1 ${
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
}
