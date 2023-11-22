/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";

function ProjectsItem({
  src,
  title,
  url,
  desc,
}: {
  src: string;
  title: string;
  url: string;
  desc: string;
}) {
  return (
    <div className=" p-4 rounded-lg w-full cursor-pointer shadow-2xl  hover:bg-neutral-900/75 border-neutral-900 hover:scale-[1.01] transition-all duration-500">
      <Image src={src} width={500} height={300} alt={title} />
      <h1 className="text-gray-100 p-2 font-bold text-3xl w-full mx-auto text-center">
        {title}
      </h1>
      <p className="text-gray-400 p-2 text-center">{desc}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <a
          href={url}
          target="_blank"
          className=" text-gray-200 p-3 my-2 text-center mx-auto w-full  transition-all ease-in-out duration-200 hover:shadow-2xl bg-neutral-900 hover:bg-neutral-800 hover:text-white"
        >
          Visit Website
        </a>
      </a>
    </div>
  );
}

export default ProjectsItem;
