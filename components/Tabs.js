"use client";
import { useTabsContext } from "@/contexts/tab-context";

const Tabs = () => {
  const { currentTab, setCurrentTab } = useTabsContext();
  return (
    <div className="static top-0 z-10 mx-auto flex w-full flex-nowrap gap-2 overflow-x-scroll rounded-md border-2 border-gold-90 bg-black/80 p-3 text-sm text-gold-90 shadow-sm shadow-gold-90 backdrop-blur-sm md:sticky md:top-8 md:w-fit md:flex-wrap md:justify-normal md:gap-6 md:overflow-auto md:px-6 md:text-base">
      <div
        onClick={() => setCurrentTab("environment")}
        className={`${
          currentTab == "environment" && "border-gold-90 bg-black"
        } cursor-pointer whitespace-nowrap rounded-sm border-2 border-gold-40 p-2 transition hover:bg-black/60 md:px-4 md:py-2`}
      >
        Environments & Worldbuilding
      </div>
      <div
        onClick={() => setCurrentTab("traditional")}
        className={`${
          currentTab == "traditional" && "border-gold-90 bg-black"
        } cursor-pointer whitespace-nowrap rounded-sm border-2  border-gold-40 p-2 transition hover:bg-black/60 md:px-4 md:py-2`}
      >
        Traditional Art
      </div>
      <div
        onClick={() => setCurrentTab("sketch")}
        className={`${
          currentTab == "sketch" && "border-gold-90 bg-black"
        } cursor-pointer whitespace-nowrap rounded-sm border-2 border-gold-40 p-2 transition hover:bg-black/60 md:px-4 md:py-2`}
      >
        Sketches
      </div>
      <div
        onClick={() => setCurrentTab("illustration")}
        className={`${
          currentTab == "illustration" && "border-gold-90 bg-black"
        } cursor-pointer whitespace-nowrap rounded-sm border-2 border-gold-40 p-2 transition hover:bg-black/60 md:px-4 md:py-2`}
      >
        Digital Illustrations
      </div>

      <div
        onClick={() => setCurrentTab("projects")}
        className={`${
          currentTab == "projects" && "border-gold-90 bg-black"
        } cursor-pointer whitespace-nowrap rounded-sm border-2 border-gold-40 p-2 transition hover:bg-black/60 md:px-4 md:py-2`}
      >
        Worldbuilding Projects
      </div>
    </div>
  );
};

export default Tabs;
