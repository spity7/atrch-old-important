import AddProperty from "@/components/dashboard/AddProperty";
import UpdateProperty from "@/components/dashboard2/UpdateProperty";
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

export default function UpdatePropertyPage() {
  let params = useParams();

  const { fetchPropertyByPropertyId } = useGlobalContext();

  const [propertyItem, setPropertyItem] = useState(null); // State to store the property
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const propertyId = params.id;
    const fetchProperty = async () => {
      try {
        setLoading(true);
        setError(null);
        const property = await fetchPropertyByPropertyId(propertyId);
        if (!property) {
          setError("Property not found");
          setPropertyItem(null);
        } else {
          setPropertyItem(property);
        }
      } catch (err) {
        setError("Property not found");
        setPropertyItem(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [fetchPropertyByPropertyId, params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="layout-wrap">
        <Header1 />
        <UpdateProperty propertyItem={propertyItem} />
        <div className="overlay-dashboard" />
        <Footer1 />
      </div>
    </>
  );
}
