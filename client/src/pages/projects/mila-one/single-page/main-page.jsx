import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import DetailsTitle1 from "@/components/otherPages/projects/mila-one/single/DetailsTitle";
import Gallery from "@/components/otherPages/projects/mila-one/single/Gallery";
import PropertyDetails from "@/components/otherPages/projects/mila-one/single/PropertyDetails";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
import { useGlobalContext } from "@/context/globalContext";
const metadata = {
  title: "Property Details",
  description: "Mila",
};
export default function PropertyDetailsPageV3() {
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

  // useEffect(() => {
  //   const fetchProperty = async () => {
  //     try {
  //       const response = await fetchProperties(); // Fetch all properties
  //       const property = response.properties.find(
  //         (elm) => elm.propertyId == params.id // Match propertyId with params.id
  //       );
  //       if (!property) {
  //         throw new Error("Property not found");
  //       }
  //       setPropertyItem(property);
  //     } catch (err) {
  //       console.error("Error fetching property:", err);
  //     } finally {
  //     }
  //   };

  //   fetchProperty();
  // }, [params.id]);

  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <DetailsTitle1 propertyItem={propertyItem} />
      <Gallery propertyItem={propertyItem} />
      <PropertyDetails propertyItem={propertyItem} />
      <Footer1 />
    </>
  );
}
