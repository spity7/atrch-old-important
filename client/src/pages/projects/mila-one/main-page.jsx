import Header1 from "@/components/headers/Header1";
import Properties1 from "@/components/properties/Properties1";
import Services_2 from "@/components/homes/home-1/Services_2";
import React from "react";
import PageTitle from "@/components/otherPages/projects/mila-one/single/PageTitle";
import Footer1 from "@/components/footer/Footer1";
import PropertiesRent from "@/components/otherPages/projects/mila-one/PropertiesRent";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Mila One",
  description: "Mila",
};
export default function PropertyHalfmapGridPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <PageTitle />
      <PropertiesRent />
      <Footer1 />
    </>
  );
}
