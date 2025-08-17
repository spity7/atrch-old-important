import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapLocation = ({ propertyItem }) => {
  const position = [33.26164096701214, 35.22224264418231];

  return (
    <>
      <h5 className="title fw-6">Map location</h5>
      <div style={{ height: "100%", width: "100%" }}>
        <MapContainer
          center={position}
          zoom={14}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Mila Residence</Popup>
          </Marker>
        </MapContainer>
      </div>
      {/* <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d135905.11693909427!2d-73.95165795400088!3d41.17584829642291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1727094281524!5m2!1sen!2s"
        width="100%"
        height={478}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      /> */}
      <div className="info-map">
        <ul className="box-left">
          {/* <li>
            <span className="label fw-6">Address</span>
            <div className="text text-variant-1">150 sqft</div>
          </li> */}
          <li>
            <span className="label fw-6">City</span>
            <div className="text text-variant-1">{propertyItem.city}</div>
          </li>
          {/* <li>
            <span className="label fw-6">State/county</span>
            <div className="text text-variant-1">Lebanon</div>
          </li> */}
        </ul>
        <ul className="box-right">
          {/* <li>
            <span className="label fw-6">Postal code</span>
            <div className="text text-variant-1">7.328</div>
          </li>
          <li>
            <span className="label fw-6">Area</span>
            <div className="text text-variant-1">7.328</div>
          </li> */}
          <li>
            <span className="label fw-6">Country</span>
            <div className="text text-variant-1">{propertyItem.country}</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MapLocation;
