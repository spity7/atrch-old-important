import Banner from "@/components/common/Banner";
import Faqs from "@/components/common/Faqs";
import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import PageTitle2 from "@/components/otherPages/PageTitle2";
import Pricing from "@/components/otherPages/Pricing";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Pricing || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function PricingPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <PageTitle2 />
      <Pricing />
      <Faqs />
      <Banner />
      <Footer1 />
    </>
  );
}
