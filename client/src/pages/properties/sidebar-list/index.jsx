import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";

import Properties6 from "@/components/properties/Properties6";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Sedebar List Property || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function SidebarListPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <Properties6 />
      <Footer1 />
    </>
  );
}
