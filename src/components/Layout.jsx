import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout() {
  return (
    <>
      <div className="mx-auto w-[550px] bg-[#FFF7ED]">
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}
