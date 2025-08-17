import { properties2 } from "@/data/properties";

import { Link } from "react-router-dom";
import React from "react";

export default function LeatestProperties() {
  return (
    <>
      {" "}
      <h5 className="fw-6 title">Latest Propeties</h5>
      <ul>
        {properties2.slice(1, 6).map((elm, i) => (
          <li key={i} className="latest-property-item">
            <Link
              to={`/property-details-v1/${elm.id}`}
              className="images-style"
            >
              <img alt="img" src={elm.imgSrc} width={615} height={405} />
            </Link>
            <div className="content">
              <div className="text-capitalize text-btn">
                <Link to={`/property-details-v1/${elm.id}`} className="link">
                  {elm.title}
                </Link>
              </div>
              <ul className="meta-list mt-6">
                <li className="item">
                  <i className="icon icon-bed" />
                  <span className="text-variant-1">Beds:</span>
                  <span className="fw-6">{elm.beds}</span>
                </li>
                <li className="item">
                  <i className="icon icon-bath" />
                  <span className="text-variant-1">Baths:</span>
                  <span className="fw-6">{elm.baths}</span>
                </li>
                <li className="item">
                  <i className="icon icon-sqft" />
                  <span className="text-variant-1">Sqft:</span>
                  <span className="fw-6">{elm.sqft}</span>
                </li>
              </ul>
              <div className="mt-10 text-btn">
                ${elm.price.toLocaleString()}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
