import Image from "next/image";
import React from "react";
import userAvater from "@/assets/useravatar.webp";
import { headers } from "next/headers";
import LogoutCom from "@/components/LogoutCom";

const Page = () => {
  const headersList = headers();
  const email = headersList.get("email");

  return (
    <div className=" p-5  md:p-16  space-y-5  flex flex-col items-center justify-center gap-3 ">
      <Image
        src={userAvater}
        width={300}
        height={300}
        alt="user"
        className=" "
      />
      <p className="text-lg font-semibold   text-gray-700">User - {email}</p>
      <LogoutCom />
    </div>
  );
};

export default Page;
