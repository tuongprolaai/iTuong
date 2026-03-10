import { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "@/assets/logo/logo.png";
import Navigation, { navItems } from "../Navigation"; // Import navItems đã export ở trên
import SearchModal from "../SearchModal/SearchModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  faXmark,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

// Component con đệ quy để render Menu Mobile nhiều cấp
const MobileMenuItem = ({ item, onClickClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="border-b border-[#1a1a1a]">
      <div className="flex items-center justify-between px-[20px] py-[10px]">
        <NavLink
          to={item.to}
          className={({ isActive }) =>
            `text-[15px] flex-grow py-2 no-underline ${
              isActive ? "text-[#0088cc] font-bold" : "text-white font-medium"
            }`
          }
          onClick={onClickClose}
        >
          {item.title}
        </NavLink>

        {hasChildren && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-[40px] h-[40px] flex items-center justify-center rounded transition-colors duration-200 ${
              isOpen
                ? "bg-[#007bff] text-white" // Đã chuyển thành xanh biển
                : "bg-[#1a1a1a] text-[#cccccc]"
            }`}
          >
            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              className="text-[12px]"
            />
          </button>
        )}
      </div>

      {/* Render đệ quy nếu có menu con và đang mở */}
      {hasChildren && isOpen && (
        <div className="bg-[#0a0a0a] pl-[15px]">
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

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[1000] w-full bg-black h-16 font-sans">
        <SearchModal
          isOpen={isSearchOpen}
          onRequestClose={() => setIsSearchOpen(false)}
        />

        <div className="container mx-auto h-full flex items-center justify-between px-4 lg:px-10">
          {/* Left Section */}
          <div className="flex-1 flex items-center">
            {/* Nút Hamburger cho màn hình nhỏ */}
            <button
              className="lg:hidden text-white text-[24px] mr-4 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <img
              src={logo}
              alt="MacOne Logo"
              className="h-10 lg:h-20 w-auto object-contain cursor-pointer"
            />
          </div>

          {/* Center Section (Ẩn trên màn hình nhỏ, hiện trên màn lg trở lên) */}
          <div className="hidden lg:flex flex-[2] justify-center">
            <Navigation />
          </div>

          {/* Right Section */}
          <div className="flex-1 flex justify-end items-center gap-4 lg:gap-6">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              title="Tìm kiếm"
              className="text-[20px] text-white cursor-pointer transition-colors duration-200 ease-in-out hover:text-[#0088cc]"
              onClick={() => setIsSearchOpen(true)}
            />
<Link to="/cart">
  <FontAwesomeIcon
    icon={faCartShopping}
    title="Giỏ hàng"
    className="text-[20px] text-white cursor-pointer transition-colors duration-200 ease-in-out hover:text-[#0088cc]"
  />
</Link>
          </div>
        </div>
      </header>

      {/* MOBILE MENU SIDEBAR & OVERLAY */}
      {/* Lớp nền mờ */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-[1010] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Thanh Menu trượt ra */}
      <div
        className={`fixed top-0 left-0 h-screen w-[85vw] sm:w-[350px] bg-black z-[1020] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header của Mobile Menu */}
        <div className="h-16 px-4 border-b border-[#333333] flex items-center justify-between shrink-0">
          <button
            className="text-white text-[24px] cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          {/* Logo trong menu */}
          <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
        </div>

        {/* Danh sách Menu dọc */}
        <div className="flex-grow overflow-y-auto pb-[20px]">
          {navItems.map((item, index) => (
            <MobileMenuItem
              key={index}
              item={item}
              onClickClose={() => setIsMobileMenuOpen(false)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;
