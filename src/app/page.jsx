import HeroSlide from "@/components/home/HeroSlide/HeroSlide";
import HomeCollections from "@/components/home/HomeCollections/HomeCollections";

import Footer from "@/components/shared/Footer";

import Navbar from "@/components/shared/Navbar";

import React from "react";

const page = async () => {
  return (
    <div className=" overflow-hidden ">
      <Navbar />

      <div className="mt-20 mb-10 ">
        <HeroSlide />
      </div>

      <div className=" mb-10 ">
        <HomeCollections />
      </div>

      <Footer />
    </div>
  );
};

export default page;
