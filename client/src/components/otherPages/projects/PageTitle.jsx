import React from "react";
import { Link } from "react-router-dom";

export default function PageTitle() {
  return (
    <section
      className="flat-title-page relative"
      style={{
        backgroundImage: "url(/images/page-title/BR-Mila-Scene-09.0.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay with black background and opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.55)", // Black with 65% opacity
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></div>

      <div className="container relative z-10">
        <div className="breadcrumb-content">
          <ul className="breadcrumb">
            <li>
              <Link to={`/`} className="text-white">
                Home
              </Link>
            </li>
            <li className="text-white">/ Projects</li>
          </ul>
          <h1 className="text-center text-white title fw-bold">Our Projects</h1>
        </div>
      </div>
    </section>
  );
}
