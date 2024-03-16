import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-emerald-400 px-5 md:px-16 py-3 text-white flex justify-between items-center">
      <Link href={"/"} className=" font-bold text-2xl">
        BlogBD
      </Link>
      <Link
        href={"/profile"}
        className=" font-semibold bg-white text-emerald-400 px-2 rounded-sm"
      >
        Profile
      </Link>
    </div>
  );
};

export default Header;
