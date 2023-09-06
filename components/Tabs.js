const Tabs = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="absolute top-0 z-10 mx-auto hidden w-fit flex-wrap gap-6 rounded-md border-2 border-gold-90 bg-black/80 px-6 py-3 text-gold-90 shadow-sm shadow-gold-90 backdrop-blur-sm md:sticky md:top-8 md:flex">
      <div
        onClick={() => setCurrentTab("environment")}
        className={`${
          currentTab == "environment" && "border-gold-90 bg-black"
        } cursor-pointer rounded-sm border-2 border-gold-40 px-4 py-2 transition hover:bg-black/60`}
      >
        Environments & Worldbuilding
      </div>
      <div
        onClick={() => setCurrentTab("traditional")}
        className={`${
          currentTab == "traditional" && "border-gold-90 bg-black"
        } cursor-pointer rounded-sm border-2 border-gold-40 px-4 py-2 transition hover:bg-black/60`}
      >
        Traditional Art
      </div>
      <div
        onClick={() => setCurrentTab("sketch")}
        className={`${
          currentTab == "sketch" && "border-gold-90 bg-black"
        } cursor-pointer rounded-sm border-2 border-gold-40 px-4 py-2 transition hover:bg-black/60`}
      >
        Sketches
      </div>
      <div
        onClick={() => setCurrentTab("illustration")}
        className={`${
          currentTab == "illustration" && "border-gold-90 bg-black"
        } cursor-pointer rounded-sm border-2 border-gold-40 px-4 py-2 transition hover:bg-black/60`}
      >
        Digital Illustrations
      </div>

      <div
        onClick={() => setCurrentTab("projects")}
        className={`${
          currentTab == "projects" && "border-gold-90 bg-black"
        } cursor-pointer rounded-sm border-2 border-gold-40 px-4 py-2 transition hover:bg-black/60`}
      >
        Worldbuilding Projects
      </div>
    </div>
  );
};

export default Tabs;
