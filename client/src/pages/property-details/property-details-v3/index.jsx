import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import DetailsTitle1 from "@/components/property-details/DetailsTitle1";
import Gallery from "@/components/property-details/Gallery";
import PropertyDetails from "@/components/property-details/PropertyDetails";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Property Details 03 || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function PropertyDetailsPageV3() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <DetailsTitle1 />
      <Gallery />
      <PropertyDetails />
      <Footer1 />
    </>
  );
}
