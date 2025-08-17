import Description from "./components/Description";
import Overview from "./components/Overview";
import Video from "./components/Video";
import Details from "./components/Details";
import Features from "./components/Features";
import MapLocation from "./components/MapLocation";
import FloorPlan from "./components/FloorPlan";
import AttachMents from "./components/AttachMents";
import Explore from "./components/Explore";
import LoanCalculator from "./components/LoanCalculator";
import Nearby from "./components/Nearby";
import GuestReview from "./components/GuestReview";
import ContactSeller from "./components/ContactSeller";
import WidgetBox from "./components/WidgetBox";
import WhyChoose from "./components/WhyChoose";
import LeatestProperties from "./components/LeatestProperties";
export default function PropertyDetails({ propertyItem }) {
  return (
    <>
      <section className="flat-section-v3 flat-property-detail">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="single-property-element single-property-desc">
                <Description propertyItem={propertyItem} />
              </div>
              <div className="single-property-element single-property-overview">
                <Overview propertyItem={propertyItem} />
              </div>
              <div className="single-property-element single-property-floor">
                <FloorPlan propertyItem={propertyItem} />
              </div>
              {/* <div className="single-property-element single-property-video">
                <Video />
              </div> */}
              {/* <div className="single-property-element single-property-info">
                <Details />
              </div> */}
              <div className="single-property-element single-property-feature">
                <Features propertyItem={propertyItem} />
              </div>
              <div className="single-property-element single-property-map" style={{marginBottom: "100px"}}>
                <div
                  id="map-contact"
                  className="map-contact"
                  data-map-zoom={16}
                  data-map-scroll="true"
                >
                  <MapLocation propertyItem={propertyItem} />
                </div>
              </div>

              <div className="single-property-element single-property-attachments">
                <AttachMents />
              </div>
              <div className="single-property-element single-property-explore">
                <Explore />
              </div>
              <div className="single-property-element single-property-nearby">
                <Nearby />
              </div>
              {/* <div className="single-property-element single-wrapper-review">
                <GuestReview />
              </div> */}
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="single-sidebar fixed-sidebar">
                {/* <div className="widget-box single-property-contact">
                  <ContactSeller />
                </div> */}
                {/* <div className="flat-tab flat-tab-form widget-filter-search widget-box">
                  <WidgetBox />
                </div> */}
                <div className="box-latest-property mb-30">
                  <LeatestProperties propertyItem={propertyItem} />
                </div>
                <div className="widget-box single-property-whychoose">
                  <WhyChoose />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
}
