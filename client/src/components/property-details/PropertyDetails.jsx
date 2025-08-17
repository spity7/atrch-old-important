import Description from "./Description";
import Overview from "./Overview";
import Video from "./Video";
import Details from "./Details";
import Features from "./Features";
import MapLocation from "./MapLocation";
import FloorPlan from "./FloorPlan";
import AttachMents from "./AttachMents";
import Explore from "./Explore";
import LoanCalculator from "./LoanCalculator";
import Nearby from "./Nearby";
import GuestReview from "./GuestReview";
import ContactSeller from "./ContactSeller";
import WidgetBox from "./WidgetBox";
import WhyChoose from "./WhyChoose";
import LeatestProperties from "./LeatestProperties";
export default function PropertyDetails() {
  return (
    <>
      <section className="flat-section-v3 flat-property-detail">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="single-property-element single-property-desc">
                <Description />
              </div>
              <div className="single-property-element single-property-overview">
                <Overview />
              </div>
              <div className="single-property-element single-property-video">
                <Video />
              </div>
              <div className="single-property-element single-property-info">
                <Details />
              </div>
              <div className="single-property-element single-property-feature">
                <Features />
              </div>
              <div className="single-property-element single-property-map">
                <MapLocation />
              </div>
              <div className="single-property-element single-property-floor">
                <FloorPlan />
              </div>
              <div className="single-property-element single-property-attachments">
                <AttachMents />
              </div>
              <div className="single-property-element single-property-explore">
                <Explore />
              </div>
              <div className="single-property-element single-property-loan">
                <LoanCalculator />
              </div>
              <div className="single-property-element single-property-nearby">
                <Nearby />
              </div>
              <div className="single-property-element single-wrapper-review">
                <GuestReview />
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="single-sidebar fixed-sidebar">
                <div className="widget-box single-property-contact">
                  <ContactSeller />
                </div>
                <div className="flat-tab flat-tab-form widget-filter-search widget-box">
                  <WidgetBox />
                </div>
                <div className="widget-box single-property-whychoose">
                  <WhyChoose />
                </div>
                <div className="box-latest-property">
                  <LeatestProperties />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
}
