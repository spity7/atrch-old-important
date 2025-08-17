import { Link } from "react-router-dom";
import { properties2 } from "@/data/properties";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export default function Properties2() {
  return (
    <section className="flat-section">
      <div className="container">
        <div className="box-title">
          <div className="text-center wow fadeInUp">
            <div className="text-subtitle text-primary">Top Properties</div>
            <h3 className="title mt-4">Best Property Value</h3>
          </div>
        </div>
        <div className="swiper tf-sw-mobile non-swiper-on-767">
          <div className="tf-layout-mobile-md xl-col-3 md-col-2 swiper-wrapper">
            {properties2.map((property, index) => (
              <div key={index} className="swiper-slide">
                <div className="homelengo-box">
                  <div className="archive-top">
                    <Link
                      to={`/property-details-v1/${property.id}`}
                      className="images-group"
                    >
                      <div className="images-style">
                        <img
                          className="lazyload"
                          data-src={property.imgSrc}
                          alt={""}
                          src={property.imgSrc}
                          width={615}
                          height={405}
                        />
                      </div>
                      <div className="top">
                        <ul className="d-flex gap-6">
                          <li className="flag-tag primary">Featured</li>
                          <li className="flag-tag style-1">For Sale</li>
                        </ul>
                      </div>
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
                        {property.address}
                      </div>
                    </Link>
                  </div>
                  <div className="archive-bottom">
                    <div className="content-top">
                      <h6 className="text-capitalize">
                        <Link
                          to={`/property-details-v1/${property.id}`}
                          className="link"
                        >
                          {property.title}
                        </Link>
                      </h6>
                      <ul className="meta-list">
                        <li className="item">
                          <i className="icon icon-bed" />
                          <span className="text-variant-1">Beds:</span>
                          <span className="fw-6">{property.beds}</span>
                        </li>
                        <li className="item">
                          <i className="icon icon-bath" />
                          <span className="text-variant-1">Baths:</span>
                          <span className="fw-6">{property.baths}</span>
                        </li>
                        <li className="item">
                          <i className="icon icon-sqft" />
                          <span className="text-variant-1">Sqft:</span>
                          <span className="fw-6">{property.sqft}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="content-bottom">
                      <div className="d-flex gap-8 align-items-center">
                        <div className="avatar avt-40 round">
                          <img
                            alt="avt"
                            src={property.avatar}
                            width={34}
                            height={34}
                          />
                        </div>
                        <span>{property.agent}</span>
                      </div>
                      <h6 className="price">${property.price.toFixed(2)}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sw-pagination sw-pagination-mb text-center d-md-none d-block" />
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="swiper tf-sw-mobile swiper-on-767"
          modules={[Pagination]}
          pagination={{ clickable: true, el: ".spb31" }}
        >
          {properties2.map((property, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="homelengo-box">
                <div className="archive-top">
                  <Link
                    to={`/property-details-v1/${property.id}`}
                    className="images-group"
                  >
                    <div className="images-style">
                      <img
                        className="lazyload"
                        data-src={property.imgSrc}
                        alt={""}
                        src={property.imgSrc}
                        width={615}
                        height={405}
                      />
                    </div>
                    <div className="top">
                      <ul className="d-flex gap-6">
                        <li className="flag-tag primary">Featured</li>
                        <li className="flag-tag style-1">For Sale</li>
                      </ul>
                    </div>
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
                      {property.address}
                    </div>
                  </Link>
                </div>
                <div className="archive-bottom">
                  <div className="content-top">
                    <h6 className="text-capitalize">
                      <Link
                        to={`/property-details-v1/${property.id}`}
                        className="link"
                      >
                        {property.title}
                      </Link>
                    </h6>
                    <ul className="meta-list">
                      <li className="item">
                        <i className="icon icon-bed" />
                        <span className="text-variant-1">Beds:</span>
                        <span className="fw-6">{property.beds}</span>
                      </li>
                      <li className="item">
                        <i className="icon icon-bath" />
                        <span className="text-variant-1">Baths:</span>
                        <span className="fw-6">{property.baths}</span>
                      </li>
                      <li className="item">
                        <i className="icon icon-sqft" />
                        <span className="text-variant-1">Sqft:</span>
                        <span className="fw-6">{property.sqft}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="content-bottom">
                    <div className="d-flex gap-8 align-items-center">
                      <div className="avatar avt-40 round">
                        <img
                          alt="avt"
                          src={property.avatar}
                          width={34}
                          height={34}
                        />
                      </div>
                      <span>{property.agent}</span>
                    </div>
                    <h6 className="price">${property.price.toFixed(2)}</h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="sw-pagination spb31 sw-pagination-mb text-center d-md-none d-block" />
        </Swiper>
        <div className="text-center sec-btn">
          <Link
            to={`/sidebar-grid`}
            className="tf-btn btn-view primary size-1 hover-btn-view"
          >
            View All Properties
            <span className="icon icon-arrow-right2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
