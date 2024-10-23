import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 여기에 Route 추가 */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
