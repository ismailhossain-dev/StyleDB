"use server";
import CollectionCard from "@/components/cards/CollectionCard";
import Title from "@/components/Title/Title";
import Link from "next/link";
import React from "react";

const HomeCollections = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/homeCollections`);
  const data = await res.json();
  // console.log(data);
  //   console.log(data.data);
  return (
    <div>
      <div>
        <Title> Our New Collection</Title>

        <Link className="text-blue-700 text-2xl font-bold text-right" href="collections">
          See all collections
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.data.map((collection) => (
          <CollectionCard key={collection._id} collection={collection}></CollectionCard>
        ))}
      </div>
    </div>
  );
};

export default HomeCollections;
