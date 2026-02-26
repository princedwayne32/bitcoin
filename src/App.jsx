import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CryptoProvider } from "./context/CryptoContext";
import Home from "./pages/Home";

function App() {
  return (
    <CryptoProvider>
      <Router>
        <nav className="bg-black p-5 flex justify-between shadow-lg">
          <h1 className="text-xl font-bold text-cyan-400">
            CRYPTO DASHBOARD
          </h1>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </CryptoProvider>
  );
}

export default App;
