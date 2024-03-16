"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const LogoutCom = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const options = {
      method: "GET",
    };
    let res = await fetch("/api/logout", options);
    let data = await res.json();
    if (res["status"] == 200) {
      toast.success(data.message);
      router.push("/");
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div>
      {" "}
      <button
        onClick={handleLogout}
        className="  bg-red-600 text-white font-semibold text-wrap px-2 py-1 rounded-md "
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutCom;
