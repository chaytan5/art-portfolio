import Gallery from "@/components/Gallery";
import Nav from "@/components/Nav";
import Tabs from "@/components/Tabs";

export default function Work() {
  return (
    <div className="absolute top-0 -z-10 w-full bg-neutral-100">
      <Nav />

      {/* <div className="absolute left-0 top-0 -z-10 h-[250px] w-full bg-gradient-to-b from-black/80"></div> */}

      <main className="relative top-32 ">
        {/* <div className="relative mx-auto w-11/12 max-w-7xl"> */}
        <Tabs />
        {/* </div> */}
        <section className="mx-auto px-8">
          <div className="py-20">
            <Gallery />
          </div>
        </section>
      </main>
    </div>
  );
}
