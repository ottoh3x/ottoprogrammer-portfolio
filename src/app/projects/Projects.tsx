import React from "react";
import ProjectsItem from "./ProjectsItem";

function Projects() {
  return (
    <div className="max-w-7xl mx-auto p-6  my-6  rounded-lg shadow-lg overflow-hidden mt-20">
      <div className="flex flex-col items-center p-4">
        {" "}
        <h1 className="text-5xl font-black text-white">Projects</h1>
      </div>
      <h1 className="text-gray-400 text-center text-3xl font-costum2 p-4 animate-pulse mb-8">
        My latest Work.
      </h1>

      <div className=" grid md:grid-cols-3 gap-3 items-center mx-auto py-4">
        <div>
          <ProjectsItem
            title="Portfolio"
            src="/lucy.png"
            url="https://ottocomponents.vercel.app"
            desc={`A Portfolio Template.`}
          />
        </div>
        <div>
          <ProjectsItem
            title="Movie App"
            src="/otmovies.png"
            url="https://otmovies.vercel.app"
            desc={`Movie app based on TMDB api.`}
          />
        </div>

        <div>
          <ProjectsItem
            title="Anime App"
            src="/anifaze.png"
            url="https://anifaze.herokuapp.com"
            desc={`Anime Streaming web app.`}
          />
        </div>

        <div>
          <ProjectsItem
            title="Video Converter"
            src="/animex.png"
            url="https://www.animex.live"
            desc={`Anime Streaming web app.`}
          />
        </div>
        <div>
          <ProjectsItem
            title="Test Your Knowledge"
            src="/animex.png"
            url="https://www.animex.live"
            desc={`Anime Streaming web app.`}
          />
        </div>
        <div>
          <ProjectsItem
            title="Rabbit"
            src="/animex.png"
            url="https://www.animex.live"
            desc={`Anime Streaming web app.`}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
