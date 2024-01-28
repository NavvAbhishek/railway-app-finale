"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GrSchedule } from "react-icons/gr";
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
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-5 my-10">
      {boxes.map((box, index) => (
        <div
          data-aos="fade-up"
          key={index}
          className="bg-dark-blue text-dark-yellow flex items-center p-3 rounded-lg gap-3 max-w-[225px] cursor-pointer w-1/2  transition ease-in-out duration-1000 hover:scale-110"
        >
          <p className="text-orange">{box.icon}</p>
          <div>
            <p className="text-lg font-bold ">{box.title}</p>
            <p className="text-xs">{box.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesBar;
