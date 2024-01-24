import Image from "next/image";
import React from "react";
import scheduleImage from "@/public/notice1.jpg";
import canceledImage from "@/public/notice2.jpg";

const Notice = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between md:mr-8 m-6 sm:m-0 p-6 sm:p-6 bg-dark-yellow shadow-lg rounded-lg">
      {/* Schedule Revision Section */}
      <div className="overflow-hidden lg:w-1/2">
        <div className="">
          <h3 className="text-2xl font-bold text-dark-blue mb-2">
            Railway Time Table Revision
          </h3>
          <div className="text-dark-blue text-sm">
            With effect from 16.01.2024, the train schedule of Coast Railway
            Line has been revised as follows:
            <ul className="list-disc pl-5">
              <li>
                Ruhunu Kumari Express Train (Train No. 8059) will start from
                Matara Station
              </li>
              <li>
                Gal Kumari Express Line Train (Train No. 8057) will start from
                Beliatta Station
              </li>
            </ul>
          </div>
        </div>
        <Image src={scheduleImage} alt="Train Schedule Revision" />
      </div>

      {/* Train Cancellation Section */}
      <div className="overflow-hidden lg:w-1/2 lg:mt-0 mt-4">
        <div className="p-4">
          <h3 className="text-2xl font-bold text-red-600 mb-2">
            Trains Canceled on Northern Line from 07/01/2024
          </h3>
          <p className="text-dark-blue text-sm">
            From 07/01/2024, the following trains have been canceled for a
            6-month period due to the modernization project of the railway lines
            from Maho Junction to Anuradhapura on the Northern Line.
          </p>
        </div>
        <Image src={canceledImage} alt="Trains Canceled on Northern Line" />
      </div>
    </div>
  );
};

export default Notice;
