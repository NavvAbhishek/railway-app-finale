"use client";
import { useState } from "react";

export default function DistanceCal() {
  const destinations = [
    "Kandy",
    "Nuwara Eliya",
    "Ella",
    "Haputale",
    "Colombo",
    "Galle",
    "Hikkaduwa",
    "Mirissa",
    "Anuradhapura",
    "Polonnaruwa",
    "Sigiriya",
    "Dambulla",
    "Jaffna",
    "Trincomalee",
  ];

  const items = [
    "Chicks in Ventilated Boxes",
    "Fish accompanied by owner",
    "Furniture in Small Lots",
    "Letters",
    "Light weight Articles which require more space",
    "Machinery not weighing over 50 Kg.",
    "other",
  ];

  const trains = [
    "Normal Trains",
    "Express/Semi Express Trains",
    "Intercity Trains",
  ];

  const [buttonClicked, setButtonClicked] = useState(false);
  // State to track each input's value
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [item, setItem] = useState("");
  const [train, setTrain] = useState("");
  const [weight, setWeight] = useState("");

  // Function to check if all fields are filled
  const allFieldsFilled = from && to && item && train && weight;

  return (
    <div className="flex md:justify-start justify-center sm:mt-0 mt-4 sm:ml-4">
      <div className="bg-dark-blue border-4 border-blue-800 px-12 sm:px-4 pt-4 max-w-md sm:max-w-sm rounded-lg shadow-md">
        <h2 className="bg-blue-800 text-white text-2xl text-left font-bold px-4 rounded">
          FIND YOUR DISTANCE AND PARCEL TRANSPORT COST
        </h2>
        {/* //! -------------------------- FROM --------------------------  */}
        <div className="mt-4">
          <label
            htmlFor="from"
            className="block text-sm font-medium text-dark-yellow"
          >
            From
          </label>
          <select
            id="from"
            name="from"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            
          >
            <option value="" disabled hidden>
              - SELECT -
            </option>
            {destinations.map((destination,index) => (
              <option value={destination} key={index}>{destination}</option>
            ))}
          </select>
        </div>
        {/* //! -------------------------- TO --------------------------  */}
        <div className="mt-4">
          <label
            htmlFor="to"
            className="block text-sm font-medium text-dark-yellow"
          >
            To
          </label>
          <select
            id="to"
            name="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            
          >
            <option value="" disabled hidden>
              - SELECT -
            </option>
            {destinations.map((destination,index) => (
              <option value={destination} key={index}>{destination}</option>
            ))}
          </select>
        </div>
        {/* //! -------------------------- ITEM --------------------------  */}
        <div className="mt-4">
          <label
            htmlFor="item"
            className="block text-sm font-medium text-dark-yellow"
          >
            Item
          </label>
          <select
            id="item"
            name="item"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            
          >
            <option value="" disabled hidden>
              - SELECT -
            </option>
            {items.map((item,index) => (
              <option value={item} key={index}>{item}</option>
            ))}
          </select>
        </div>
        {/* //! -------------------------- TRAIN --------------------------  */}
        <div className="mt-4">
          <label
            htmlFor="train"
            className="block text-sm font-medium text-dark-yellow"
          >
            Train
          </label>
          <select
            id="train"
            name="train"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={train}
            onChange={(e) => setTrain(e.target.value)}
            
          >
            <option value="" disabled hidden>
              - SELECT -
            </option>
            {trains.map((train,index) => (
              <option value={train} key={index}>{train}</option>
            ))}
          </select>
        </div>
        {/* //! -------------------------- WEIGHT --------------------------  */}
        <div className="mt-4">
          <label
            htmlFor="weight"
            className="block text-sm font-medium text-dark-yellow"
          >
            Weight (Kg)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          />
        </div>
        {/* //! -------------------------- BUTTON --------------------------  */}
        <div className="mt-4">
         {allFieldsFilled ? 
         <button
         onClick={() => setButtonClicked(!buttonClicked)}
         className="w-full bg-blue-800 text-dark-blue font-bold py-2 px-4 rounded bg-dark-yellow"
         disabled={!allFieldsFilled}
       >
         Calculate
       </button> :
        <button
        onClick={() => setButtonClicked(!buttonClicked)}
        className="w-full bg-blue-800 text-dark-blue font-bold py-2 px-4 rounded bg-dark-yellow"
        disabled={!allFieldsFilled}
      >
        Fill all fields
      </button> 
        }
        </div>
        {/* //! -------------------------- TEXT --------------------------  */}
        <div className="text">
          {buttonClicked ? (
            <p className="text-dark-yellow py-2">
              Distance: 199.831 Km <br />
              Rs. 70 + VAT
            </p>
          ) : (
            <p className="py-8"></p>
          )}
        </div>
      </div>
    </div>
  );
}
