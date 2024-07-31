import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";

export default function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto w-[550px] bg-[#FFF7ED]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
