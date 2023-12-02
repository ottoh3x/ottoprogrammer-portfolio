"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import HeaderItem from "./HeaderItem";
// import { Link } from "react-scroll";
import Image from "next/image";
// import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Component } from "../component/component";

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

function Header() {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  const showNav = () => {
    setShow(!show);
  };
  return (
    <div className="md:w-2/3 bg-[radial-gradient(circle_farthest-side,rgba(0,20,255,.15),rgba(240,240,240,0))] md:rounded-xl mx-auto absolute md:mt-5 p-2 shadow-2xl bg-neutral-700/30 z-50 inset-0 max-h-fit   drop-shadow-2xl ">
      <div
        // variants={navVariants}
        // initial="hidden"
        // whileInView="show"
        className="flex justify-between container  mx-auto  px-4  items-center  text-xl text-gray-200 "
      >
        <Image
          src="/Ghost.svg"
          height={32}
          width={32}
          objectFit="contain"
          alt=""
        />

        <div className="hidden md:flex items-center text-lg gap-4 ">
          <HeaderItem title="Home" href="/" />
          <HeaderItem title="About" href="/about" />
          <HeaderItem title="Services" href="/services" />
          <HeaderItem title="Projects" href="/projects" />
          <HeaderItem title="Contact" href="/contact" />
        </div>
        <Component />
      </div>
    </div>
  );
}

export default Header;
