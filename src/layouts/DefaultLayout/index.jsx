import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "@/components/ScrollTop";

import PolicyBar from "../components/PolicyBar";

function DefaultLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollTop />
      <Header />
      <div className="flex-1">
        <main>
          <Outlet />
        </main>
        <PolicyBar />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
