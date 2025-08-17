import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Faqs from "@/components/otherPages/Faqs";
import PageTitle4 from "@/components/otherPages/PageTitle4";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Faq || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function FaqPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <PageTitle4 />
      <Faqs />
      <Footer1 />
    </>
  );
}
