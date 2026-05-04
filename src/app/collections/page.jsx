import CollectionCard from "@/components/cards/CollectionCard";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const AllCollectionPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/allCollections`);
  const data = await res.json();
  // console.log(data.data);
  return (
    <div>
      <Navbar />
      <div className="mt-20 mb-10 ">
        <h1 className="text-4xl text-center text-primary font-bold font-bold mt-25 mb-10 uppercase">
          Our New All Collection
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.data.map((collection) => (
            <CollectionCard key={collection._id} collection={collection}></CollectionCard>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllCollectionPage;
