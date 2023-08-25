const Tabs = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="absolute top-0 z-10 mx-auto hidden w-fit flex-wrap gap-6 rounded-lg border-2 border-gold-90 bg-black/70 px-8 py-4 text-gold-90 shadow-sm shadow-gold-90 backdrop-blur-lg md:sticky md:top-8 md:flex">
      <div
        onClick={() => setCurrentTab("environment")}
        className={`${
          currentTab == "environment" && "bg-black/60"
        } cursor-pointer rounded-md border border-gold-90 px-4 py-2 transition hover:bg-black/60`}
      >
        Environment & Worldbuilding
      </div>
      <div
        onClick={() => setCurrentTab("sketch")}
        className={`${
          currentTab == "sketch" && "bg-black/60"
        } cursor-pointer rounded-md border border-gold-90 px-4 py-2 transition hover:bg-black/60`}
      >
        Sketches & Roughs
      </div>
      <div
        onClick={() => setCurrentTab("illustration")}
        className={`${
          currentTab == "illustration" && "bg-black/60"
        } cursor-pointer rounded-md border border-gold-90 px-4 py-2 transition hover:bg-black/60`}
      >
        Stylized Illustrations
      </div>
      <div
        onClick={() => setCurrentTab("traditional")}
        className={`${
          currentTab == "traditional" && "bg-black/60"
        } cursor-pointer rounded-md border border-gold-90 px-4 py-2 transition hover:bg-black/60`}
      >
        Traditional
      </div>
      <div
        onClick={() => setCurrentTab("projects")}
        className={`${
          currentTab == "projects" && "bg-black/60"
        } cursor-pointer rounded-md border border-gold-90 px-4 py-2 transition hover:bg-black/60`}
      >
        Projects
      </div>
    </div>
  );
};

export default Tabs;
