"use client";
import { useRouter } from "next/navigation";
import React from "react";

function AddToCart({ data }) {
  const router = useRouter();
  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={() => router.push("/login")}
        className="flex-1 bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors active:scale-95"
      >
        Add to Cart
      </button>
      <button className="p-4 border rounded-xl hover:bg-gray-50 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default AddToCart;
