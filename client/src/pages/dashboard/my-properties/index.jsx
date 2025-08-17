import MyProperty from "@/components/dashboard2/MyProperties";
import Header1 from "@/components/headers/Header1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import Footer1 from "@/components/footer/Footer1";
const metadata = {
  title: "My Property || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function PropertiesPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="layout-wrap">
        <Header1 />
        <MyProperty />
        <div className="overlay-dashboard" />
        <Footer1 />
      </div>
    </>
  );
}
