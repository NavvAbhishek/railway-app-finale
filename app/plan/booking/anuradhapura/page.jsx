"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import HotelImg1 from "@/public/anu&polo/hotel1.png";
import HotelImg2 from "@/public/anu&polo/hotel2.png";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Page = () => {
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
                Anuradhapura City Centre, Anuradhapura
                </div>
                <a
                  href="#"
                  className="block mt-1 leading-tight font-bold text-xl text-black hover:underline"
                >
                Kubura Resort
                </a>
                <p className="mt-2 text-sm text-gray-500">
                Well set in the centre of Anuradhapura, Kubura Resort provides air-conditioned rooms with free WiFi, free private parking and room service. Among the various facilities are an outdoor swimming pool, a garden, as well as a shared lounge. The accommodation features a 24-hour front desk, an ATM and currency exchange for guests.
                </p>
              </div>
            </div>
            <div className={`p-3 ${isHovered ? "bg-white" : "bg-white"} `}>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-dark-blue">
                  LKR 42,249.56
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
                Anuradhapura
                </div>
                <a
                  href="#"
                  className="block mt-1 leading-tight font-bold text-xl text-black hover:underline"
                >
               Hotel 4 U Saliya GardenOpens in new window

                </a>
                <p className="mt-2 text-sm text-gray-500">
                Set in Anuradhapura, 4.9 km from Anuradhapura Railway Station, Hotel 4 U Saliya Garden offers accommodation with an outdoor swimming pool, free private parking, a garden and a terrace. With free WiFi, this 4-star hotel has a restaurant and a bar. The accommodation provides evening entertainment and room service.
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

export default Page;
