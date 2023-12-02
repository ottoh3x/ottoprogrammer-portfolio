/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { createElement, useRef } from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { GoDeviceDesktop } from "react-icons/go";
import { Icons } from "@/components/icons/Icons";
import Service from "./Service";
import { Transition } from "@headlessui/react";

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


export const SERVICES = [
  {
    title: "Front-end",
    id: "front_end",
    desc:
      "Responsvie, dynamic and interactive web applications that are easy to use and navigate.",
    tags: ["react", "nextjs", "typescript", "tailwind"],
  },
  {
    title: "Back-end",
    id: "back_end",
    desc:
      "Authentication, authorization, CRUD operations, database management and more.",
    tags: ["nextjs", "supabase", "postgresql", "typescript"],
  },
  {
    title: "Data",
    id: "data_analytics",
    desc:
      "Actionable insights and opportunities, data visualization, preprocessing and more.",
    tags: ["python", "pandas", "streamlit", "numpy"],
  },
]
function Services() {
  const scrollRef = useRef(null);
  return (
    <Transition
    appear={true}
      show={true}
      enter="transform transition duration-700"
      enterFrom="opacity-0 rotate-1 scale-[0.80]"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-300 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >


      <div className=" w-fit mx-auto p-6  my-4 0  rounded-lg shadow-lg mt-20">
        <div className="flex flex-col items-center gap-4 p-4 max-w-xl mx-auto">
          {" "}
          <h1 className="text-4xl font-black text-white">Services</h1>
          <p className="text-zinc-400 text-center">
            Here are some of the services I offer. I'm always open to new ideas
            and projects, so feel free to reach out.
          </p>
        </div>
  
        <div className="grid md:grid-cols-3 gap-4 xl:w-4/5 items-center mx-auto mt-[2rem] py-12">
            {SERVICES.map((service, index) => (
              <Service key={index} serv={service} />
            ))}
          </div>
  
        
        
      </div>
    </Transition>
    );
}

export default Services;
