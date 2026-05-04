import CheckoutForm from "@/components/form/CheckoutForm";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const checkoutRoute = () => {
  return (
    <div>
      <Navbar />
      {/* main area */}
      <div className="">
        <CheckoutForm></CheckoutForm>
      </div>
    </div>
  );
};

export default checkoutRoute;
