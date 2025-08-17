import React, { useState } from "react";
import DropdownSelect from "../common/DropdownSelect";
import Slider from "rc-slider";

export default function WidgetBox() {
  const [price, setPrice] = useState([100, 700]);
  const [size, setSize] = useState([500, 1500]);
  return (
    <>
      {" "}
      <ul className="nav-tab-form" role="tablist">
        <li className="nav-tab-item" role="presentation">
          <a
            href="#forRent"
            className="nav-link-item active"
            data-bs-toggle="tab"
          >
            For Rent
          </a>
        </li>
        <li className="nav-tab-item" role="presentation">
          <a href="#forSale" className="nav-link-item" data-bs-toggle="tab">
            For Sale
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade active show" role="tabpanel">
          <div className="form-sl">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="wd-filter-select">
                <div className="inner-group">
                  <div className="box">
                    <div className="form-style">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type keyword...."
                        defaultValue=""
                        name="s"
                        title="Search for"
                        required
                      />
                    </div>
                    <div className="form-style">
                      <div className="group-ip ip-icon">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Location"
                          defaultValue=""
                          name="s"
                          title="Search for"
                          required
                        />
                        <a href="#" className="icon-right icon-location" />
                      </div>
                    </div>
                    <div className="form-style">
                      <div className="group-select">
                        <DropdownSelect
                          defaultOption="Property type"
                          options={["Villa", "Studio", "Office"]}
                        />
                      </div>
                    </div>
                    <div className="form-style box-select">
                      <DropdownSelect
                        defaultOption="Room"
                        options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                      />
                    </div>
                    <div className="form-style box-select">
                      <DropdownSelect
                        defaultOption="Bathrooms"
                        options={["All", 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                      />
                    </div>
                    <div className="form-style box-select">
                      <DropdownSelect
                        defaultOption="Bedroomsrooms"
                        options={["All", 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                      />
                    </div>
                  </div>
                  <div className="box">
                    <div className="form-style widget-price">
                      <div className="box-title-price">
                        <span className="title-price fw-6">Price:</span>
                        <div className="caption-price">
                          <span id="slider-range-value1" className="fw-6">
                            {" "}
                            ${price[0]}{" "}
                          </span>
                          <span>-</span>
                          <span id="slider-range-value2" className="fw-6">
                            ${price[1]}
                          </span>
                        </div>
                      </div>
                      <Slider
                        range
                        // formatLabel={() => ``}
                        max={1000}
                        min={100}
                        defaultValue={price}
                        onChange={setPrice}
                      />
                    </div>
                    <div className="form-style widget-price wd-price-2">
                      <div className="box-title-price">
                        <span className="title-price fw-6">Size:</span>
                        <div className="caption-price">
                          <span id="slider-range-value1" className="fw-6">
                            {" "}
                            ${size[0]}{" "}
                          </span>
                          <span>-</span>
                          <span id="slider-range-value2" className="fw-6">
                            ${size[1]}
                          </span>
                        </div>
                      </div>
                      <Slider
                        range
                        // formatLabel={() => ``}
                        max={2000}
                        min={20}
                        defaultValue={size}
                        onChange={setSize}
                      />
                    </div>
                  </div>
                  <div className="box">
                    <div className="form-style wd-amenities">
                      <div className="group-checkbox">
                        <h6 className="title text-black-2">Amenities:</h6>
                        <div className="group-amenities">
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb1"
                              defaultChecked=""
                            />
                            <label htmlFor="cb1" className="text-cb-amenities">
                              Air Condition
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb2"
                            />
                            <label htmlFor="cb2" className="text-cb-amenities">
                              Disabled Access
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb3"
                            />
                            <label htmlFor="cb3" className="text-cb-amenities">
                              Ceiling Height
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb4"
                              defaultChecked=""
                            />
                            <label htmlFor="cb4" className="text-cb-amenities">
                              Floor
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb5"
                            />
                            <label htmlFor="cb5" className="text-cb-amenities">
                              Heating
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb6"
                            />
                            <label htmlFor="cb6" className="text-cb-amenities">
                              Renovation
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb7"
                            />
                            <label htmlFor="cb7" className="text-cb-amenities">
                              Window Type
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb8"
                            />
                            <label htmlFor="cb8" className="text-cb-amenities">
                              Cable TV
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb9"
                              defaultChecked=""
                            />
                            <label htmlFor="cb9" className="text-cb-amenities">
                              Elevator
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb10"
                            />
                            <label htmlFor="cb10" className="text-cb-amenities">
                              Furnishing
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb11"
                            />
                            <label htmlFor="cb11" className="text-cb-amenities">
                              Intercom
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb12"
                            />
                            <label htmlFor="cb12" className="text-cb-amenities">
                              Security
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb13"
                            />
                            <label htmlFor="cb13" className="text-cb-amenities">
                              Search property
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb14"
                            />
                            <label htmlFor="cb14" className="text-cb-amenities">
                              Ceiling Height
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb15"
                            />
                            <label htmlFor="cb15" className="text-cb-amenities">
                              Fence
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb16"
                            />
                            <label htmlFor="cb16" className="text-cb-amenities">
                              Fence
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb17"
                              defaultChecked=""
                            />
                            <label htmlFor="cb17" className="text-cb-amenities">
                              Garage
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb18"
                            />
                            <label htmlFor="cb18" className="text-cb-amenities">
                              Parking
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb19"
                            />
                            <label htmlFor="cb19" className="text-cb-amenities">
                              Swimming Pool
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb20"
                            />
                            <label htmlFor="cb20" className="text-cb-amenities">
                              Construction Year
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb21"
                            />
                            <label htmlFor="cb21" className="text-cb-amenities">
                              Fireplace
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb22"
                            />
                            <label htmlFor="cb22" className="text-cb-amenities">
                              Garden
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb23"
                            />
                            <label htmlFor="cb23" className="text-cb-amenities">
                              Pet Friendly
                            </label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input
                              type="checkbox"
                              className="tf-checkbox style-1"
                              id="cb24"
                            />
                            <label htmlFor="cb24" className="text-cb-amenities">
                              WiFi
                            </label>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-style">
                    <button
                      type="submit"
                      className="tf-btn btn-view primary hover-btn-view"
                    >
                      Find Properties
                      <span className="icon icon-arrow-right2" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
