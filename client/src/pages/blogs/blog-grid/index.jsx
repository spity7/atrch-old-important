import Blogs2 from "@/components/blogs/Blogs2";

import PageTitle2 from "@/components/blogs/PageTitle2";
import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Blog Grid || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function BlogGridPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <PageTitle2 />
      <Blogs2 />
      <Footer1 />
    </>
  );
}
