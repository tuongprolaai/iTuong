import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navItems } from "./navItems";
import { Link } from "react-router";

export default function Navigation() {
    return (
        <NavigationMenu className="max-w-none relative z-50" viewport={false}>
            <NavigationMenuList className="gap-3 whitespace-nowrap">
                {navItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                        {item.children ? (
                            <>
                                <NavigationMenuTrigger className="px-2 py-2 text-sm font-medium">
                                    {item.title}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent
                                    className="
                                        w-[240px] p-2
                                        !data-[motion=from-end]:slide-in-from-right-0
                                        !data-[motion=from-start]:slide-in-from-left-0
                                        !data-[motion=to-end]:slide-out-to-right-0
                                        !data-[motion=to-start]:slide-out-to-left-0
                                        data-[motion^=from-]:slide-in-from-top-2
                                        data-[motion^=to-]:slide-out-to-top-2
                                    "
                                >
                                    <ul className="grid gap-1">
                                        {item.children.map((child, i) => (
                                            <li key={i}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        to={child.to}
                                                        className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
                                                    >
                                                        <div className="font-medium">
                                                            {child.title}
                                                        </div>
                                                        {child.description && (
                                                            <p className="text-xs text-muted-foreground">
                                                                {
                                                                    child.description
                                                                }
                                                            </p>
                                                        )}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </>
                        ) : (
                            <Link
                                to={item.to}
                                className="px-2 py-2 text-sm font-medium rounded-md hover:bg-muted"
                            >
                                {item.title}
                            </Link>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
