import React from "react";
import Image from "next/image";
import Link from "next/link";
import pic1 from "@/public/kandy/pic1.jpg";
import pic2 from "@/public/kandy/pic2.png";
import pic3 from "@/public/kandy/pic3.png";
import pic4 from "@/public/kandy/pic4.png";
import pic5 from "@/public/kandy/pic5.png";
import pic6 from "@/public/kandy/pic6.png";

const places = [
  {
    title: "Sri Dalada Maligawa",
    desc: "This sacred Buddhist temple houses the relic of the tooth of Buddha. It's a place of worship and a pivotal part of Sri Lankan culture and history.",
    img: pic1,
  },
  {
    title: "Royal Botanical Gardens",
    desc: "Known for its vast collection of orchids, the Royal Botanical Gardens spans 147 acres and features more than 4,000 plant species, including medicinal plants and palm trees.",
    img: pic2,
  },
  {
    title: "Kandy Lake",
    desc: "Also known as Kiri Muhuda or the Sea of Milk, this artificial lake in the heart of Kandy adds to the city's charm. A peaceful place for a walk or boat ride.",
    img: pic3,
  },
  {
    title: "Vihara Buddha Statue",
    desc: "This massive Buddha statue towers above the city and is visible from almost everywhere in Kandy. Visitors can climb up to the statue for a close-up view and enjoy the cityscape.",
    img: pic4,
  },
  {
    title: "National Museum of Kandy",
    desc: "Located next to the Temple of the Tooth, this museum houses relics of Kandy’s history, including artifacts from the Kandyan era and the colonial period.",
    img: pic5,
  },
  {
    title: "Udawattakele Forest Reserve",
    desc: "A historic forest reserve on a hill-ridge in the city. Known for its extensive avifauna and rich biodiversity, it's a great spot for hiking and bird watching.",
    img: pic6,
  },
];

const SectionKandy = () => {
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
                fill={true} // Use 'fill' layout to cover the container
                style={{objectFit: "cover"}} // Cover the container while preserving aspect ratio
                alt={place.title}
                className="transition duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <p className="mb-4 text-sm mt-4">{place.desc}</p>
            <Link href="/plan/booking/kandy">
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

export default SectionKandy;
