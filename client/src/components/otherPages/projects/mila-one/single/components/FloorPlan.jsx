import React from "react";

const pluralize = (count, singular, plural) =>
  count === 1 ? singular : plural;

export default function FloorPlan({ propertyItem }) {
  return (
    <>
      <h5 className="title fw-6">Floor plan</h5>
      <ul className="box-floor" id="parent-floor">
        <li className="floor-item">
          <div
            className="floor-header"
            data-bs-target="#floor-one"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="floor-one"
          >
            <div className="inner-left">
              <i className="icon icon-arr-r" />
              <span className="text-btn">{propertyItem.floor} Floor</span>
            </div>
            <ul className="inner-right">
              <li className="d-flex align-items-center gap-8">
                <i className="icon icon-bed" />
                {propertyItem.beds}
                {pluralize(propertyItem.beds, " Bedroom", " Bedrooms")}
              </li>
              <li className="d-flex align-items-center gap-8">
                <i className="icon icon-bath" />
                {propertyItem.baths}
                {pluralize(propertyItem.baths, " Bathroom", " Bathrooms")}
              </li>
            </ul>
          </div>
          <div
            id="floor-one"
            className="collapse show"
            data-bs-parent="#parent-floor"
          >
            <div className="faq-body">
              <div className="box-img">
                <img
                  alt="img-floor"
                  src={propertyItem.mapSrc}
                  width={1158}
                  height={815}
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
