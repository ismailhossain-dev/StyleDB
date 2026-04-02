import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const CollectionDetailsPage = async () => {
  // const CollectionDetailsPage = async ({ params }) => {
  //   const { id } = await params; // ✅ FIX

  //   const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/getSingleData/${id}`, {
  //     cache: "no-store",
  //   });

  //   const data = await res.json();
  return (
    <div>
      <Navbar />
      <div className="mt-20 mb-10">
        <h1>HEllo</h1>
      </div>
      <Footer />
    </div>
  );
};

export default CollectionDetailsPage;
