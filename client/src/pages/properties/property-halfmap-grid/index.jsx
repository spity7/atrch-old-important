import Header1 from "@/components/headers/Header1";
import Properties1 from "@/components/properties/Properties1";
import React from "react";
import PageTitle from "@/components/otherPages/gallery/PageTitle";
import Footer1 from "@/components/footer/Footer1";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Gallery",
  description: "Mila",
};
export default function PropertyHalfmapGridPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <PageTitle />
      <Properties1 />
      <Footer1 />
    </>
  );
}
