import AddProperty from "@/components/dashboard/AddProperty";
import MyFavorite from "@/components/dashboard/MyFavorite";

import SidebarMenu from "@/components/dashboard/SidebarMenu";
import Header2 from "@/components/headers/Header2";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "My Favorite || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function MyFavoritePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="layout-wrap">
        <Header2 />
        <SidebarMenu />
        <MyFavorite />
        <div className="overlay-dashboard" />
      </div>
    </>
  );
}
