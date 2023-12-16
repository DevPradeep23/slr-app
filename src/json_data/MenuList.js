export const MenuList = [
  { name: "Home", link: "/", icon: "" },
  { name: "About", link: "/about", icon: "" },
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
        link: "/products",
        icon: "",
      },
      {
        name: "Edumatic",
        link: "/products/integrated-school",
        icon: "",
      },
    ],
  },
  // { name: "Contact Us", link: "/", icon: "" },
  { name: "Clients", link: "/", icon: "" },
  // { name: "Get in Touch", link: "/", icon: "", margin: false },
];
