import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import PropertyDetails2 from "@/components/property-details/PropertyDetails2";
import Slider2 from "@/components/property-details/Slider2";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Property Details 02 || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function PropertyDetailsPageV2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <Slider2 />
      <PropertyDetails2 />
      <Footer1 />
    </>
  );
}
