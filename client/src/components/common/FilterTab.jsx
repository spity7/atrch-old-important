import React, { useEffect, useRef, useState } from "react";
import DropdownSelect from "./DropdownSelect";
import AdvanceSearch from "./AdvanceSearch";
import { filterOptions } from "@/data/propertiesMila";
import MilaOneForm from "./MilaOneForm";
import MilaTwoForm from "./MilaTwoForm";

export default function FilterTab({
  tabClass = "nav-tab-form style-1 justify-content-center",
  styleClass = "",
}) {
  const [activeTab, setActiveTab] = useState("forRent");
  const ddContainer = useRef();
  const advanceBtnRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown and the button
      if (
        ddContainer.current &&
        !ddContainer.current.contains(event.target) &&
        advanceBtnRef.current &&
        !advanceBtnRef.current.contains(event.target)
      ) {
        ddContainer.current?.classList.remove("show");
      }
    };
    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flat-tab flat-tab-form">
      <ul className={tabClass} role="tablist">
        <li className="nav-tab-item" role="presentation">
          <button
            onClick={() => setActiveTab("forRent")}
            className={`nav-link-item ${
              activeTab === "forRent" ? "active" : ""
            }`}
          >
            For Rent
          </button>
        </li>
        <li className="nav-tab-item" role="presentation">
          <button
            onClick={() => setActiveTab("forSale")}
            className={`nav-link-item ${
              activeTab === "forSale" ? "active" : ""
            }`}
          >
            For Sale
          </button>
        </li>
      </ul>

      {activeTab === "forRent" && <MilaOneForm />}
      {activeTab === "forSale" && <MilaTwoForm />}
    </div>
  );
}
