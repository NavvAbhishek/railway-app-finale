import React from "react";
import Image from "next/image";
import TripImg from "@/public/ticket-booking.png";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const TrainBookSection = () => {
  return (
    <div>
      <div className="lg:max-w-[80%] max-w-[90%] mx-auto my-16">
        <div className="flex justify-center items-center flex-col md:flex-row">
          <div className="md:w-[50%]">
            <Image
              src={TripImg}
              alt="Logo"
              className="w-[500px] h-[500px] object-contain rounded-xl"
            />
          </div>
          <div className="text-dark-blue md:w-[50%]">
            <h1 className="text-3xl uppercase font-extrabold">
              Book your tickets
            </h1>
            <p className="text-md  mt-5">
              Begin on your next journey with ease using our streamlined ticket
              booking service. With just a few taps, you can secure your travel
              plans from the comfort of your home. Our user-friendly platform
              ensures a hassle-free booking experience, allowing you to choose
              your preferred seats, access exclusive deals, and manage your
              bookings on the go.
            </p>
            <p className="mt-5">
              Whether you're planning a leisurely trip or a business commute,
              our app puts convenient and flexible travel solutions at your
              fingertips. Start your adventure now and experience a smarter way
              to travel!
            </p>
            <Link href="/tickets">
              <button className="group flex items-center gap-1 mt-5 bg-dark-yellow px-3 py-3 rounded-lg font-bold cursor-pointer transition-all ">
                <p>Get Ticket</p>
                <MdOutlineKeyboardDoubleArrowRight className="h-7 w-7 transform group-hover:translate-x-1.5 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainBookSection;
