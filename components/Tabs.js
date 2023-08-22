const Tabs = () => {
  return (
    <div className="absolute top-0 z-10 mx-auto hidden w-fit flex-wrap gap-6 rounded-lg border-2 border-gold-90 bg-black/60 px-6 py-4 text-gold-90 shadow-md shadow-gold-90 backdrop-blur-xl  md:sticky md:top-8 md:flex">
      <div className="cursor-pointer rounded-md border border-gold-90 px-4 py-2">
        All
      </div>
      <div className="cursor-pointer rounded-md border border-gold-90 px-4 py-2">
        Environment & Worldbuilding
      </div>
      <div className="cursor-pointer rounded-md border border-gold-90 px-4 py-2">
        Sketches & Roughs
      </div>
      <div className="cursor-pointer rounded-md border border-gold-90 px-4 py-2">
        Stylized Illustrations
      </div>
      <div className="cursor-pointer rounded-md border border-gold-90 px-4 py-2">
        Traditional
      </div>
      <div className="cursor-pointer rounded-md border border-gold-90 px-4 py-2">
        Projects
      </div>
    </div>
  );
};

export default Tabs;
