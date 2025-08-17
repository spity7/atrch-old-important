import React from "react";

export default function Description({ propertyItem }) {
  return (
    <>
      {" "}
      <h5 className="fw-6 title">Description</h5>
      <p className="text-variant-1">{propertyItem.description}</p>
      {/* <p className="mt-8 text-variant-1">
        An ideal choice for sports and leisure enthusiasts who will be able to
        take advantage of its swimming pool (11m x 5m), tennis court, gym and
        sauna.
      </p> */}
    </>
  );
}
