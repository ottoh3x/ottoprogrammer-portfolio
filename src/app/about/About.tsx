/* eslint-disable react/no-unescaped-entities */
"use client"
import React from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

import Link from "next/link";

function About() {
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
      <div className="flex flex-col justify-center relative  mx-auto container h-full p-6  my-6 space-y-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center p-4 mt-10">
          {" "}
          <h1 className="text-5xl font-black text-white">About</h1>
        </div>
        <div className="flex relative flex-col  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-start">
        <Transition.Child
        enter="transition ease-in-out duration-700 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-700 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <img
            className=" flex-shrink-0  rounded-full object-cover mb-5 md:mb-0 md:rounded-xl md:w-64 md:h-95 xl:w-[350px] xl:h-auto  "
            src="/about.png"
          />
      </Transition.Child>
          
          <div className="p-2 md:w-2/4">
            <div className="p-2">
              <strong>WHO I AM</strong>
              <p
                className="text-gray-400   font-extralight leading-relaxed
  self-center"
              >
                I'm Otto, a Freelance Full Stack Developer deeply passionate and
                dedicated to crafting exceptional digital experiences. With 3
                years of professional expertise in Full Stack Development, I
                specialize in building premium websites that stand out.
              </p>
            </div>
            <div className="p-2">
              <strong>My Skills</strong>
              <p
                className="text-gray-400   font-extralight leading-relaxed
  self-center"
              >
                Proficient in HTML, CSS, JavaScript, and its frameworks such as
                Next.js, React, and Astro, I bring a comprehensive skill set to
                the table. My proficiency extends to programming languages like
                TypeScript, C++, and Python, allowing me to create dynamic and
                robust solutions.
              </p>
            </div>

            <div className="p-2">
              <p
                className="text-gray-400   font-extralight leading-relaxed
  self-center"
              >
                My commitment to continuous growth drives me to explore emerging
                technologies, including blockchain and Web3, ensuring I stay at
                the forefront of innovation. I'm enthusiastic about leveraging
                these advancements to deliver cutting-edge solutions for my
                clients.
              </p>
            </div>
            <div className="text-center mx-auto p-2">
              <Link
                href={`/contact`}
                className="inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default About;
