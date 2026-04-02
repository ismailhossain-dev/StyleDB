import React from "react";
import nextjsLogo from "../../assets/nextLogo.png";
import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <div>
      <Link href="/" className="text-2xl font-black tracking-[3px] uppercase text-black">
        Style<span className="text-blue-600">BD.</span>
      </Link>
    </div>
  );
};

export default Logo;
