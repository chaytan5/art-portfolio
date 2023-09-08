import ProjectsGallery from "@/components/ProjectsGallery";

const page = () => {
  return (
    <div>
      <div className="space-y-2 pb-10 text-center">
        <h1 className="text-4xl font-bold text-black">My Projects</h1>
        <h3 className="text-xl text-black">
          Click on a project to view the Artwork
        </h3>
      </div>
      <ProjectsGallery />
    </div>
  );
};

export default page;
