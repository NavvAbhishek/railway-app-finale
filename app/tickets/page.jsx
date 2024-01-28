"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BsCalendarDate } from "react-icons/bs";
import dayjs from "dayjs";
import Navbar from "@/components/Navbar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

const Tickets = () => {
  const [btnClick, setBtnClick] = useState(false);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getNum = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const Distance = getNum(100, 300);
    const Duration = getNum(1, 15);
    const Price = getNum(500, 2000);
    setDistance(Distance);
    setDuration(Duration);
    setPrice(Price);
  }, []);

  return (
    <div className="bg-white opacity-100 pattern-bg min-h-screen">
      <Navbar />
      <div className="">
        <div className="flex justify-center items-center gap-10 md:flex-row flex-col md:w-[60%] w-[80%] mx-auto">
          <div>
            {/* //! -------------------------- FROM --------------------------  */}
            <div className="mt-4 md:min-w-[200px] w-[350px]">
              <label
                htmlFor="from"
                className="block text-sm font-medium text-dark-yellow"
              >
                From
              </label>
              <select
                id="from"
                name="from"
                className="mt-1 block w-full pl-3 pr-24 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              >
                <option value="" disabled hidden>
                  - SELECT -
                </option>
                {destinations.map((destination, index) => (
                  <option value={destination} key={index}>
                    {destination}
                  </option>
                ))}
              </select>
            </div>
            {/* //! -------------------------- TO --------------------------  */}
            <div className="mt-4 md:min-w-[200px] w-[350px]">
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
                {destinations.map((destination, index) => (
                  <option value={destination} key={index}>
                    {destination}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            {/* //! -------------------------- DATE --------------------------  */}
            <div className="md:min-w-[200px] w-[350px] text-dark-blue mt-10">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem>
                <DatePicker label="" />
              </DemoItem>
            </LocalizationProvider>
            </div>
            {/* //! -------------------------- TIME --------------------------  */}
            <div className="md:min-w-[200px] w-[350px] text-dark-blue mt-10">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem>
                  <MobileTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
                </DemoItem>
              </LocalizationProvider>
            </div>
          </div>
        </div>
        {/* //! -------------------------- Buttons --------------------------  */}
        <div className="flex justify-center items-center flex-col-reverse md:flex-row mt-10 gap-5">
          <div>
            <button
              onClick={() => setBtnClick(!btnClick)}
              className="custome-btn md:w-[200px] w-[350px]"
            >
              <span>Calculate Price</span>
            </button>
          </div>
          <Link href="/booking/train">
            <button className="custome-btn md:w-[200px] w-[350px]">
              <span>Book Tickets</span>
            </button>
          </Link>
        </div>
        {/* //! -------------------------- Price --------------------------  */}
        {btnClick && (
          <div className="flex flex-col items-center mt-8">
            <div className="bg-dark-blue p-5 rounded-lg">
              <h1 className="text-2xl font-bold text-dark-yellow">
                Distance - <span className="font-normal">{distance} KM</span>
              </h1>
              <h1 className="text-2xl font-bold text-dark-yellow">
                Duration - <span className="font-normal">{duration} H</span>
              </h1>
              <h1 className="text-2xl font-bold text-dark-yellow">
                Price - <span className="font-normal">{price} LKR</span>
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;
