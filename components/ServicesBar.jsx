import React from "react";
import { GrSchedule } from "react-icons/gr";
import { GrServicePlay } from "react-icons/gr";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { MdOutlineDevicesOther } from "react-icons/md";

const boxes = [
  {
    title: "Train Schedule",
    description: "View Daily Train Schedule",
    icon: <GrSchedule className="w-8 h-8" />,
  },
  {
    title: "Goods and Parceles",
    description: "Intercity & Express Trains",
    icon: <GiShoppingBag className="w-8 h-8" />,
  },
  {
    title: "Reservations",
    description: "Reservation of seats in intercity and Express Trains",
    icon: <MdOutlineAirlineSeatReclineNormal className="w-9 h-9" />,
  },
  {
    title: "Other Services",
    description: "Offered by Sri Lanka Railways",
    icon: <MdOutlineDevicesOther className="w-9 h-9" />,
  },
];

const ServicesBar = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 my-10">
      {boxes.map((box, index) => (
        <div
          key={index}
          className="bg-light-blue flex items-center p-3 rounded-lg gap-3 max-w-[225px] cursor-pointer w-full sm:w-1/2 lg:w-1/4"
        >
          <p className="text-blue">{box.icon}</p>
          <div>
            <p className="text-lg font-bold text-dark-blue">{box.title}</p>
            <p className="text-xs text-dark-blue">{box.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesBar;
