import projectsData from "@/constants/projectsData";
import Image from "next/image";

const ProjectPage = ({ params }) => {
  const slug = params.slug;
  const currentProjectData = projectsData.filter(
    (project) => project.slug.toString() === slug.toString(),
  );
  const { name, images } = currentProjectData[0];
  return (
    <div className="flex flex-col-reverse items-start justify-between gap-5 md:flex-row">
      <div className="w-full md:max-w-[75%]">
        <div className="space-y-5">
          {images.map((image) => (
            <Image
              className="max-w-full bg-neutral-200"
              key={image.id}
              src={image.src}
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
        <p className="hidden md:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          asperiores quae mollitia assumenda, saepe iure nostrum sunt doloribus
          eum cum autem aliquam exercitationem blanditiis voluptatem atque
          deleniti? Explicabo facere vero maxime repudiandae, fuga quam
          deleniti. Totam sequi quos harum eum officia iste repellat excepturi,
          qui unde illum ipsa. Dolorum, corrupti?
        </p>
      </div>
    </div>
  );
};

export default ProjectPage;
