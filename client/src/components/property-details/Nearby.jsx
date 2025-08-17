const nearbyLeft = [
  { label: "School:", distance: "0.7 km" },
  { label: "University:", distance: "1.3 km" },
  { label: "Grocery center:", distance: "0.6 km" },
  { label: "Market:", distance: "1.1 km" },
];

const nearbyRight = [
  { label: "Hospital:", distance: "0.4 km" },
  { label: "Metro station:", distance: "1.8 km" },
  { label: "Gym, wellness:", distance: "1.3 km" },
  { label: "River:", distance: "2.1 km" },
];

export default function Nearby() {
  return (
    <>
      <h5 className="title fw-6">What’s nearby?</h5>
      <p>
        Explore nearby amenities to precisely locate your property and identify
        surrounding conveniences, providing a comprehensive overview of the
        living environment and the property's convenience.
      </p>
      <div className="row box-nearby">
        <div className="col-md-5">
          <ul className="box-left">
            {nearbyLeft.map((item, index) => (
              <li key={index} className="item-nearby">
                <span className="label">{item.label}</span>
                <span className="fw-7">{item.distance}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-5">
          <ul className="box-right">
            {nearbyRight.map((item, index) => (
              <li key={index} className="item-nearby">
                <span className="label">{item.label}</span>
                <span className="fw-7">{item.distance}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
