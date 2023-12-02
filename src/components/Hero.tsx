"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SiGithub, SiTwitter, SiInstagram, SiFacebook } from "react-icons/si";
import Link from "next/link";
import { Transition } from "@headlessui/react";
// import {motion} from "framer-motion"
// import Lottie from "react-lottie-player";
// import animationData from "../lotties/person-coding.json";

function Hero() {
  // lottie config
  // const defaultOptions = {
  //   loop: true,
  //   play: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

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


    <section className=" css-selector  " id="hero">
      
      <div className=" relative mt-0  h-screen flex items-center   mx-auto justify-between">
        <div className="w-full">
          <h1 className="text-center text-3xl p-4 	 lg:text-6xl font-black  text-gray-400">
            <span className="text-gray-200">I Design</span>,{" "}
            <span className="text-blue-700">Build</span> &{" "}
            <span className="text-gray-200">Improve</span>
          </h1>
          <p className="text-gray-400 text-center text-xl p-2">
            I create beautiful websites your users will love.
          </p>

          <div className="text-center mx-auto p-2">
            <Link href={`/contact`} className="inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="relative z-index-[5] h-[90%] w-fit">
          {/* <Lottie {...defaultOptions} /> */}
          {/* <img src="/hero.png" /> */}
        </div>
      </div>
    </section>
    </Transition>
  );
}

export default Hero;
