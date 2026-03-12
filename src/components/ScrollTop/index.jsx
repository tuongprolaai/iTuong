import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ScrollTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Button
            size="icon"
            onClick={scrollToTop}
            className={`
        fixed bottom-10 left-10 z-50
        shadow-lg
        transition-all duration-300
        ${
            visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
        >
            <ArrowUp className="h-5 w-5" />
        </Button>
    );
}
