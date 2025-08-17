import Banner from "@/components/common/Banner";
import Faqs from "@/components/common/Faqs";
import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Contact from "@/components/otherPages/Contact";
import PageTitle3 from "@/components/otherPages/PageTitle3";
import React from "react";
import Benefit from "@/components/homes/home-2/Benefit";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Contact Us",
  description: "Mila",
};
export default function ContactPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <Benefit />
      {/* <PageTitle3 /> */}
      <Contact />
      {/* <Faqs /> */}
      {/* <Banner /> */}
      <Footer1 />
    </>
  );
}
