import React from "react";

const pluralize = (count, singular, plural) =>
  count === 1 ? singular : plural;

export default function Overview({ propertyItem }) {
  return (
    <>
      <h6 className="title fw-6">Overview</h6>
      <ul className="info-box">
        {/* <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="icon icon-house-line" />
          </a>
          <div className="content">
            <span className="label">ID:</span>
            <span>2297</span>
          </div>
        </li> */}
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="icon icon-sliders-horizontal" />
          </a>
          <div className="content">
            <span className="label">Type:</span>
            <span>{propertyItem.type[0]}</span>
          </div>
        </li>
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="icon icon-crop" />
          </a>
          <div className="content">
            <span className="label">Size:</span>
            <span>
              {propertyItem.sqm} m<sup>2</sup>
            </span>
          </div>
        </li>
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="fa fa-dollar-sign fa-lg" />
          </a>
          <div className="content">
            <span className="label">Price:</span>
            <span>{propertyItem.price} $</span>
          </div>
        </li>
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="fa-regular fa-building fa-lg" />
          </a>
          <div className="content">
            <span className="label">Floor:</span>
            <span>{propertyItem.floor} Floor</span>
          </div>
        </li>
        {/* <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="icon icon-garage" />
          </a>
          <div className="content">
            <span className="label">Garages:</span>
            <span>1</span>
          </div>
        </li> */}
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="fa fa-house fa-lg" />
          </a>
          <div className="content">
            <span className="label">Rooms:</span>
            <span>
              {propertyItem.rooms}
              {pluralize(propertyItem.rooms, " Room", " Rooms")}
            </span>
          </div>
        </li>
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="icon icon-bed1" />
          </a>
          <div className="content">
            <span className="label">Bedrooms:</span>
            <span>
              {propertyItem.beds}
              {pluralize(propertyItem.beds, " Bedroom", " Bedrooms")}
            </span>
          </div>
        </li>
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="icon icon-bathtub" />
          </a>
          <div className="content">
            <span className="label">Bathrooms:</span>
            <span>
              {propertyItem.baths}
              {pluralize(propertyItem.baths, " Bathroom", " Bathrooms")}
            </span>
          </div>
        </li>
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="fa-regular fa-calendar fa-lg" />
          </a>
          <div className="content">
            <span className="label">Year Built:</span>
            <span>{propertyItem.yearBuilt}</span>
          </div>
        </li>
        {/* <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="icon icon-ruler" />
          </a>
          <div className="content">
            <span className="label">Size:</span>
            <span>900 SqFt</span>
          </div>
        </li> */}
      </ul>
    </>
  );
}
