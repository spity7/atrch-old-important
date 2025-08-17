import AddProperty from "@/components/dashboard/AddProperty";

import SidebarMenu from "@/components/dashboard/SidebarMenu";
import Header2 from "@/components/headers/Header2";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Add Property || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function AddPropertyPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="layout-wrap">
        <Header2 />
        <SidebarMenu />
        <AddProperty />
        <div className="overlay-dashboard" />
      </div>
    </>
  );
}
