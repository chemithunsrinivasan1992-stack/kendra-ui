import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Persona from "./components/Persona";
import TiktokPage from "./components/TiktokPage";
import LoyalreturnPage from "./components/LoyalreturnPage";
import ResearchPage from "./components/ResearchPage";
import AiPage from "./components/AiPage";
import BundlePage from "./components/BundlePage";
import PricingPage from "./components/PricingPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Persona />} />
        <Route path="/tiktok" element={<TiktokPage />} />
        <Route path="/return" element={<LoyalreturnPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/ai" element={<AiPage />} />
        <Route path="/pricing" element={<PricingPage/>}/>
        <Route path="/bundle" element={<BundlePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
