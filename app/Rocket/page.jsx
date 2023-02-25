import { images } from "@/public/constants";
import Image from "next/image";
import React from "react";

function Rockets() {
  return (
    <>
      <section id="rockets" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Our Rockets
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black  py-6 px-2 rounded-3xl shadow-xl">
            <Image
              src={images.rocketMan}
              alt="Explorer"
              className="w-1/2 mb-6 "
            />
            <h3 className="dark:text-white text-3xl text-center text-slate-900">
              Explorer
            </h3>
            <p className="dark:text-slate-400 text-3xl text-center text-slate-500 hidden sm:block mt-2 ">
              $
            </p>
            <p className="dark:text-slate-400 text-2xl text-center mt-2 text-slate-500 sm:hidden">
              Affordable Exploration
            </p>
          </li>

          {/* ======= */}

          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black  py-6 px-2 rounded-3xl shadow-xl">
            <Image
              src={images.rocketRide }
              alt="Adventurer "
              className="w-1/2 mb-6 "
            />
            <h3 className="dark:text-white text-3xl text-center text-slate-900">
              Adventurer 
            </h3>
            <p className="dark:text-slate-400 text-3xl text-center text-slate-500 hidden sm:block mt-2 ">
              $$
            </p>
            <p className="dark:text-slate-400 text-2xl text-center mt-2 text-slate-500 sm:hidden">
              Best Selling Rocket!
            </p>
          </li>

          {/* ======== */}

          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black  py-6 px-2 rounded-3xl shadow-xl">
            <Image
              src={images.rocketlaunch}
              alt="Infinity"
              className="w-1/2 mb-6 "
            />
            <h3 className="dark:text-white text-3xl text-center text-slate-900">
              Infinity
            </h3>
            <p className="dark:text-slate-400 text-3xl text-center text-slate-500 hidden sm:block mt-2 ">
              $$$
            </p>
            <p className="dark:text-slate-400 text-2xl text-center mt-2 text-slate-500 sm:hidden">
             Luxury Starship
            </p>
          </li>
        </ul>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
    </>
  );
}

export default Rockets;
