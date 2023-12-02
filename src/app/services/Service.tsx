import { Icons } from "@/components/icons/Icons";
import React, { createElement } from "react";


const servicesIcons = {
    react: Icons.react,
    nextjs: Icons.nextjs,
    typescript: Icons.typescript,
    tailwind: Icons.tailwind,
    supabase: Icons.supabase,
    postgresql: Icons.postgresql,
    python: Icons.python,
    pandas: Icons.pandas,
    streamlit: Icons.streamlit,
    numpy: Icons.numpy,
  }

export default function Service({ serv }) {
  return (
    <>
      <div className="flex flex-col justify-between bg-neutral-900/60 h-full drop-shadow-2xl cursor-pointer px-3 py-6 rounded-lg hover:bg-gradient-to-r  text-white lg:text-gray-400 hover:bg-neutral-900/70 transition-all ease-in-out	hover:text-white duration-700 border border-zinc-800	hover:-translate-y-1  ">
        <h1 className="text-gray-100 p-2 font-bold text-3xl w-full ">
          {serv.title}
        </h1>
        <p className=" p-2 font-custom2 font-extralight leading-relaxed text-center">
          {serv.desc}
        </p>
      <div className="flex w-full flex-wrap justify-evenly items-end">
          {serv.tags.map((tag, index) => {
            const IconComponent = servicesIcons[tag]

            return (
              <div className="aspect-square h-10 w-10" key={index}>
                <IconComponent />
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
