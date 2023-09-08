"use client";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/constants/projectsData";

const Project = ({ thumbnail, name, slug }) => {
  return (
    <Link href={`/project/${slug}`}>
      <div className="relative h-72 max-w-full cursor-pointer rounded-md bg-neutral-200 object-cover shadow-md transition ease-in-out hover:shadow-2xl md:max-w-[400px]">
        <Image
          src={thumbnail}
          alt=""
          className="h-full max-w-full rounded-md object-cover opacity-0 transition-opacity duration-700"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <div className="absolute bottom-0 flex w-full items-center gap-2 rounded-b-md bg-black/30 p-2  text-sm text-white backdrop-blur">
          <div className="h-6 w-1 bg-red-700"></div>
          <p>{name}</p>
        </div>
      </div>
    </Link>
  );
};

const ProjectsGallery = () => {
  return (
    <div className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
      {projectsData.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectsGallery;
