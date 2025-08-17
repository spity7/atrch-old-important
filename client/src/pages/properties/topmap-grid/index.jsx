import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Properties3 from "@/components/properties/Properties3";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Topmap Grid Property || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function TopmapGridPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <Properties3 />
      <Footer1 />
    </>
  );
}
