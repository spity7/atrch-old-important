import Header1 from "@/components/headers/Header1";
import Properties2 from "@/components/properties/Properties2";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Property Halfmap Grid || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function PropertyHalfmapListPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <Properties2 />
    </>
  );
}
