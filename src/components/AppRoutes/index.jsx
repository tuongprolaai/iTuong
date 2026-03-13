import { BrowserRouter as Router, Routes, Route } from "react-router";

// Pages
import Home from "@/pages/Home";
// import News from "@/pages/News";
// import Contact from "@/pages/Contact";
// import Dashboard from "@/pages/Dashboard";
// import NewsTrashed from "@/pages/NewsTrashed";
// import UseState from "@/pages/UseState";

// Layouts
import DefaultLayout from "@/layouts/DefaultLayout";
// import SidebarLayout from "@/layouts/SidebarLayout";
// import AdminLayout from "@/layouts/AdminLayout";
// import PostDetail from "@/pages/PostDetail";

// Components
import ScrollToTop from "@/components/ScrollToTop";
import Collection from "@/pages/Collection";
import ProductDetail from "@/pages/ProductDetail";
import Cart from "@/pages/Cart";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
// import Loading from "@/components/Loading";
// import Cleanup from "@/pages/Cleanup";
// import Cleanup2 from "@/pages/Cleanup2";
// import Hooks from "@/pages/Hooks";
// import HOC from "@/pages/HOC";
// import RenderProps from "@/pages/RenderProps";
// import CustomHook from "@/pages/CustomHook";
// import Debounce from "@/pages/Debounce";
// import TabsDemo from "@/pages/TabsDemo";
// import Forms from "@/pages/Forms";
// import ContextAPI from "@/pages/ContextAPI";
// import Redux from "@/pages/Redux";
// import Example2 from "@/pages/Redux/Example2";

function AppRoutes() {
    return (
        <Router>
            <ScrollToTop />
            {/* <Loading /> */}

            <Routes>
                {/* <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route> */}

                {/* Default layout pages */}
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/:slug" element={<Collection />} />
                    <Route path="/detail" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />

                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
