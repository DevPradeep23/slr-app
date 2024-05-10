export const MenuList = [
  { name: "Home", link: "/", icon: "" },
  { name: "About", link: "/about-us", icon: "" },
  {
    name: "Services",
    link: "#",
    icon: "",
    margin: false,
    submenu: [
      {
        name: "Digital Marketing",
        link: "/services/digital-marketing",
        icon: "",
      },
      {
        name: "Web and App Development",
        link: "/services/web-mobile-app",
        icon: "",
      },
    ],
  },
  {
    name: "Products",
    link: "#",
    icon: "",
    margin: false,
    submenu: [
      {
        name: "SAP Tool",
        link: "/products/sap-tool",
        icon: "",
      },
      {
        name: "Edumatic",
        link: "/products/integrated-school",
        icon: "",
      },
    ],
  },
];
