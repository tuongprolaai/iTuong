import { Outlet } from "react-router";
import logo from "@/assets/logo/logo.png";

function AuthLayout() {
    return (
        <div className="min-h-screen flex">
            {/* Left */}
            <div className="hidden lg:flex flex-1 items-center justify-center bg-muted">
                <img src={logo} className="w-52 opacity-80" />
            </div>

            {/* Right */}
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-md">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
