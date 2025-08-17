import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import PageTitle5 from "@/components/otherPages/PageTitle5";
import PrivacyPolicy from "@/components/otherPages/PrivacyPolicy";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Privacy Policy || Homelengo - Real Estate Reactjs Template",
  description: "Homelengo - Real Estate Reactjs Template",
};
export default function PrivacyPolicyPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <PageTitle5 />
      <PrivacyPolicy />
      <Footer1 />
    </>
  );
}
