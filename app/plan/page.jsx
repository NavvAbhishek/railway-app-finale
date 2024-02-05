"use client";
import React, { useState } from "react";
import SectionKandy from "@/components/places/kandy";
import SectionGalle from "@/components/places/galle";
import SectionColombo from "@/components/places/colombo";
import SectionPoloAnu from "@/components/places/anuPolo";
import SectionTrinco from "@/components/places/trinco";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
const places = [
  "Kandy",
  "Colombo",
  "Galle",
  "Anuradhapura & Polonnaruwa",
  "Trincomalee",
];

const Page = () => {
  const [destination, setDestination] = useState("");
  return (
    <div>
      <Navbar />
      <div className="bg-white opacity-100 pattern-bg min-h-screen py-12">
        <div>
          <div className="text-center">
            <h1 className="text-3xl font-extrabold uppercase text-dark-blue">
              Plan your dream trip
            </h1>
          </div>
          <div className="mt-8 max-w-[90%] lg:max-w-[40%] mx-auto">
            <select
              id="destination"
              name="destination"
              className="mt-1 text-xl block w-full pl-3 pr-10 py-2 text-dark-yellow bg-dark-blue border-2 border-yellow-300  focus:ring-dark-yellow focus:border-dark-yellow rounded-md"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="" disabled hidden>
                - CHOOSE YOUR DESTINATION -
              </option>
              {places.map((place, index) => (
                <option key={index} value={place} className="text-xl">
                  {place}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          {destination === "Kandy" ? <SectionKandy /> : ""}
          {destination === "Galle" ? <SectionGalle /> : ""}
          {destination === "Colombo" ? <SectionColombo /> : ""}
          {destination === "Anuradhapura & Polonnaruwa" ? (
            <SectionPoloAnu />
          ) : (
            ""
          )}
          {destination === "Trincomalee" ? <SectionTrinco /> : ""}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
