import Image from "next/image";
import React from "react";
import registerLogo from "../../assets/registerImage.png";
const Register = () => {
  return (
    <div className="my-20 max-w-7xl mx-auto">
      <div className="flex items-center gap-10 ">
        {/* left banner */}
        <div className="flex-1 relative">
          <Image
            width={400}
            height={500}
            src={registerLogo}
            className="w-full h-120 object-cover"
            alt="register logo"
          ></Image>

          <div className="absolute bottom-20 ">
            <h1 className="text-4xl font-bold text-pink-600 text-center">Welcome! 👋</h1>
          </div>
        </div>

        {/* Form */}
        <div className="text-black flex-1">Form section</div>
      </div>
    </div>
  );
};

export default Register;
