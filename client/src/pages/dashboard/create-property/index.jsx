import AddProperty from "@/components/dashboard/AddProperty";
import CreateProperty from "@/components/dashboard2/CreateProperty";
import SidebarMenu from "@/components/dashboard/SidebarMenu";
import React, { useEffect, useState } from "react";
import MetaComponent from "@/components/common/MetaComponent";
import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "@/context/globalContext";

const metadata = {
  title: "Mila Residence",
  description: "Mila Residence",
};

export default function CreatePropertyPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="layout-wrap">
        <Header1 />
        <CreateProperty />
        <div className="overlay-dashboard" />
        <Footer1 />
      </div>
    </>
  );
}
