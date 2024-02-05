"use client";
import React, { useState } from "react";
import Image from "next/image";
import pic1 from "@/public/galle/pic1.png";
import pic2 from "@/public/galle/pic2.png";
import pic3 from "@/public/galle/pic3.png";
import pic4 from "@/public/galle/pic4.png";
import pic5 from "@/public/galle/pic5.png";
import pic6 from "@/public/galle/pic6.png";

const places = [
  {
    title: "Galle Fort",
    desc: "A UNESCO World Heritage site, Galle Fort is a historic fortification that offers stunning views of the Indian Ocean. Its cobblestoned streets are lined with colonial buildings, boutiques, and cafes.",
    img: pic1,
  },
  {
    title: "Dutch Reformed Church",
    desc: "Built in 1755, this church is known for its Baroque architecture and contains elaborately carved memorials, a historic organ, and well-preserved Dutch colonial elements.",
    img: pic2,
  },
  {
    title: "Galle Lighthouse",
    desc: "Situated at the southeastern end of Galle Fort, this is Sri Lanka's oldest light station dating back to 1848. It's an iconic structure offering picturesque views of the surrounding ocean.",
    img: pic3,
  },
  {
    title: "Unawatuna Beach",
    desc: "A short drive from Galle, Unawatuna is a beautiful and popular beach known for its golden sands, clear waters, and lively atmosphere. It's great for swimming, snorkeling, and enjoying seafood.",
    img: pic4,
  },
  {
    title: "Yatagala Raja Maha Viharaya",
    desc: "An ancient Buddhist temple located about 15 minutes from Galle, it's known for its rock cave, ancient murals, and peaceful ambiance, giving visitors a glimpse into Sri Lanka's Buddhist culture.",
    img: pic5,
  },
  {
    title: "Jungle Beach",
    desc: "Nestled in a secluded area near Unawatuna, Jungle Beach is less crowded and offers a peaceful retreat with its small but picturesque beach surrounded by lush greenery.",
    img: pic6,
  },

];

const SectionGalle = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleButtonClick = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      window.location.href = "/plan/booking/galle"; // Redirect after 4 seconds
    }, 4000);
  };
  return (
    <div>
      {showAnimation && (
        <div className="fullscreen-animation">
          <div className="searching-text font-bold">Searching Nearest Hotels...</div>
          <div className="searching-dots">
            <div className="searching-circle"></div>
            <div className="searching-circle"></div>
            <div className="searching-circle"></div>
          </div>
        </div>
      )}
      <div className="flex flex-wrap gap-5 justify-center mt-4">
        {places.map((place, index) => (
          <div key={index} className="max-w-sm w-full mt-12">
            <h1 className="text-2xl text-dark-blue font-bold mb-2">
              {place.title}
            </h1>
            <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
              <Image
                src={place.img}
                fill={true} // Use 'fill' layout to cover the container
                style={{objectFit: "cover"}} // Cover the container while preserving aspect ratio
                alt={place.title}
                className="transition duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <p className="mb-4 text-sm mt-4">{place.desc}</p>
          <button className="custome-btn" onClick={handleButtonClick}>
              <span>Find Hotel Nearby</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionGalle;
