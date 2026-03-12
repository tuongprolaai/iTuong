import { useState } from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faChevronDown,
    faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo/logo.png";
import { navItems } from "../Navigation/navItems";

const MobileMenuItem = ({ item, onClickClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    return (
        <div className="border-b border-border">
            <div className="flex items-center justify-between px-5 py-2.5">
                <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                        `flex-grow py-2 text-[15px] no-underline ${
                            isActive
                                ? "font-bold text-primary"
                                : "font-medium text-foreground"
                        }`
                    }
                    onClick={onClickClose}
                >
                    {item.title}
                </NavLink>

                {hasChildren && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        className={`h-8 w-8 rounded ${isOpen ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                    >
                        <FontAwesomeIcon
                            icon={isOpen ? faChevronUp : faChevronDown}
                            className="text-xs"
                        />
                    </Button>
                )}
            </div>

            {hasChildren && isOpen && (
                <div className="bg-muted/30 pl-4">
                    {item.children.map((child, index) => (
                        <MobileMenuItem
                            key={index}
                            item={child}
                            onClickClose={onClickClose}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2 lg:hidden">
                    <FontAwesomeIcon icon={faBars} className="text-xl" />
                </Button>
            </SheetTrigger>
            <SheetContent
                side="left"
                className="flex w-[85vw] flex-col p-0 sm:w-[350px]"
            >
                <SheetHeader className="flex h-16 shrink-0 flex-row items-center justify-between border-b px-4 text-left">
                    <SheetTitle asChild>
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-8 w-auto object-contain"
                        />
                    </SheetTitle>
                </SheetHeader>
                <div className="flex-grow overflow-y-auto pb-5">
                    {navItems.map((item, index) => (
                        <MobileMenuItem
                            key={index}
                            item={item}
                            onClickClose={() => setOpen(false)}
                        />
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
}
