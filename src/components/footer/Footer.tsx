import Image from "next/image";
import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";



function Footer() {
  const SocialShare = [
    { Social: <FaFacebookF size={18} />, link: "https://www.facebook.com/" },
    { Social: <FaLinkedinIn size={18} />, link: "https://www.linkedin.com/" },
    { Social: <FaInstagram size={18} />, link: "https://www.instagram.com/" },
    { Social: <FaTwitter size={18} />, link: "https://twitter.com/" },
    { Social: <FaGithub size={18} />, link: "https://github.com/ottoh3x" },
  ];
  return (
    <div
    // variants={footerVariants}
    // initial='hidden'
    // whileInView="show"
    
    
    className="py-3 lg:px-10 lg:py-3 w-full  text-center text-[#c0bbbb] border-t border-zinc-800 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 justify-between items-center">
        <div>
          <Image src="/Ghost.svg" height={40} width={40} objectFit="contain" alt="" />
        </div>
        <p className="text-zinc-400">Copyright © 2023 Otto Programmer. All Rights Reserved.</p>
        <div className="flex gap-2">
          {SocialShare.map((val, i) => (
            <span
              className="rounded-xl border-[2px] cursor-pointer border-zinc-600 p-2 hover:bg-blue-600 transition-all ease-in-out duration-500 hover:-translate-y-1 text-[#ffffff]"
              key={i}
            >
              <a className="" href={`${val.link}`}>
                {val.Social}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
