import React from "react";

const Title = ({ children }) => {
  return (
    <h1 className="text-4xl text-center text-primary font-bold font-bold mt-25 mb-10 uppercase">
      {children}
    </h1>
  );
};

export default Title;
