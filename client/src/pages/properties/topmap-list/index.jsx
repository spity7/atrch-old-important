import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Properties5 from "@/components/properties/Properties5";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Topmap List Property || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function TopmapListPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <Properties5 />
      <Footer1 />
    </>
  );
}
