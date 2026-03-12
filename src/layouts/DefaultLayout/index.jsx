import { Suspense } from "react";
import { Outlet } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "../components/Header";
import PolicyBar from "../components/PolicyBar";
import Footer from "../components/Footer";
import ScrollTop from "@/components/ScrollTop";

export default function DefaultLayout() {
    return (
        <div className="relative flex min-h-screen flex-col bg-background text-foreground">
            <ScrollTop />

            <Header />

            <div className="flex flex-1 flex-col">
                <main className="flex-1">
                    <div className="container mx-auto w-full max-w-7xl px-4 py-8 md:px-6 lg:px-10">
                        <Suspense fallback={<LoadingFallback />}>
                            <Outlet />
                        </Suspense>
                    </div>
                </main>

                <PolicyBar />
            </div>

            <Footer />
        </div>
    );
}

function LoadingFallback() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[250px] w-full rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
            </div>
        </div>
    );
}
