import React from "react";
import Image from "next/image";
import TripImg from "@/public/TripImg.png";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const TripSection = () => {
  return (
    <div>
      <div className="lg:max-w-[80%] max-w-[90%] mx-auto mt-6 mb-12">
        <div className="flex justify-center items-center flex-col-reverse md:flex-row">
          <div className="text-dark-blue md:w-[50%]">
            <h1 className="text-3xl uppercase font-extrabold">
              Discover your Destination
            </h1>
            <p className="text-md  mt-5">
              This is your gateway to uncovering the wonders that await you at
              every stop.This comprehensive guide is designed to inspire and
              assist you in exploring the rich tapestry of destinations
              accessible by rail.
            </p>
            <p className="mt-5">
              From bustling city centers brimming with history and culture to
              serene landscapes offering a tranquil escape, our platform
              provides detailed insights into each locale. Unearth hidden gems,
              learn about local customs, and plan visits to must-see landmarks
              and attractions.
            </p>
            <Link href="/plan">
              <button className="custome-btn group  mt-5 bg-dark-yellow px-3 py-3 rounded-lg font-bold cursor-pointer transition-all ">
                <span className="flex items-center justify-center gap-1">
                  <p>Let's Discover</p>
                  <MdOutlineKeyboardDoubleArrowRight className="h-7 w-7 transform group-hover:translate-x-1.5 transition-transform" />
                </span>
              </button>
            </Link>
          </div>
          <div className="md:w-[50%]">
            <Image
              src={TripImg}
              alt="Logo"
              className="w-[500px] h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSection;
