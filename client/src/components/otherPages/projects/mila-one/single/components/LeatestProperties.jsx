import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "@/context/globalContext";

export default function LeatestProperties({ propertyItem }) {
  const { getAllProperties } = useGlobalContext();
  const [relatedProperties, setRelatedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelatedProperties = async () => {
      if (!propertyItem || !propertyItem.title) {
        setRelatedProperties([]);
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        // Fetch all properties with a high limit to get all for filtering
        const response = await getAllProperties(1, 1000);
        const fetchedProperties = response?.properties || [];

        // Filter properties with the same title, excluding the current property
        const related = fetchedProperties.filter(
          (prop) =>
            prop.title === propertyItem.title &&
            prop.propertyId !== propertyItem.propertyId
        );

        setRelatedProperties(related);
      } catch (err) {
        console.error("Error fetching related properties:", err);
        setError("Failed to fetch related properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProperties();
  }, [propertyItem, getAllProperties]);

  if (loading) {
    return <div>Loading related properties...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h5 className="fw-6 title">Related Propeties</h5>
      <ul>
        {relatedProperties.slice(0, 4).map((elm, i) => (
          <li key={i} className="latest-property-item">
            <Link
              to={`/mila-one/single/${elm.propertyId}`}
              className="images-style"
            >
              <img
                alt="img"
                src={elm.gallery[0].src}
                width={615}
                height={405}
              />
            </Link>
            <div className="content">
              <div className="text-capitalize text-btn">
                <Link
                  to={`/mila-one/single/${elm.propertyId}`}
                  className="link"
                >
                  {elm.title}
                  {elm.filterOptions[1] === "Duplex" && " (Duplex)"}
                  {elm.filterOptions[1] === "Penthouse" && " (Penthouse)"}
                </Link>
              </div>
              <ul className="meta-list mt-6">
                <li className="item">
                  <i className="icon icon-sqft" />
                  <span className="text-variant-1">Sqm:</span>
                  <span className="fw-6">
                    {elm.sqm} m<sup>2</sup>
                  </span>
                </li>
              </ul>
              <div className="mt-10 text-btn">
                ${elm.price.toLocaleString()}
              </div>
            </div>
          </li>
        ))}
        {relatedProperties.length === 0 && (
          <li className="no-related">No related properties found.</li>
        )}
      </ul>
    </>
  );
}
