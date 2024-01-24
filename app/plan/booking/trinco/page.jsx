"use client";
import Navbar from "@/app/components/Navbar";
import React from "react";
import Image from "next/image";
import HotelImg1 from "@/public/trinco/hotel1.png";
import HotelImg2 from "@/public/trinco/hotel2.png";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const page = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="bg-white opacity-100 pattern-bg min-h-screen py-12">
        <div className="flex flex-wrap">
          {/*//! ---------------------- Hotel 1---------------- */}
          <div
            className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl mb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex justify-center items-center flex-col md:flex md:flex-row">
              <div className="md:flex-shrink-0 md:w-auto">
                <Image
                  src={HotelImg1} // Replace with a relevant Unsplash image
                  alt="Hotel"
                  className="w-full md:h-48 md:w-56 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="uppercase tracking-wide text-xs text-dark-yellow font-semibold">
                  Uppuveli Beach, Trincomalee
                </div>
                <a
                  href="#"
                  className="block mt-1 leading-tight font-bold text-xl text-black hover:underline"
                >
                  Trinco Blu by Cinnamon
                </a>
                <p className="mt-2 text-sm text-gray-500">
                  Trinco Blu by Cinnamon is a luxurious 4-star beachfront resort
                  located 6.5 km from Trincomalee. It provides spacious
                  accommodation with a freshwater pool, 3 dining options and
                  free Wi-Fi.
                </p>
              </div>
            </div>
            <div className={`p-3 ${isHovered ? "bg-white" : "bg-white"} `}>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-dark-blue">
                  LKR 42,249.56
                </span>
                <button className="custome-btn">
                  <span>Book Now</span>
                </button>
              </div>
              <div className="flex mt-4">
                <div className="flex items-center mr-2 text-dark-yellow">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex items-center">
                  <span className="ml-1 text-sm text-gray-600">Very Good</span>
                  <span className="px-2 ml-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    9.8
                  </span>
                </div>
                <div className="flex ml-auto">
                  <span className="text-sm text-gray-500">706 reviews</span>
                </div>
              </div>
            </div>
          </div>
          {/*//! ---------------------- Hotel 2---------------- */}
          <div
            className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl mb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex justify-center items-center flex-col md:flex md:flex-row">
              <div className="md:flex-shrink-0 md:w-auto">
                <Image
                  src={HotelImg2} // Replace with a relevant Unsplash image
                  alt="Hotel"
                  className="w-full md:h-48 md:w-56 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="uppercase tracking-wide text-xs text-dark-yellow font-semibold">
                Trincomalee
                </div>
                <a
                  href="#"
                  className="block mt-1 leading-tight font-bold text-xl text-black hover:underline"
                >
                Amaranthe Bay Resort & Spa
                </a>
                <p className="mt-2 text-sm text-gray-500">
                Offering an outdoor swimming pool and a spa and wellness centre, Amaranthe Bay Resort & Spa is located just 5 km north of the Trincomalee town on the beautiful East Coast of Sri Lanka. Free WiFi access is available in this resort.
                </p>
              </div>
            </div>
            <div className={`p-3 ${isHovered ? "bg-white" : "bg-white"} `}>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-dark-blue">
                  LKR 28.076.26
                </span>
                <button className="custome-btn">
                  <span>Book Now</span>
                </button>
              </div>
              <div className="flex mt-4">
                <div className="flex items-center mr-2 text-dark-yellow">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <div className="flex items-center">
                  <span className="ml-1 text-sm text-gray-600">Good</span>
                  <span className="px-2 ml-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    8.5
                  </span>
                </div>
                <div className="flex ml-auto">
                  <span className="text-sm text-gray-500">976 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
