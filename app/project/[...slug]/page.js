import projectsData from "@/constants/projectsData";
import Image from "next/image";
import Link from "next/link";

const ProjectPage = ({ params }) => {
  const slug = params.slug;
  const currentProjectData = projectsData.filter(
    (project) => project.slug.toString() === slug.toString(),
  );
  const { name, images, description } = currentProjectData[0];
  return (
    <>
      <Link
        className="flex w-fit cursor-pointer items-center gap-4 rounded-sm p-2 text-black"
        href={"/work"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>

        <button className="text-lg underline ">Back to Projects</button>
      </Link>
      <div className="flex flex-col-reverse items-start justify-between  pb-32 pt-8 md:flex-row md:gap-5">
        <div className="w-full md:w-[75%]">
          <div className="space-y-5 pt-5 md:pt-0">
            {images.map((image) => (
              <Image
                className="max-w-full  bg-neutral-300"
                key={image.id}
                src={image.src}
                sizes="100vw"
                width={image.width}
                height={image.height}
                alt={image.name}
                quality={95}
              />
            ))}
          </div>
        </div>
        <div className="w-full space-y-3 md:w-[25%]">
          <h2 className="text-2xl font-bold ">{name}</h2>
          <p className="whitespace-pre-line text-neutral-900">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
