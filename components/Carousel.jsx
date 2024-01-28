"use client";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import CarousalImage1 from "@/public/railway-station-1.png";
import CarousalImage2 from "@/public/railway-station-2.png";
import CarousalImage3 from "@/public/railway-station-3.png";

export function CarouselHeader() {
  return (
    <Carousel className="h-[588px] w-full sm:mb-5  sm:mx-0 ">
      <div className="relative h-[588px] w-full mx-auto">
        <Image
          src={CarousalImage2}
          alt="image 1"
          fill={true}
          style={{objectFit: "cover"}}
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Galle Railway Station
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Galle Railway Station, located in the heart of the historic city
              of Galle, is known for its picturesque setting and colonial-era
              architecture. As a key station in Sri Lanka&apos;s Southern railway
              line, it connects Galle with Colombo and other southern towns.
            </Typography>
            <div className="flex gap-2">
              <button className="custome-btn rounded-3xl">
               <span> Explore</span>
              </button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[588px] w-full mx-auto">
        <Image
          src={CarousalImage3}
          alt="image 1"
          fill={true}
          style={{objectFit: "cover"}}
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Kandy railway station
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Kandy Railway Station is a significant and busy station in the
              central highlands of Sri Lanka, situated in the city of Kandy.
              This station plays a crucial role in connecting the hill capital
              with Colombo and other major cities.
            </Typography>
            <div className="flex gap-2">
            <button className="custome-btn rounded-3xl">
               <span> Explore</span>
              </button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[588px] w-full mx-auto">
        <Image
          src={CarousalImage1}
          alt="image 1"
          fill={true}
          style={{objectFit: "cover"}}
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Fort Railway Station
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Fort Railway Station is a major rail hub in Colombo, renowned for
              its historical significance and architectural charm. Serving as
              the primary railway station in Sri Lanka&apos;s capital, it is a
              bustling center of activity, connecting various parts of the
              country.
            </Typography>
            <div className="flex gap-2">
            <button className="custome-btn rounded-3xl">
               <span> Explore</span>
              </button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
