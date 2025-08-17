import { menuItems } from "@/data/menu";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/globalContext";

export default function Nav() {
  const { pathname } = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("user-app")
  );
  const { handleLogout } = useGlobalContext();

  useEffect(() => {
    // Function to update authentication state
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("user-app"));
    };

    // Listen for logout event
    const logoutListener = () => {
      handleLogout();
      checkAuth();
    };
    window.addEventListener("logout", logoutListener);

    return () => {
      window.removeEventListener("logout", logoutListener); // Cleanup
    };
  }, [handleLogout]);

  // Filter menu items to include "Dashboard" only for authenticated users
  const filteredMenuItems = menuItems.filter((item) => {
    if (item.title === "DASHBOARD") {
      return isAuthenticated; // Show "Dashboard" only if the user is authenticated
    }
    return true; // Show other menu items
  });

  return (
    <>
      {filteredMenuItems.map((item, index) => {
        const hasDropdown = item.links.length > 1; // Check if there are multiple links
        const isProjects = item.title === "PROJECTS"; // Special case for "PROJECTS"

        return (
          <li
            key={index}
            className={`${hasDropdown ? "dropdown2" : ""} ${
              (item.mainLink && pathname === item.mainLink) ||
              item.links.some((el) => pathname === el.href)
                ? "current"
                : ""
            }`}
          >
            {isProjects ? (
              <>
                <Link to={"/projects"}>{item.title}</Link> {/* Direct link */}
                <ul>
                  {item.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className={
                        link.href.split("/")[1] === pathname.split("/")[1]
                          ? "current"
                          : ""
                      }
                    >
                      <Link to={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
                <div className="dropdown2-btn"></div>
              </>
            ) : hasDropdown ? (
              <>
                <Link>{item.title}</Link>
                <ul>
                  {item.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className={
                        link.href.split("/")[1] === pathname.split("/")[1]
                          ? "current"
                          : ""
                      }
                    >
                      {link.onClick ? (
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default navigation
                            link.onClick(); // Call the logout function
                          }}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <Link to={link.href}>{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="dropdown2-btn"></div>
              </>
            ) : (
              <Link to={item.links[0].href}>{item.title}</Link>
            )}
          </li>
        );
      })}
    </>
  );
}
