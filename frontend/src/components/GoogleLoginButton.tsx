"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";

const getGoogleLoginUrl = () => {
  return process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL!;
};

export default function GoogleLoginButton() {
  return (
    <a
      href={getGoogleLoginUrl()}
      className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded shadow text-right w-fit"
      dir="rtl"
    >
      <FcGoogle size={20} />
      התחבר עם Google
    </a>
  );
}
