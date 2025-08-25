import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "@/context/globalContext";
import { Pagination } from "antd";
import styled from "styled-components";
import Button from "../Button";

export default function MyProperty() {
  const { getAllProperties, fetchTypes, searchTerm } = useGlobalContext();

  const [allProperties, setAllProperties] = useState([]);
  const [totalProperties, setTotalProperties] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [types, setTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const project = "";
  const location = useLocation();

  // Fetch types for this project
  useEffect(() => {
    const fetch = async () => {
      const typesData = await fetchTypes(project);
      setTypes(typesData || []);
    };
    fetch();
    // eslint-disable-next-line
  }, [fetchTypes, project, location.pathname]);

  // Fetch properties when filters change
  const fetchProperties = useCallback(async () => {
    const response = await getAllProperties(
      currentPage,
      pageSize,
      project,
      searchTerm,
      selectedTypes
    );
    if (response) {
      setAllProperties(response.properties || []);
      setTotalProperties(response.total || 0);
      setCurrentPage(response.page || 1);
      setPageSize(response.limit || 6);
    }
  }, [
    getAllProperties,
    currentPage,
    pageSize,
    project,
    searchTerm,
    selectedTypes,
  ]);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  const handleTypeClick = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
    setCurrentPage(1);
  };

  return (
    <PropertyOverviewStyle>
      <div className="main-content ps-0">
        <div className="main-content-inner wrap-dashboard-content">
          {/* <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div> */}
          {/* <div className="row">
          <div className="col-md-3">
            <fieldset className="box-fieldset">
              <label htmlFor="title">Select Project:</label>

              <DropdownSelect options={["View All", "mila one", "mila two"]} />
            </fieldset>
          </div>
        </div> */}
          <div className="text-center" style={{ marginBottom: "50px" }}>
            <Link
              to={`/create-property`}
              className="tf-btn btn-view primary size-1 hover-btn-view"
            >
              Create Property
              <span className="icon icon-arrow-right2" />
            </Link>
          </div>
          <ul className="nav-tab-recommended justify-content-md-center mt-30">
            {types.map((type) => (
              <Button
                key={type}
                bg={selectedTypes.includes(type) ? "#6D574A" : "#e0e0e0"}
                padding="10px 20px"
                borderradius="5px"
                color={selectedTypes.includes(type) ? "#ffffff" : "#000000"}
                hoverBg={selectedTypes.includes(type) ? "#6D574A" : "#c3c3c3"}
                disabledColor="#c3eddf"
                name={type}
                onClick={() => handleTypeClick(type)}
              />
            ))}
          </ul>
          <div className="widget-box-2 wd-listing">
            <h5 className="title">Properties</h5>
            <div className="wrap-table">
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Listing</th>
                      <th>City</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* col 2 */}
                    {allProperties.map((property) => (
                      <tr key={property._id} className="file-delete">
                        <td>
                          <div className="listing-box">
                            <div className="images">
                              <Link
                                to={`/${
                                  property.project == "mila one"
                                    ? "mila-one/single"
                                    : "mila-two/single"
                                }/${property.propertyId}`}
                              >
                                <img
                                  alt="images"
                                  src={property.gallery[0].src}
                                  width={150}
                                  // height={50}
                                />
                              </Link>
                            </div>
                            {/* <div className="content d-flex flex-column justify-content-center gap-10">
                              <div className="title fs-4 fw-bold">
                                <Link
                                  to={`/${
                                    property.project == "mila one"
                                      ? "mila-one/single"
                                      : "mila-two/single"
                                  }/${property.propertyId}`}
                                  className="link"
                                >
                                  {property.title}
                                  {property.filterOptions[1] === "Duplex" &&
                                    " (Duplex)"}
                                  {property.filterOptions[1] === "Penthouse" &&
                                    " (Penthouse)"}
                                </Link>
                              </div>
                              <div className="text-btn text-primary">
                                ${property.price.toLocaleString()}
                              </div>
                            </div> */}
                          </div>
                        </td>
                        <td
                          style={{
                            height: "100px",
                            verticalAlign: "middle",
                            padding: 0,
                          }}
                        >
                          <div
                            className="status-wrap d-flex justify-content-center align-items-center"
                            style={{ height: "100%" }}
                          >
                            <h5
                              className={`fw-bold ${
                                property.status == "Pending" ? "pending" : ""
                              }  ${property.status == "Sold" ? "sold" : ""}`}
                            >
                              {property.city}
                            </h5>
                          </div>
                        </td>
                        <td
                          style={{
                            height: "60px", // Adjust height as needed
                            verticalAlign: "middle",
                            padding: 0,
                          }}
                        >
                          <div
                            className="d-flex justify-content-center align-items-center"
                            style={{ height: "100%" }}
                          >
                            <ul className="list-action mb-0 d-flex flex-column gap-10">
                              <li>
                                <Link
                                  className="fs-5 item text-black"
                                  to={`/update-property/${property.propertyId}`}
                                >
                                  <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11.2413 2.9915L12.366 1.86616C12.6005 1.63171 12.9184 1.5 13.25 1.5C13.5816 1.5 13.8995 1.63171 14.134 1.86616C14.3685 2.10062 14.5002 2.4186 14.5002 2.75016C14.5002 3.08173 14.3685 3.39971 14.134 3.63416L4.55467 13.2135C4.20222 13.5657 3.76758 13.8246 3.29 13.9668L1.5 14.5002L2.03333 12.7102C2.17552 12.2326 2.43442 11.7979 2.78667 11.4455L11.242 2.9915H11.2413ZM11.2413 2.9915L13 4.75016"
                                      stroke="#A3ABB0"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  Edit
                                </Link>
                              </li>
                              {/* <li>
                              <a className="remove-file item text-danger">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.82667 6.00035L9.596 12.0003M6.404 12.0003L6.17333 6.00035M12.8187 3.86035C13.0467 3.89501 13.2733 3.93168 13.5 3.97101M12.8187 3.86035L12.1067 13.1157C12.0776 13.4925 11.9074 13.8445 11.63 14.1012C11.3527 14.3579 10.9886 14.5005 10.6107 14.5003H5.38933C5.0114 14.5005 4.64735 14.3579 4.36999 14.1012C4.09262 13.8445 3.92239 13.4925 3.89333 13.1157L3.18133 3.86035M12.8187 3.86035C12.0492 3.74403 11.2758 3.65574 10.5 3.59568M3.18133 3.86035C2.95333 3.89435 2.72667 3.93101 2.5 3.97035M3.18133 3.86035C3.95076 3.74403 4.72416 3.65575 5.5 3.59568M10.5 3.59568V2.98501C10.5 2.19835 9.89333 1.54235 9.10667 1.51768C8.36908 1.49411 7.63092 1.49411 6.89333 1.51768C6.10667 1.54235 5.5 2.19901 5.5 2.98501V3.59568M10.5 3.59568C8.83581 3.46707 7.16419 3.46707 5.5 3.59568"
                                    stroke="#A3ABB0"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                Delete
                              </a>
                            </li> */}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {/* col 3 */}

                    <div className="pagination-container">
                      <Pagination
                        className="pagination"
                        current={currentPage}
                        total={totalProperties}
                        pageSize={pageSize}
                        onChange={handlePageChange}
                      />
                    </div>

                    {/* col 4 */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PropertyOverviewStyle>
  );
}

const PropertyOverviewStyle = styled.div`
  .pagination-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
  }

  /* Media query for screens smaller than 768px */
  @media (max-width: 768px) {
    .pagination-container {
      margin-top: 10px;
    }
  }
`;
