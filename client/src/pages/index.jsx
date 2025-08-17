import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Agents from "@/components/common/Agents";
import Benefit from "@/components/common/Benefit";
import Benefit_2 from "@/components/common/Benefit_2";
import Blogs from "@/components/homes/home-1/Blogs";
import Brands from "@/components/common/Brands";
import Hero from "@/components/homes/home-1/Hero";
import Locations from "@/components/common/Locations";
import Properties from "@/components/homes/home-1/Properties";
import PropertiesRent from "@/components/homes/home-1/PropertiesRent";
import PropertiesBuy from "@/components/homes/home-1/PropertiesBuy";
import Properties2 from "@/components/homes/home-1/Properties2";
import Services from "@/components/homes/home-1/Services";
import Services_2 from "@/components/homes/home-1/Services_2";
import Testimonials from "@/components/common/Testimonials";
import PropertyMap from "@/components/common/PropertyMap";
import Contact_2 from "@/components/otherPages/Contact_2";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Mila",
  description: "Mila",
};
export default function Home() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <Hero />
      <Benefit_2 />
      {/* <Services_2 /> */}
      <PropertiesRent />
      {/* <PropertiesBuy /> */}
      {/* <Locations /> */}
      {/* <Services /> */}
      {/* <Benefit /> */}
      {/* <Properties2 /> */}
      {/* <Testimonials /> */}
      {/* <Agents /> */}
      {/* <Brands /> */}
      {/* <Blogs /> */}
      <Contact_2 />
      {/* <div className="wrap-right">
        <div id="map" className="top-map">
          <PropertyMap />
        </div>
      </div> */}
      <Footer1 />
    </>
  );
}
