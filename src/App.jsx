import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Nav1 from "./components/Nav1";

export default function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto w-[550px] bg-[#FFF7ED]">
        <Nav1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
