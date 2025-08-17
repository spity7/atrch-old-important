import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import DetailsTitle1 from "@/components/property-details/DetailsTitle1";
import PropertyDetails from "@/components/property-details/PropertyDetails";
import Slider1 from "@/components/property-details/Slider1";
import { allProperties } from "@/data/properties";
import React from "react";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Property Details 01 || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function PropertyDetailsPageV1() {
  let params = useParams();
  const propertyItem =
    allProperties.filter((elm) => elm.id == params.id)[0] || allProperties[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <DetailsTitle1 propertyItem={propertyItem} />
      <Slider1 />
      <PropertyDetails />
      <Footer1 />
    </>
  );
}
