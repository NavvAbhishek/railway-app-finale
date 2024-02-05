"use client";
import React, { useState } from "react";
import Image from "next/image";
import pic1 from "@/public/anu&polo/pic1.png";
import pic2 from "@/public/anu&polo/pic2.png";
import pic3 from "@/public/anu&polo/pic3.png";
import pic4 from "@/public/anu&polo/pic4.png";
import pic5 from "@/public/anu&polo/pic5.png";
import pic6 from "@/public/anu&polo/pic6.png";


const places = [
  {
    title: "Gal Vihara",
    desc: "A rock temple known for its large Buddha statues carved out of granite, representing different postures of Buddha. It's a masterpiece of Sri Lankan rock carving.",
    img: pic1,
  },
  {
    title: "Polonnaruwa Vatadage",
    desc: "An ancient structure believed to have housed the Relic of the tooth of Buddha. It's noted for its intricate stone carvings and is a prime example of Sri Lankan architecture.",
    img: pic2,
  },
  {
    title: "Sri Maha Bodhi Tree",
    desc: "This sacred fig tree is said to be a cutting from the original Bodhi tree under which Lord Buddha attained enlightenment. It's the oldest living human-planted tree in the world with a known planting date.",
    img: pic3,
  },
  {
    title: "Ruwanwelisaya Stupa",
    desc: "An iconic sacred Buddhist stupa, it's one of the world's tallest ancient monuments and is revered as a masterpiece of ancient architecture and engineering.",
    img: pic4,
  },
  {
    title: "Jethawanaramaya Stupa",
    desc: "Once the world's tallest stupa and the third largest structure in the ancient world. It is a testament to the architectural prowess of the ancient Sinhalese.",
    img: pic5,
  },
  {
    title: "Isurumuniya Temple",
    desc: "Known for its rock carvings, especially the 'Isurumuniya Lovers'. The temple is set beside a pond and carved out of a rock face, offering a peaceful and spiritual atmosphere.",
    img: pic6,
  },

];

const SectionPoloAnu = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleButtonClick = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      window.location.href = "/plan/booking/anuradhapura"; // Redirect after 4 seconds
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

export default SectionPoloAnu;

