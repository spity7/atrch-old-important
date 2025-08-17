export const menuItems = [
  {
    title: "HOME",
    links: [{ href: "/", label: "Homepage 01", isCurrent: true }],
    isCurrent: true,
  },
  {
    title: "LIFESTYLE",
    links: [{ href: "/lifestyle", label: "LIFESTYLE" }],
  },
  {
    title: "PROJECTS",
    mainLink: "/projects",
    links: [
      { href: "/mila-one", label: "MILA 1" },
      { href: "/mila-two", label: "MILA 2" },
    ],
  },
  // {
  //   title: "GALLERY",
  //   links: [{ href: "/gallery", label: "GALLERY" }],
  // },
  {
    title: "CONTACT US",
    links: [{ href: "/contact", label: "Contact Us" }],
  },
  {
    title: "DASHBOARD",
    links: [
      // { href: "/dashboard", label: "Dashboard" },
      { href: "/properties", label: "Properties" },
      // { href: "/message", label: "Message" },
      // { href: "/my-favorites", label: "My Favorites" },
      // { href: "/reviews", label: "Reviews" },
      // { href: "/my-profile", label: "My Profile" },
      // { href: "/add-property", label: "Add Property" },
      // { href: "/#", label: "Profile" },
      {
        href: "#",
        label: "Logout",
        onClick: () => {
          const logoutEvent = new CustomEvent("logout");
          window.dispatchEvent(logoutEvent); // Dispatch a custom logout event
        },
      },
    ],
  },
];
