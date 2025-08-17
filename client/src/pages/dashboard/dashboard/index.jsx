import Dashboard from "@/components/dashboard/Dashboard";
import SidebarMenu from "@/components/dashboard/SidebarMenu";
import Header2 from "@/components/headers/Header2";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Dashboard || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function DashboardPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="layout-wrap">
        <Header2 />
        <SidebarMenu />
        <Dashboard />
        <div className="overlay-dashboard" />
      </div>
    </>
  );
}
