import { useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { User } from "lucide-react";

import logo from "@/assets/logo/logo.png";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";

import SearchModal from "../SearchModal/SearchModal";
import MobileMenu from "../MobileMenu";
import { ModeToggle } from "@/components/mode-toggle";
import Navigation from "../Navigation";

import { Trash2 } from "lucide-react";
import LoginModal from "@/pages/Login";
import RegisterModal from "@/pages/Register";

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "MacBook Pro M3 14 inch",
            price: 39990000,
            quantity: 1,
            image: "https://placehold.co/60x60",
        },
        {
            id: 2,
            name: "MacBook Air M2 13 inch",
            price: 26990000,
            quantity: 1,
            image: "https://placehold.co/60x60",
        },
        {
            id: 3,
            name: "AirPods Pro 2",
            price: 5990000,
            quantity: 1,
            image: "https://placehold.co/60x60",
        },
    ]);

    const increaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            ),
        );
    };

    const decreaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
            ),
        );
    };

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );

    const formatPrice = (price) =>
        new Intl.NumberFormat("vi-VN").format(price) + "đ";

    const removeItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };
    return (
        <>
            <SearchModal
                isOpen={isSearchOpen}
                onRequestClose={() => setIsSearchOpen(false)}
            />

            <header className="sticky top-0 z-50 flex h-16 w-full items-center border-b border-border bg-white/85 dark:bg-zinc-950/85 font-sans backdrop-blur-md">
                <div className="container mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-10">
                    {/* Left */}
                    <div className="flex flex-1 items-center gap-2">
                        <MobileMenu />

                        <Link to="/">
                            <img
                                src={logo}
                                alt="MacOne Logo"
                                loading="eager"
                                decoding="async"
                                className="h-10 w-auto cursor-pointer object-contain lg:h-12"
                            />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <div className="hidden flex-[2] justify-center lg:flex">
                        <Navigation />
                    </div>

                    {/* Right */}
                    <div className="flex flex-1 items-center justify-end gap-2 lg:gap-4">
                        {/* Search */}
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Tìm kiếm"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="text-xl"
                            />
                        </Button>

                        {/* Cart hover */}
                        <Popover open={openCart} onOpenChange={setOpenCart}>
                            {/* Trigger */}
                            <PopoverTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    aria-label="Giỏ hàng"
                                    className="relative"
                                    onMouseEnter={() => setOpenCart(true)}
                                    onMouseLeave={() => setOpenCart(false)}
                                >
                                    <FontAwesomeIcon
                                        icon={faCartShopping}
                                        className="text-xl"
                                    />

                                    {cartItems.length > 0 && (
                                        <Badge
                                            className="
                                                absolute -top-1 -right-1
                                                h-5 min-w-[20px]
                                                px-1
                                                flex items-center justify-center
                                                text-[11px]
                                                rounded-full
                                                "
                                        >
                                            {cartItems.length > 99
                                                ? "99+"
                                                : cartItems.length}
                                        </Badge>
                                    )}
                                </Button>
                            </PopoverTrigger>

                            {/* Content */}
                            <PopoverContent
                                sideOffset={-4}
                                align="end"
                                className="w-[320px] p-0 rounded-xl shadow-xl"
                                onMouseEnter={() => setOpenCart(true)}
                                onMouseLeave={() => setOpenCart(false)}
                            >
                                {/* Header */}
                                <div className="px-4 py-3 text-sm font-semibold border-b">
                                    Giỏ hàng ({cartItems.length})
                                </div>

                                {/* EMPTY CART */}
                                {cartItems.length === 0 && (
                                    <div className="py-10 flex flex-col items-center justify-center text-sm text-muted-foreground gap-2">
                                        <FontAwesomeIcon
                                            icon={faCartShopping}
                                            className="text-2xl opacity-40"
                                        />
                                        Giỏ hàng của bạn đang trống
                                    </div>
                                )}

                                {/* Product list */}
                                {cartItems.length > 0 && (
                                    <>
                                        <ScrollArea className="max-h-[260px]">
                                            <div className="p-2 space-y-1">
                                                {cartItems.map((item) => (
                                                    <div
                                                        key={item.id}
                                                        className="
                flex items-center gap-3
                p-2.5 rounded-lg
                hover:bg-muted
                transition-colors
                "
                                                    >
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="
                  w-12 h-12
                  rounded-md
                  border
                  bg-white
                  object-contain
                  p-1
                  "
                                                        />

                                                        <div className="flex flex-col flex-1 text-sm">
                                                            <span className="line-clamp-2 font-medium">
                                                                {item.name}
                                                            </span>

                                                            <span className="text-primary font-semibold">
                                                                {formatPrice(
                                                                    item.price,
                                                                )}
                                                            </span>

                                                            {/* quantity */}
                                                            <div className="flex items-center gap-2 mt-1">
                                                                <Button
                                                                    size="icon"
                                                                    variant="outline"
                                                                    className="h-6 w-6"
                                                                    onClick={() =>
                                                                        decreaseQty(
                                                                            item.id,
                                                                        )
                                                                    }
                                                                >
                                                                    -
                                                                </Button>

                                                                <span className="text-sm w-4 text-center">
                                                                    {
                                                                        item.quantity
                                                                    }
                                                                </span>

                                                                <Button
                                                                    size="icon"
                                                                    variant="outline"
                                                                    className="h-6 w-6"
                                                                    onClick={() =>
                                                                        increaseQty(
                                                                            item.id,
                                                                        )
                                                                    }
                                                                >
                                                                    +
                                                                </Button>
                                                            </div>
                                                        </div>

                                                        {/* remove */}
                                                        <Button
                                                            size="icon"
                                                            variant="ghost"
                                                            className="h-8 w-8 text-muted-foreground hover:text-red-500"
                                                            onClick={() =>
                                                                removeItem(
                                                                    item.id,
                                                                )
                                                            }
                                                        >
                                                            <Trash2 size={16} />
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        </ScrollArea>

                                        {/* Footer */}
                                        <div className="border-t p-3 space-y-3">
                                            <div className="flex justify-between text-sm font-semibold">
                                                <span>Tổng tiền</span>
                                                <span className="text-primary">
                                                    {formatPrice(totalPrice)}
                                                </span>
                                            </div>

                                            <Button asChild className="w-full">
                                                <Link to="/cart">
                                                    Xem giỏ hàng
                                                </Link>
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </PopoverContent>
                        </Popover>

                        {/* Dark mode */}
                        <ModeToggle />

                        {/* Auth Desktop */}
                        <div className="hidden lg:flex items-center gap-2">
                            <LoginModal />
                            <RegisterModal />
                        </div>

                        {/* Auth Mobile */}
                        <div className="lg:hidden">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <User size={20} />
                                    </Button>
                                </PopoverTrigger>

                                <PopoverContent align="end" className="w-40 ">
                                    <Button
                                        asChild
                                        className="w-full"
                                        variant="outline"
                                    >
                                        <Link to="/login">Đăng nhập</Link>
                                    </Button>

                                    <Button asChild className="w-full">
                                        <Link to="/register">Đăng ký</Link>
                                    </Button>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
