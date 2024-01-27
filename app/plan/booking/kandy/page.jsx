"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import HotelImg1 from "@/public/hotel1.png";
import HotelImg2 from "@/public/hotel2.png";
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
                  Hotel in City Centre
                </div>
                <a
                  href="#"
                  className="block mt-1 leading-tight font-bold text-xl text-black hover:underline"
                >
                  Sevana City Hotel
                </a>
                <p className="mt-2 text-sm text-gray-500">
                  Sevana City Hotel is located just 1.3 km from the Kandy
                  Railway Station and 6 km from the famous Bogambara Stadium.
                  Free WiFi access is available. Each room will provide you with
                  a work desk.
                </p>
              </div>
            </div>
            <div className={`p-3 ${isHovered ? "bg-white" : "bg-white"} `}>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-dark-blue">
                  LKR 12,249.56
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
                    8.3
                  </span>
                </div>
                <div className="flex ml-auto">
                  <span className="text-sm text-gray-500">986 reviews</span>
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
                HOTEL IN CITY CENTRE
                </div>
                <a
                  href="#"
                  className="block mt-1 leading-tight font-bold text-xl text-black hover:underline"
                >
                  Lakewood Residence
                </a>
                <p className="mt-2 text-sm text-gray-500">
                Situated in Kandy, a 3-minute walk from Kandy City Center Shopping Mall, Lakewood Residence features free bikes and an outdoor swimming pool, as well as free WiFi.
                </p>
              </div>
            </div>
            <div className={`p-3 ${isHovered ? "bg-white" : "bg-white"} `}>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-dark-blue">
                  LKR 17,597.56
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
                  <span className="text-sm text-gray-500">676 reviews</span>
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
