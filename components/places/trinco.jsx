import React from "react";
import Image from "next/image";
import Link from "next/link"; 
import pic1 from "@/public/trinco/pic1.png";
import pic2 from "@/public/trinco/pic2.png";
import pic3 from "@/public/trinco/pic3.png";
import pic4 from "@/public/trinco/pic4.png";
import pic5 from "@/public/trinco/pic5.png";
import pic6 from "@/public/trinco/pic6.png";

const places = [
  {
    title: "Koneswaram Temple",
    desc: "A classical-medieval Hindu temple dedicated to Lord Shiva, situated atop Swami Rock. It's known for its beautiful setting and rich history, dating back to the early centuries.",
    img: pic1,
  },
  {
    title: "Nilaveli Beach",
    desc: "Known for its soft white sand and clear waters, Nilaveli is ideal for swimming and sunbathing. It's also a starting point for boat trips to the nearby Pigeon Island National Park.",
    img: pic2,
  },
  {
    title: "Pigeon Island National Park",
    desc: "A marine national park famous for its coral reefs, ideal for snorkeling and diving. The island is inhabited by rock pigeons and showcases a variety of marine life.",
    img: pic3,
  },
  {
    title: "Marble Beach",
    desc: "Also known as Marble Bay Beach, this is one of the most beautiful beaches in the area, known for its calm waters and serene surroundings, perfect for a relaxing day.",
    img: pic4,
  },
  {
    title: "Pathirakali Amman Temple",
    desc: "A colorful Hindu temple dedicated to Goddess Kali. The temple stands out for its intricate architecture and vibrant rituals, reflecting the local Tamil culture.",
    img: pic5,
  },
  {
    title: "Fort Frederick",
    desc: "A fort built by the Portuguese in the 17th century, later occupied by the Dutch and British. It offers a glimpse into Trincomalee's colonial past and provides panoramic views of the bay.",
    img: pic6,
  },

];

const SectionTrinco = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-5 justify-center mt-4">
        {places.map((place, index) => (
          <div key={index} className="max-w-sm w-full mt-12">
            <h1 className="text-2xl text-dark-blue font-bold mb-2">
              {place.title}
            </h1>
            <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
              <Image
                src={place.img}
                fill={true}// Use 'fill' layout to cover the container
                style={{objectFit: "cover"}} // Cover the container while preserving aspect ratio
                alt={place.title}
                className="transition duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <p className="mb-4 text-sm mt-4">{place.desc}</p>
            <Link href="plan/booking/trinco">
          <button className="custome-btn">
              <span>Find Hotel Nearby</span>
            </button>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTrinco;
