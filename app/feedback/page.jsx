"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Image from "next/image";
import avatar1 from "@/public/avatars/avatar1.png";
import avatar2 from "@/public/avatars/avatar2.png";
import avatar3 from "@/public/avatars/avatar3.png";
import avatar4 from "@/public/avatars/avatar4.png";
import avatar5 from "@/public/avatars/avatar5.png";
import avatar6 from "@/public/avatars/avatar6.png";
import avatar7 from "@/public/avatars/avatar7.png";
import avatar8 from "@/public/avatars/avatar8.png";

const userDetails = [
  {
    desc: "Booking my train tickets has never been easier, great user experience!",
    name: "Jamie Lannister",
    position: "Vlogger",
    img: avatar6,
    aos: "fade-left",
  },
  {
    desc: "The interface is clean and simple to use, even for complex booking schedules.",
    name: "Alexis Johnson",
    position: "Traveller",
    img: avatar1,
    aos: "fade-right",
  },
  {
    desc: "Real-time updates and notifications are super helpful for my travel planning.",
    name: "Rajesh Kumar",
    position: "Youtube Vlogger",
    img: avatar2,
    aos: "fade-left",
  },
  {
    desc: "The booking process was straightforward, and the customer service was excellent. Highly recommended!",
    name: "Morgan Avery",
    position: "Travel Blogger",
    img: avatar7,
    aos: "fade-right",
  }
];

const FeedBack = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    console.log("clicked");
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="pattern-bg min-h-screen overflow-hidden">
      <Navbar />
      <h1 className="text-dark-blue text-3xl md:text-4xl font-bold py-6 text-center">
        Feedbacks
      </h1>
      {/* //! --------------- Feedbacks -------------- */}
      <div className="w-[90%] md:w-[70%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userDetails.map((detail, index) => (
            <div
              data-aos={detail.aos}
              key={index}
              className="card flex flex-col p-6 shadow-lg rounded-lg bg-white"
            >
              <blockquote className="text-xl font-semibold italic text-gray-900">
                {detail.desc}
              </blockquote>
              <div className="flex items-center mt-4">
                <Image
                  className="w-12 h-12 rounded-full object-cover"
                  src={detail.img}
                  alt={detail.name}
                />
                <div className="ml-4">
                  <p className="text-md font-bold text-gray-800">
                    {detail.name}
                  </p>
                  <p className="text-md text-gray-600">{detail.position}</p>
                </div>
              </div>
              <div className="flex mt-4 text-dark-yellow">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* //! --------------- Discusiion -------------- */}
      <h1 className="text-dark-blue text-3xl md:text-4xl font-bold pt-10 text-center">
        Discussion
      </h1>
      <section className="py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <form className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button className="custome-btn">
              <span> Post comment</span>
            </button>
          </form>
          {/* //! -------------------------- BOX -------------------------- */}
          <article
            data-aos="fade-right"
            className="p-6 text-base bg-white shadow-lg rounded-lg dark:bg-gray-900"
          >
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-lg text-gray-900 dark:text-white font-semibold">
                  <Image
                    className="mr-2 w-8 h-8 rounded-full"
                    src={avatar3}
                    alt="Michael Gough"
                  />
                  Michael Gough{" "}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time
                    pubdate="true"
                    dateTime="2022-02-08"
                    title="February 8th, 2022"
                  >
                    Feb. 8, 2022
                  </time>
                </p>
              </div>
              <button
                onClick={toggleDropdown}
                id="dropdownComment1Button"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
                <span className="sr-only">Comment settings</span>
              </button>

              {isDropdownOpen && (
                <div
                  id="dropdownComment1"
                  className="hidden z-10 w-36 bg-red-900 rounded divide-y divide-gray-900 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Remove
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </footer>

            <p className="text-dark-blue text-sm">
              The booking process is so smooth and intuitive. I was able to book
              a round trip without any hassle. Great job on the user interface!
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg
                  className="mr-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>
          {/* //! -------------------------- BOX -------------------------- */}
          <article
            data-aos="fade-left"
            className="p-6 mb-3 text-base bg-white mt-6 shadow-lg rounded-lg dark:bg-gray-900"
          >
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-lg text-gray-900 dark:text-white font-semibold">
                  <Image
                    className="mr-2 w-8 h-8 rounded-full"
                    src={avatar4}
                    alt="Jese Leos"
                  />
                  Jese Leos
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time
                    pubdate="true"
                    dateTime="2022-02-12"
                    title="February 12th, 2022"
                  >
                    Feb. 12, 2022
                  </time>
                </p>
              </div>
              <button
                id="dropdownComment2Button"
                data-dropdown-toggle="dropdownComment2"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
                <span className="sr-only">Comment settings</span>
              </button>

              <div
                id="dropdownComment2"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Remove
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
            <p className="text-dark-blue text-sm">
              I appreciate the real-time updates on train schedules. It helps me
              plan my journey much better. Kudos to the development team!
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg
                  className="mr-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>
          {/* //! -------------------------- BOX -------------------------- */}
          <article
            data-aos="fade-left"
            className="p-6 mb-3 text-base bg-white rounded-lg shadow-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900"
          >
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-lg text-gray-900 dark:text-white font-semibold">
                  <Image
                    className="mr-2 w-8 h-8 rounded-full"
                    src={avatar5}
                    alt="Bonnie Green"
                  />
                  Bonnie Green
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time
                    pubdate="true"
                    dateTime="2022-03-12"
                    title="March 12th, 2022"
                  >
                    Mar. 12, 2022
                  </time>
                </p>
              </div>
              <button
                id="dropdownComment3Button"
                data-dropdown-toggle="dropdownComment3"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
                <span className="sr-only">Comment settings</span>
              </button>

              <div
                id="dropdownComment3"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Remove
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
            <p className="text-dark-blue text-sm">
              Had an issue with my booking and the customer service resolved it
              promptly. Thanks for the quick and courteous service!
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg
                  className="mr-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>

          <article
            data-aos="fade-right"
            className="shadow-lg p-6 text-base bg-white border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-900"
          >
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-lg text-gray-900 dark:text-white font-semibold">
                  <Image
                    className="mr-2 w-8 h-8 rounded-full"
                    src={avatar8}
                    alt="Helene Engels"
                  />
                  Helene Engels
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time
                    pubdate="true"
                    dateTime="2022-06-23"
                    title="June 23rd, 2022"
                  >
                    Jun. 23, 2022
                  </time>
                </p>
              </div>
              <button
                id="dropdownComment4Button"
                data-dropdown-toggle="dropdownComment4"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>

              <div
                id="dropdownComment4"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Remove
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
            <p className="text-dark-blue text-sm">
              The discount offers section is a fantastic feature! Made use of a
              great deal for my last-minute travel plans. Highly recommended!
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg
                  className="mr-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default FeedBack;
