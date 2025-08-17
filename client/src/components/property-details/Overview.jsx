import React from "react";

export default function Overview() {
  return (
    <>
      <h6 className="title fw-6">Overview</h6>
      <ul className="info-box">
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="icon icon-house-line" />
          </a>
          <div className="content">
            <span className="label">ID:</span>
            <span>2297</span>
          </div>
        </li>
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="icon icon-sliders-horizontal" />
          </a>
          <div className="content">
            <span className="label">Type:</span>
            <span>House</span>
          </div>
        </li>
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="icon icon-garage" />
          </a>
          <div className="content">
            <span className="label">Garages:</span>
            <span>1</span>
          </div>
        </li>
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="icon icon-bed1" />
          </a>
          <div className="content">
            <span className="label">Bedrooms:</span>
            <span>2 Rooms</span>
          </div>
        </li>
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="icon icon-bathtub" />
          </a>
          <div className="content">
            <span className="label">Bathrooms:</span>
            <span>2 Rooms</span>
          </div>
        </li>
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="icon icon-crop" />
          </a>
          <div className="content">
            <span className="label">Land Size:</span>
            <span>2,000 SqFt</span>
          </div>
        </li>
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="icon icon-hammer" />
          </a>
          <div className="content">
            <span className="label">Year Built:</span>
            <span>2024</span>
          </div>
        </li>
        <li className="item">
          <a href="#" className="box-icon w-52">
            <i className="icon icon-ruler" />
          </a>
          <div className="content">
            <span className="label">Size:</span>
            <span>900 SqFt</span>
          </div>
        </li>
      </ul>
    </>
  );
}
