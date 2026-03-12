import AppRoutes from "./components/AppRoutes";
// import "./styles/main.scss";
import "@/App.css";
import { ThemeProvider } from "@/components/theme-provider";
function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <AppRoutes />
            </ThemeProvider>
        </>
    );
}

export default App;
