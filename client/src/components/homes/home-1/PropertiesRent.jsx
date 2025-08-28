import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "@/context/globalContext";
import { Pagination } from "antd";
import styled from "styled-components";
import Button from "@/components/Button";

export default function Properties() {
  const { getAllProperties, fetchTypes, searchTerm } = useGlobalContext();

  const [allProperties, setAllProperties] = useState([]);
  const [totalProperties, setTotalProperties] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [types, setTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const project = "mila one";
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
      <section className="flat-section flat-recommended">
        <div className="container">
          <div className="box-title text-center wow fadeInUp">
            {/* <div className="text-subtitle text-primary">
              Apartments & complex
            </div> */}
            <h3 className="mt-4 title">Our Architecture</h3>
          </div>
          <div
            className="flat-tab-recommended flat-animate-tab wow fadeInUp"
            data-wow-delay=".2s"
          >
            <ul className="nav-tab-recommended justify-content-md-center">
              {types.map((type) => (
                <Button
                  key={type}
                  bg={selectedTypes.includes(type) ? "black" : "white"}
                  padding="10px 20px"
                  borderradius="10px"
                  border="1px solid gray"
                  color={selectedTypes.includes(type) ? "#ffffff" : "#000000"}
                  hoverBg={selectedTypes.includes(type) ? "#6D574A" : "#c3c3c3"}
                  disabledColor="#c3eddf"
                  name={type}
                  onClick={() => handleTypeClick(type)}
                />
              ))}
            </ul>
            <div className="tab-content">
              <div className="tab-pane active show">
                <div className="row">
                  {allProperties.length > 0 ? (
                    allProperties.map((property) => (
                      <div
                        key={property._id}
                        className="col-xl-4 col-lg-6 col-md-6"
                      >
                        <div className="homelengo-box">
                          <div className="archive-top">
                            <Link
                              // to={`/mila-one/single/${property.propertyId}`}
                              to={"#"}
                              className="images-group"
                            >
                              <div className="images-style">
                                <img
                                  className="lazyload"
                                  data-src={property.gallery[0].src}
                                  alt={property.alt}
                                  src={property.gallery[0].src}
                                  width={615}
                                  height={405}
                                  style={{
                                    width: "100%",
                                    height: "300px",
                                    objectFit: "cover",
                                    borderradius: "8px",
                                  }}
                                />
                              </div>
                              {/* <div className="top">
                                <ul className="d-flex gap-6">
                                  <li className="flag-tag primary">
                                    {property.status}
                                  </li>
                                  <li className="flag-tag style-1">
                                    {property.tags[1]}
                                  </li>
                                </ul>
                              </div> */}
                              <div className="bottom">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path
                                    d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                {property.city}
                              </div>
                            </Link>
                          </div>
                          {/* <div className="archive-bottom">
                            <div className="content-top">
                              <h5 className="text-capitalize text-center">
                                <Link
                                  to={`/mila-one/single/${property.propertyId}`}
                                  className="link"
                                >
                                  {property.title}
                                  {property.filterOptions[1] === "Duplex" &&
                                    " (Duplex)"}
                                  {property.filterOptions[1] === "Penthouse" &&
                                    " (Penthouse)"}
                                </Link>
                              </h5>
                              <ul className="meta-list justify-content-around">
                                <li className="item">
                                  <i className="icon icon-sqft" />
                                  <span className="text-variant-1">Sqm:</span>
                                  <span className="fw-6">
                                    {property.sqm} m<sup>2</sup>
                                  </span>
                                </li>
                                <h6 className="price">
                                  ${property.price} /night
                                </h6>
                              </ul>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center w-100">
                      <h4 className="text-muted mb-20">
                        <span className="fs-1 fw-bold">{selectedTypes} </span>
                        Not Available Right Now
                      </h4>
                    </div>
                  )}
                </div>

                <div className="pagination-container">
                  <Pagination
                    className="pagination"
                    current={currentPage}
                    total={totalProperties}
                    pageSize={pageSize}
                    onChange={handlePageChange}
                  />
                </div>

                {/* <div className="text-center">
                  <Link
                    to={`/mila-one`}
                    className="tf-btn btn-view primary size-1 hover-btn-view"
                  >
                    View All Rent Properties
                    <span className="icon icon-arrow-right2" />
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
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
