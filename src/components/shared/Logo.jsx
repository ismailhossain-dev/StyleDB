import React from "react";
import nextjsLogo from "../../assets/nextLogo.png";
import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="flex gap-2 items-center">
        <Image width={30} height={30} src={nextjsLogo} alt="Logo"></Image>
        <h1 className="text-2xl font-bold">Framework</h1>
      </Link>
    </div>
  );
};

export default Logo;
