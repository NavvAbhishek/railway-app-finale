"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import HotelImg1 from "@/public/colombo/hotel1.png";
import HotelImg2 from "@/public/colombo/hotel2.png";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";

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
                  className="w-full md:h-52 md:w-52 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="uppercase tracking-wide text-xs text-dark-yellow font-semibold">
                  Colombo
                </div>
                <a
                  href="#"
                  className="block mt-1 leading-tight font-bold text-xl text-black hover:underline"
                >
                  Marino Beach Colombo
                </a>
                <p className="mt-2 text-sm text-gray-500">
                  Marino Beach Colombo has an outdoor swimming pool, fitness
                  centre, a garden and terrace in Colombo. Among the facilities
                  of this property are a restaurant, room service and a 24-hour
                  front desk, along with free WiFi throughout the property. The
                  accommodation features an ATM, a concierge service and
                  currency exchange for guests.
                </p>
              </div>
            </div>
            <div className={`p-3 ${isHovered ? "bg-white" : "bg-white"} `}>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-dark-blue">
                  LKR 22,249.56
                </span>
                <Link href="/booking/hotel">
                  <button className="custome-btn">
                    <span>Book Now</span>
                  </button>
                </Link>
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
                    9.7
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
                  Kollupitiya, Colombo
                </div>
                <a
                  href="#"
                  className="block mt-1 leading-tight font-bold text-xl text-black hover:underline"
                >
                  Granbell Hotel Colomb
                </a>
                <p className="mt-2 text-sm text-gray-500">
                  Set in Colombo, 90 metres from Kollupitiya Beach, Granbell
                  Hotel Colombo offers accommodation with an outdoor swimming
                  pool, free private parking, a fitness centre and a terrace.
                  Offering a restaurant, the property also has a bar, as well as
                  a sauna and a hot tub. The accommodation provides room
                  service, a 24-hour front desk and currency exchange for
                  guests.
                </p>
              </div>
            </div>
            <div className={`p-3 ${isHovered ? "bg-white" : "bg-white"} `}>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-dark-blue">
                  LKR 28.076.26
                </span>
                <Link href="/booking/hotel">
                  <button className="custome-btn">
                    <span>Book Now</span>
                  </button>
                </Link>
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
