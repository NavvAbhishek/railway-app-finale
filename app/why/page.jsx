"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Img from "@/public/why.png";
import Navbar from "@/components/Navbar";

const Details = [
  {
    title: "Eco-Friendly Travel",
    desc: " Trains are among the most environmentally friendly modes of transport. With lower emissions compared to cars and airplanes, trains significantly reduce your carbon footprint, making them a sustainable choice for conscious travelers.",
    aos: "fade-left",
  },
  {
    title: "Save More, Travel More",
    desc: "Train travel is often more affordable than other modes of transportation. With various discounts and passes available, it's an economical choice for both regular commuters and occasional travelers.",
    aos: "fade-right",
  },
  {
    title: "Enjoy the Beauty of the Journey",
    desc: "Traveling by train offers the unique opportunity to see landscapes and vistas not visible from the road. Whether it’s rolling countryside, majestic mountains, or urban cityscapes, the views from a train window make every journey memorable.",
    aos: "fade-left",
  },
  {
    title: " On Time, Every Time",
    desc: " Trains are known for their punctuality and reliability. With fixed schedules and frequent services, they provide a dependable mode of transport for those who need to reach their destination on time.",
    aos: "fade-right",
  },
  {
    title: "Comfort and Convenience",
    desc: " Enjoy spacious seating, ample legroom, and the freedom to move around. Many trains also offer dining services, Wi-Fi, and power outlets, ensuring a comfortable and connected journey.",
    aos: "fade-left",
  },
  {
    title: "Making Travel Easy for Everyone",
    desc: "Trains are designed to be accessible to all, including those with mobility challenges. Facilities like step-free access, reserved seating, and assistance services make train travel a convenient option for everyone.",
    aos: "fade-right",
  },
  {
    title: "Safety First",
    desc: "Trains are one of the safest modes of transportation. With professional staff, constant monitoring, and stringent safety protocols, you can sit back and relax, knowing you’re in good hands.",
    aos: "fade-left",
  },
  {
    title: "Covering More Destinations",
    desc: "Trains connect not just cities but often rural and remote areas as well, making them a vital link in the transportation network. This extensive connectivity means trains are a great option for exploring new destinations.",
    aos: "fade-right",
  },
  {
    title: "Family-Friendly",
    desc: " With spacious carriages and the freedom to walk around, train travel is ideal for families. Children can play, and parents can relax, making the journey enjoyable for everyone.",
    aos: "fade-left",
  },
  {
    title: "Supporting Local Communities",
    desc: "Train travel often supports local economies and communities. By choosing trains, you're contributing to the maintenance of this vital infrastructure and the regions it serves.",
    aos: "fade-right",
  },
];

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="min-h-screen pattern-bg overflow-hidden">
      <Navbar />
      <div>
        <h1
          className="text-dark-blue text-3xl font-bold capitalize pt-8 text-center"
        >
          What are the benefits of using train?
        </h1>
      </div>
      <div data-aos="fade-up" className="flex justify-center ">
        <Image
          src={Img}
          alt="Picture of the author"
          width={400}
          height={400}
          className="rounded-lg my-6"
        />
      </div>
      <div>
        {Details.map((detail, index) => (
          <div
            data-aos={detail.aos}
            key={index}
            className="w-[90%] md:w-[60%] mx-auto my-5"
          >
            <h2 className="text-2xl text-dark-blue font-bold">
              {detail.title}
            </h2>
            <p className="text-dark-blue">{detail.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
