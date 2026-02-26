// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CryptoProvider } from './context/CryptoContext';
import Home from './pages/Home';
import Analysis from './pages/Analysis';

function App() {
  return (
    <CryptoProvider>
      <Router>
        {/* Navigation Bar with Professional Styling  */}
        <nav className="p-5 bg-indigo-900 text-white flex justify-between items-center shadow-2xl border-b border-indigo-500/50">
          <h1 className="text-2xl font-black tracking-tighter text-cyan-400">CRYPTO-PULSE</h1>
          <div className="flex gap-8 font-medium">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Market</Link>
            <Link to="/analysis" className="hover:text-cyan-400 transition-colors">Analysis</Link>
          </div>
        </nav>
        
        <main className="min-h-screen bg-slate-950">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analysis" element={<Analysis />} />
          </Routes>
        </main>
      </Router>
    </CryptoProvider>
  );
}
export default App;