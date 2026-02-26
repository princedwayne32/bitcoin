import { useEffect, useRef } from 'react';
import { useFetchCrypto } from '../hooks/useFetchCrypto';
import MarketChart from '../components/MarketChart';

const Home = () => {
  // Use the hook to trigger the API call [cite: 676]
  const { loading, error } = useFetchCrypto();
  const searchInputRef = useRef(null);

  useEffect(() => {
    // Focus the search bar immediately (the "Laser Pointer") [cite: 672]
    if (searchInputRef.current) searchInputRef.current.focus();
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center h-64 text-cyan-400 animate-pulse font-bold">
      SCANNING BLOCKCHAIN...
    </div>
  );

  if (error) return (
    <div className="p-10 text-red-400 bg-red-900/20 rounded-lg border border-red-500 m-5">
      ⚠️ Error: {error}
    </div>
  );

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <label className="text-slate-400 text-sm mb-2 block uppercase tracking-widest">Search Market</label>
        <input 
          ref={searchInputRef}
          type="text" 
          placeholder="Search Bitcoin, Ethereum..." 
          className="w-full p-4 rounded-xl bg-slate-900 text-white border border-slate-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all shadow-inner"
        />
      </div>
      
      {/* The chart component that consumes Global State [cite: 660, 661] */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
        <MarketChart />
      </div>
    </div>
  );
};

export default Home;