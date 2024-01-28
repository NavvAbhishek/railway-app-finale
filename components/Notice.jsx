import Image from "next/image";
import React from "react";
import scheduleImage from "@/public/notice1.png";
import canceledImage from "@/public/notice2.png";

const Notice = () => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row justify-between md:mr-8 m-6 sm:m-0 p-6 sm:p-6 bg-dark-yellow shadow-lg rounded-lg">
      {/* Schedule Revision Section */}
      <div className="overflow-hidden lg:w-1/2">
        <div className="">
          <h3 className="text-3xl font-bold text-dark-blue mb-2">
            Railway Time Table Revision
          </h3>
          <div className="text-dark-blue text-sm  mt-4 md:mt-6">
            With effect from 16.01.2024, the train schedule of Coast Railway
            Line has been revised as follows:
            <ul className="list-disc pl-5 mt-4">
              <li className="mt-2">
                Ruhunu Kumari Express Train (Train No. 8059) will start from
                Matara Station
              </li>
              <li className="mt-2">
                Gal Kumari Express Line Train (Train No. 8057) will start from
                Beliatta Station
              </li>
              <li className="mt-2">
                The Uva Express Train (Train No. 8063) will depart from Badulla
                Station.
              </li>
              <li className="mt-2">
                The Rajarata Rajini Express Service (Train No. 8061) will
                commence its journey from Anuradhapura Station.
              </li>
            </ul>
          </div>
        </div>
        <Image src={scheduleImage} className="w-[300px] h-[300px] md:ml-5" alt="Train Schedule Revision" />
      </div>

      {/* Train Cancellation Section */}
      <div className="overflow-hidden lg:w-1/2 lg:mt-0 mt-4">
        <div className="">
          <h3 className="text-3xl font-bold text-red-600 mb-2">
            Trains Cancelelations
          </h3>
          <p className="text-dark-blue text-sm mt-4">
            From 07/01/2024, the following trains have been canceled for a
            6-month period due to the modernization project of the railway lines
            from Maho Junction to Anuradhapura on the Northern Line.
          </p>
          <p className="text-dark-blue text-sm mt-4">
            From 10/01/2024, the following trains have been canceled for a 7
            days period due to the modernization project of the railway lines
            from Galle to Colombo on the Southern Line.
          </p>
        </div>
        <Image src={canceledImage}  className="w-[250px] md:mt-10 md:ml-8" alt="Trains Cancelations" />
      </div>
    </div>
  );
};

export default Notice;
