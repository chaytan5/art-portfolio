const Tabs = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="absolute top-0 z-10 mx-auto hidden w-fit flex-wrap gap-6 rounded-md border-2 border-gold-90 bg-black/80 px-6 py-3 text-gold-90 shadow-sm shadow-gold-90 backdrop-blur-sm md:sticky md:top-8 md:flex">
      <div
        onClick={() => setCurrentTab("environment")}
        className={`${
          currentTab == "environment" && "border-yellow bg-black"
        } cursor-pointer rounded-sm border border-gold-90 px-4 py-2 transition hover:bg-black/60`}
      >
        Environment & Worldbuilding
      </div>
      <div
        onClick={() => setCurrentTab("sketch")}
        className={`${
          currentTab == "sketch" && "border-yellow bg-black"
        } cursor-pointer rounded-sm border border-gold-90 px-4 py-2 transition hover:bg-black/60`}
      >
        Sketches & Roughs
      </div>
      <div
        onClick={() => setCurrentTab("illustration")}
        className={`${
          currentTab == "illustration" && "border-yellow bg-black"
        } cursor-pointer rounded-sm border border-gold-90 px-4 py-2 transition hover:bg-black/60`}
      >
        Stylized Illustrations
      </div>
      <div
        onClick={() => setCurrentTab("traditional")}
        className={`${
          currentTab == "traditional" && "border-yellow bg-black"
        } cursor-pointer rounded-sm border border-gold-90 px-4 py-2 transition hover:bg-black/60`}
      >
        Traditional
      </div>
      <div
        onClick={() => setCurrentTab("projects")}
        className={`${
          currentTab == "projects" && "border-yellow bg-black"
        } cursor-pointer rounded-sm border border-gold-90 px-4 py-2 transition hover:bg-black/60`}
      >
        Projects
      </div>
    </div>
  );
};

export default Tabs;
