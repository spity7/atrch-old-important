import React, { useEffect, useState } from "react";
import DropdownSelect from "../common/DropdownSelect";
import { useGlobalContext } from "@/context/globalContext";
import useShowModal from "@/hooks/useShowModal";

export default function CreateProperty() {
  const { createProperty } = useGlobalContext();
  const showModal = useShowModal();

  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  // const [description, setDescription] = useState(propertyItem.description);
  const [gallery, setGallery] = useState([
    { src: "", href: "", className: "item2 box-img" },
  ]);
  const [order, setOrder] = useState("");

  // Handle image file change
  const handleGalleryChange = (e, idx) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setGallery((prev) => {
        const updated = [...prev];
        updated[idx] = {
          href: reader.result,
          className: `item${idx + 2} box-img`,
          src: reader.result,
        };
        return updated;
      });
    };
    reader.readAsDataURL(file);
  };

  // Add a new empty gallery slot
  const handleAddGallerySlot = () => {
    setGallery((prev) => [
      ...prev,
      { src: "", href: "", className: `item${prev.length + 2} box-img` },
    ]);
  };

  const handleSave = async () => {
    try {
      if (!city || !type || gallery.length === 0 || !order) {
        showModal(
          "Error",
          "City, type, order, and at least one image are required.",
          "error"
        );
        return;
      }

      const newProperty = {
        city,
        type: [type], // keep type as array like backend expects
        gallery,
        order,
      };

      await createProperty(city, [type], gallery, order);
      showModal("Success", "Property created successfully!", "success");

      // reset form
      setCity("");
      setType("");
      setGallery([{ src: "", href: "", className: "item2 box-img" }]);
      setOrder("");
    } catch (error) {
      showModal("Error", "Failed to create property.", "error");
    }
  };

  return (
    <div className="main-content">
      <h2 className="text-center fw-bold mt-30">Create Property</h2>
      <div className="main-content-inner">
        <div className="widget-box-2 mb-20">
          <div className="box-price-property">
            <div className="box grid-3 gap-30">
              <fieldset className="box-fieldset">
                <label htmlFor="city">
                  City:<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </fieldset>
              <fieldset className="box-fieldset">
                <label htmlFor="neighborhood">
                  Type:<span>*</span>
                </label>

                <DropdownSelect
                  defaultOption={"select type"}
                  options={[
                    "villa",
                    "residential",
                    "commercial",
                    "chalet",
                    "interiar",
                  ]}
                  onChange={setType}
                />
              </fieldset>
              <fieldset className="box-fieldset">
                <label htmlFor="city">
                  Order:<span>*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Order"
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                />
              </fieldset>
            </div>
          </div>
        </div>
        <div className="widget-box-2 mb-20">
          <h5 className="title text-center">Gallery</h5>
          <div className="grid-2 gap-20">
            {gallery.map((img, idx) => (
              <div key={idx} className="item-upload file-delete">
                <img
                  alt={`gallery-${idx}`}
                  src={img.src || "/images/placeholder.png"}
                  width={120}
                  height={80}
                  style={{
                    objectFit: "cover",
                    border: "1px solid #eee",
                  }}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleGalleryChange(e, idx)}
                  style={{ marginTop: 8 }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="box-btn">
          <button onClick={handleSave} className="tf-btn primary">
            Create Property
          </button>
          {/* <a href="#" className="tf-btn btn-line">
            Save &amp; Preview
          </a> */}
        </div>
      </div>
    </div>
  );
}
