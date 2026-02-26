import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CryptoProvider } from "./context/CryptoContext";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";

function App() {
  return (
    <CryptoProvider>
      <BrowserRouter>
        <nav className="flex justify-between p-5 bg-slate-900 shadow-xl">
          <h1 className="text-xl font-bold tracking-widest text-cyan-400">
            CRYPTO DASHBOARD
          </h1>

          <div className="space-x-6">
            <Link to="/">Market</Link>
            <Link to="/analysis">Analysis</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      </BrowserRouter>
    </CryptoProvider>
  );
}

export default App;
