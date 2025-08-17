import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownSelect from "./DropdownSelect";
import { useGlobalContext } from "@/context/globalContext";

export default function MilaOneForm({
  ddContainer,
  advanceBtnRef,
  styleClass = "",
}) {
  const { fetchTypes } = useGlobalContext();
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("View All");
  const navigate = useNavigate();
  const project = "mila one";

  // Fetch types for 'mila one' project on mount
  useEffect(() => {
    const fetchProjectTypes = async () => {
      const typesData = await fetchTypes(project);
      setTypes(typesData && typesData.length > 0 ? typesData : []);
    };
    fetchProjectTypes();
  }, [fetchTypes, project]);

  // Add "View All" as the first option
  const typeOptions = ["View All", ...types.filter((t) => t !== "View All")];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedType === "View All") {
      navigate(`/mila-one`);
    } else {
      navigate(`/mila-one?type=${encodeURIComponent(selectedType)}`);
    }
  };

  return (
    <div className="tab-content">
      <div className="tab-pane fade active show" role="tabpanel">
        <div className="form-sl">
          <form onSubmit={handleSubmit}>
            <div className={`wd-find-select ${styleClass}`}>
              <div className="inner-group">
                <div className="form-group-1 search-form form-style">
                  <label>Type</label>
                  <div className="group-select">
                    <DropdownSelect
                      options={typeOptions}
                      value={selectedType}
                      onChange={setSelectedType}
                    />
                  </div>
                </div>
                <div className="form-group-2 form-style">
                  <label>Location</label>
                  <div className="group-select">
                    <DropdownSelect options={["Tyre"]} />
                  </div>
                </div>
              </div>
              <div className="box-btn-advanced">
                <button type="submit" className="tf-btn btn-search primary">
                  Search <i className="icon icon-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
