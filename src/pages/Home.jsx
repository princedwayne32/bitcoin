import { useEffect, useRef } from 'react';
import { useFetchCrypto } from '../hooks/useFetchCrypto';
import MarketChart from '../components/MarketChart';

const Home = () => {
  const { loading, error } = useFetchCrypto();
  const searchInputRef = useRef(null);

  useEffect(() => {
    // The "Laser Pointer" effect: auto-focus the input on load
    if (searchInputRef.current) searchInputRef.current.focus();
  }, []);

  if (loading) return <div className="p-10 text-white">Scanning Blockchain...</div>;
  if (error) return <div className="p-10 text-red-500">Error: {error}</div>;

  return (
    <div className="p-10 bg-gray-900 min-h-screen">
      <input 
        ref={searchInputRef}
        type="text" 
        placeholder="Search coins..." 
        className="p-2 rounded bg-gray-800 text-white border border-cyan-500 w-full mb-6"
      />
      <MarketChart />
    </div>
  );
};

export default Home;