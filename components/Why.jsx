import React from "react";
import Link from "next/link";

const WhySection = () => {
  return (
    <div className="w-[90%] mx-auto my-12">
      <div className="flex flex-col gap-10 ">
        <h1 className="capitalize text-dark-blue text-3xl font-bold bg-dark-yellow rounded-lg p-2">
          Why you use Train as your Transportation Service?
        </h1>
        <Link href="/why">
          <button className="custome-btn mt-5">
            <span>Tap to Learn More</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WhySection;
