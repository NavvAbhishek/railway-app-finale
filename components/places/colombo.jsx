import React from "react";
import Image from "next/image";
import pic1 from "@/public/colombo/pic1.png";
import pic2 from "@/public/colombo/pic2.png";
import pic3 from "@/public/colombo/pic3.png";
import pic4 from "@/public/colombo/pic4.png";
import pic5 from "@/public/colombo/pic5.png";
import pic6 from "@/public/colombo/pic6.png";
import Link from "next/link"; 

const places = [
  {
    title: "Gangaramaya Temple",
    desc: "An eclectic mix of Sri Lankan, Thai, Indian, and Chinese architecture, this Buddhist temple complex includes a museum, a library, a residential hall, and a series of beautifully decorated halls.",
    img: pic1,
  },
  {
    title: "Galle Face Green",
    desc: "A large urban park along the Indian Ocean coast, perfect for evening strolls, flying kites, and sampling local street food. It's a popular gathering place for locals and tourists alike.",
    img: pic2,
  },
  {
    title: "National Museum of Colombo",
    desc: "The largest museum in Sri Lanka, it houses a rich collection of artifacts that showcase the country’s history and cultural heritage, including ancient relics, colonial memorabilia, and traditional art.",
    img: pic3,
  },
  {
    title: "Colombo Lotus Tower",
    desc: "The tallest self-supported structure in South Asia, this tower offers panoramic views of the city. It serves as a transmission tower, hotel, and entertainment venue.",
    img: pic4,
  },
  {
    title: "Pettah Market",
    desc: "A bustling and colorful open-air market, known for its variety of goods, from fresh produce and textiles to electronics and jewelry. It's a vibrant representation of Colombo's diversity.",
    img: pic5,
  },
  {
    title: "Independence Square",
    desc: "This historical landmark commemorates Sri Lanka's independence from British rule. The square features an Independence Memorial Hall, a serene and elegant space surrounded by greenery.",
    img: pic6,
  },
];

const SectionColombo = () => {
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
                layout="fill" // Use 'fill' layout to cover the container
                objectFit="cover" // Cover the container while preserving aspect ratio
                alt={place.title}
                className="transition duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <p className="mb-4 text-sm mt-4">{place.desc}</p>
            <Link href="plan/booking/colombo">
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

export default SectionColombo;
