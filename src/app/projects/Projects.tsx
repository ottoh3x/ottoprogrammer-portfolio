"use client"
import React from "react";
import ProjectsItem from "./ProjectsItem";
import { Transition } from "@headlessui/react";

function Projects() {
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


    <div className="max-w-7xl mx-auto p-6  my-6  rounded-lg shadow-lg overflow-hidden mt-20">
      <div className="flex flex-col items-center gap-4 p-4 max-w-xl mx-auto">
        {" "}
        <h1 className="text-4xl font-black text-white">Projects</h1>
        <p className="text-zinc-400">
          I have built a bunch of different projects. I explore different tech
          stacks and areas of interest. Here are some of my favorites.
        </p>
      </div>

      <Transition.Child
        enter="transition ease-in-out duration-1000 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-1000 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >

      <div className=" grid md:grid-cols-3 gap-3 items-center mx-auto py-4">
        <ProjectsItem
          title="Portfolio"
          src="https://i.imgur.com/KZr1eoG.png"
          url="https://ottocomponents.vercel.app"
          desc={`A Portfolio Template.`}
        />
<ProjectsItem
          title="Metaverse App"
          src="https://i.imgur.com/uOi3Ivz.png"
          url="https://www.animex.live"
          desc={`Metaverse Landing Page.`}
        />

<ProjectsItem
          title="OTTOIPTV"
          src="https://i.imgur.com/l4s3Nyx.png"
          url="https://ottoiptv.vercel.app"
          desc={`Iptv Service Landing Page.`}
        />

<ProjectsItem
          title="Cafe Landing Page"
          src="https://i.imgur.com/Grkmh4k.png"
          url="https://master--storied-conkies-97f6c0.netlify.app/"
          desc={`Metaverse Landing Page.`}
        />

        <ProjectsItem
          title="Bank Landing Page"
          src="https://i.imgur.com/SAW9E7y.png"
          url="https://www.animex.live"
          desc={`Bank Landing Page.`}
        />
        <ProjectsItem
          title="Movie App"
          src="https://i.imgur.com/wTxyblS.png"
          url="https://otmovies.vercel.app"
          desc={`Movie app based on TMDB api.`}
        />

        <ProjectsItem
          title="Anime App"
          src="https://i.imgur.com/1Hjvgd8.png"
          url="https://anifaze.herokuapp.com"
          desc={`Anime Streaming web app.`}
        />

        <ProjectsItem
          title="Video Converter"
          src="https://i.imgur.com/pO7RjK8.png"
          url="https://www.animex.live"
          desc={`Anime Streaming web app.`}
        />

        <ProjectsItem
          title="Test Your Knowledge"
          src="https://i.imgur.com/86wXoat.png"
          url="https://www.animex.live"
          desc={`Anime Streaming web app.`}
        />

        

        <ProjectsItem
          title="Rabbit Game"
          src="https://i.imgur.com/0wcaL8u.png"
          url="https://www.animex.live"
          desc={`Anime Streaming web app.`}
        />
      </div>
        </Transition.Child>
    </div>
    </Transition>
  );
}

export default Projects;
