import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Khm from "./pages/khm/khm";
import ParkSooHwan from "./pages/ParkSooHwan";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 여기에 Route 추가 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/khm" element={<Khm />} />
        <Route path="/psh" element={<ParkSooHwan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
