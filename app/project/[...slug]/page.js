import projectsData from "@/constants/projectsData";
import Image from "next/image";

const ProjectPage = ({ params }) => {
  const slug = params.slug;
  const currentProjectData = projectsData.filter(
    (project) => project.slug.toString() === slug.toString(),
  );
  const { name, images } = currentProjectData[0];
  return (
    <div className="flex items-start justify-between gap-5">
      <div className="max-w-[75%]">
        <div className="space-y-5">
          {images.map((image) => (
            <Image
              className="max-w-full "
              // onLoadingComplete={(image) => image.classList.remove("opacity-0")}
              key={image.id}
              src={image.src}
              width={image.width}
              height={image.height}
              alt=""
              quality={95}
            />
          ))}
        </div>
      </div>
      <div className="w-[25%] space-y-3">
        <h2>{name}</h2>
        <p>
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
