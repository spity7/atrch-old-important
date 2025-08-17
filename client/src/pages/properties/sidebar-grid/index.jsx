import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Properties4 from "@/components/properties/Properties4";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Sedebar Grid Property || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function SidebarGridPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <Properties4 />
      <Footer1 />
    </>
  );
}
