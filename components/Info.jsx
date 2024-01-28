import React from "react";
import Link from "next/link";

const InfoSection = () => {
  return (
    <div className="w-[90%] md:w-[90%] flex flex-col md:flex-row gap-10  mx-auto my-12">
      {/* //! ---------- WHY ---------- */}
      <div className="flex flex-col md:gap-5  bg-white rounded-xl shadow-md p-8">
        <h1 className="capitalize text-dark-blue text-2xl md:text-3xl font-bold rounded-lg p-2">
          Why you use Train as your Transportation Service?
        </h1>
        <Link href="/why">
          <button className="custome-btn mt-5">
            <span>Tap to Learn More</span>
          </button>
        </Link>
      </div>
      {/* //! ---------- FEEDBACK ---------- */}
      <div className="flex flex-col gap-5 bg-white rounded-xl shadow-md p-8">
        <h1 className="capitalize text-dark-blue text-2xl md:text-3xl font-bold rounded-lg p-2">
          What passengers says about us?
        </h1>
        <Link href="/feedback">
          <button className="custome-btn mt-5">
            <span>View Feedbacks</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InfoSection;
