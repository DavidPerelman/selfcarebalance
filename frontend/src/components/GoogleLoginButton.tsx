"use client";

import Image from "next/image";
import React from "react";

const getGoogleLoginUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:8000/auth/google/login";
  }

  // שים כאן את הכתובת של השרת ב־Render
  return "https://selfcarebalance.onrender.com/auth/google/login";
};

export default function GoogleLoginButton() {
  return (
    <a
      href={getGoogleLoginUrl()}
      className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded shadow w-fit"
      dir="rtl"
    >
      <Image
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        width={5}
        height={5}
        className="w-5 h-5"
      />
      התחבר עם Google
    </a>
  );
}
