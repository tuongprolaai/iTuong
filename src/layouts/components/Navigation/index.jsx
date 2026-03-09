import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";

const navItems = [
  {
    to: "/macbook-cu-moi",
    title: "Macbook",
    children: [
      {
        to: "/macbook-air-moi-cu",
        title: "MacBook Air",
        children: [
          { to: "/macbook-air-m4", title: "MacBook Air M4" },
          { to: "/macbook-air-m3", title: "MacBook Air M3" },
          { to: "/macbook-air-m2", title: "MacBook Air M2" },
          { to: "/macbook-air-m1", title: "MacBook Air M1" },
          {
            to: "/macbook-air-intel",
            title: "MacBook Air Intel",
            children: [
              { to: "/macbook-air-2020", title: "MacBook Air 2020" },
              { to: "/macbook-air-2019", title: "MacBook Air 2019" },
              { to: "/macbook-air-2018", title: "MacBook Air 2018" },
              { to: "/macbook-air-2017", title: "MacBook Air 2017" },
            ],
          },
        ],
      },
      {
        to: "/macbook-pro-moi-cu",
        title: "MacBook Pro",
        children: [
          { to: "/macbook-pro-m5", title: "MacBook Pro M5" },
          { to: "/macbook-pro-m4", title: "MacBook Pro M4" },
          { to: "/macbook-pro-m3", title: "MacBook Pro M3" },
          { to: "/macbook-pro-m2", title: "MacBook Pro M2" },
          { to: "/macbook-pro-m1", title: "MacBook Pro M1" },
          {
            to: "/macbook-pro-Intel",
            title: "MacBook Pro Intel",
            children: [
              { to: "/macbook-pro-2020", title: "Macbook Pro 2020" },
              { to: "/macbook-pro-2019", title: "Macbook Pro 2019" },
            ],
          },
        ],
      },
      {
        to: "/macbook-neo",
        title: "Macbook Neo",
      },
    ],
  },
  {
    to: "/imac-mac-desktop",
    title: "iMac-Mac Desktop",
    children: [
      { to: "/imac", title: "iMac" },
      {
        to: "/mac-mini",
        title: "Mac mini",
        children: [
          { to: "/mac-mini-m4", title: "Mac mini M4" },
          { to: "/mac-mini-m2", title: "Mac mini M2" },
          { to: "/mac-mini-m1", title: "Mac mini M1" },
          { to: "/mac-mini-intel", title: "Mac mini Intel" },
        ],
      },
      { to: "/mac-studio", title: "Mac Studio" },
      { to: "/mac-pro", title: "Mac Pro" },
      { to: "/apple-display", title: "Apple Display" },
    ],
  },
  { to: "/ipad", title: "iPad" },
  { to: "/iphone", title: "iPhone" },
  { to: "/man-hinh", title: "Màn hình" },
  { to: "/airpods", title: "AirPods" },
  { to: "/phu-kien-apple-khac", title: "Phụ kiện Apple" },
  { to: "/phu-kien", title: "Phụ kiện" },
];

const MenuItem = ({ item, depth = 0 }) => {
  const isMainMenu = depth === 0;

  let liClass = "";
  let ulClass = "";

  if (isMainMenu) {
    liClass = styles.menuItem;
    ulClass = styles.dropdown;
  } else if (depth === 1) {
    liClass = styles.dropdownItem;
    ulClass = styles.subDropdown;
  } else {
    liClass = styles.subDropdownItem;
    ulClass = styles.deepDropdown;
  }

  return (
    <li className={liClass}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to={item.to}
      >
        {item.title}
      </NavLink>
      {item.children && (
        <ul className={ulClass}>
          {item.children.map((child, index) => (
            <MenuItem key={index} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

function Navigation() {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.mainMenu}>
        {navItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
