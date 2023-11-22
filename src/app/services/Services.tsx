/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef } from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { GoDeviceDesktop } from "react-icons/go";

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.6,
    },
  },
};
function Services() {
  const scrollRef = useRef(null);
  return (
    <div className=" w-fit mx-auto p-6  my-4 0  rounded-lg shadow-lg mt-20">
      <div  className="flex flex-col items-center p-4">
        {" "}
        <h1 className="text-5xl font-black text-white">Services</h1>
      </div>
      <h1 className="text-gray-400 text-center text-3xl font-normal p-2 animate-pulse">
        {" "}
        What can i do for you?{" "}
      </h1>
      <div
        
        ref={scrollRef}
        className="grid md:grid-cols-3 gap-4 lg:w-4/5 items-center mx-auto mt-[2rem] py-12 "
      >
        <div className="bg-neutral-900/60  h-full drop-shadow-2xl cursor-pointer px-3 py-6 rounded-lg hover:bg-gradient-to-r  text-white lg:text-gray-400 hover:bg-neutral-900/95 transition-all ease-in-out	hover:text-white duration-950	hover:-translate-y-1  ">
          <GoDeviceDesktop size={42} className="w-full text-pink-950" />
          <h1 className="text-gray-100 p-2 font-bold text-3xl w-full mx-auto text-center">
            Web Development
          </h1>
          <p className=" p-2 font-custom2 font-extralight leading-relaxed text-center">
            We imagine, design, code and form your idea turning it real,
            everything is possible if you're passionate about it, and we lose
            track of time while doing our jobs.
          </p>
        </div>
        <div className=" bg-neutral-900/60 h-full drop-shadow-2xl cursor-pointer px-3 py-6 rounded-lg hover:bg-gradient-to-r  text-white lg:text-gray-400 hover:bg-neutral-900/70 transition-all ease-in-out	hover:text-white duration-700	hover:-translate-y-1 ">
          <div>
            <FiDatabase size={42} className="w-full text-pink-700" />
            <h1 className="text-gray-100 p-2 font-bold text-3xl w-full mx-auto text-center ">
              Website Hosting
            </h1>
          </div>
          <p className="p-2 font-custom2 font-extralight leading-relaxed text-center hover:text-white">
            Your website needs a space in the world of internet, you don't wanna
            put it on your desk and have to worry about slow internet and hot
            computer, let us worry about that for you.
          </p>
        </div>
        <div className="bg-neutral-900/60  h-full drop-shadow-2xl cursor-pointer px-3 py-6 rounded-lg hover:bg-gradient-to-r  text-white lg:text-gray-400 hover:bg-neutral-900/70 transition-all ease-in-out	hover:text-white duration-700	hover:-translate-y-1 ">
          <div>
            <MdOutlineDesignServices
              size={42}
              className="w-full text-pink-700"
            />
            <h1 className="text-gray-100 p-2 font-bold text-3xl w-full mx-auto text-center">
              Responsive Design
            </h1>
          </div>
          <p className="p-2 font-custom2 font-extralight leading-relaxed text-center">
            Responsive web design aims to make web pages render well on a
            variety of devices and screen sizes from minimum to maximum display
            size to ensure usability and satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
