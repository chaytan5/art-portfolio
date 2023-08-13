import Image from "next/image";
import heroBg from "@/assets/images/hero-bg.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="font-body">
        {/* <div
        className="absolute left-0 top-0 -z-10 min-h-[900px] bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${heroBg.src})`,
          width: "100%",
          height: "100%",
        }}
      ></div> */}

        <div
          className="relative -z-10 min-h-screen w-full bg-black bg-cover bg-center py-40 text-center opacity-30"
          style={{
            backgroundImage: `url(${heroBg.src})`,
            width: "100%",
            height: "100%",
          }}
        ></div>
        <div className=""></div>

        <nav className="absolute inset-0 z-10 h-fit">
          <div className="mx-auto flex w-11/12 max-w-7xl items-center justify-between py-8 text-lg">
            <div>Neha Rastogi</div>
            <div>
              <ul className="flex items-center gap-10">
                <Link href={"/"}>
                  <li className="cursor-pointer">Home</li>
                </Link>
                <Link href={"/work"}>
                  <li className="cursor-pointer">Work</li>
                </Link>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="absolute left-0 top-0 z-0 mx-auto w-full pt-64">
          <div className="mx-auto w-fit text-center">
            <h1 className="font-display mx-auto w-fit bg-gradient-to-r  from-blue-400 to-pink-400 bg-clip-text py-4 text-7xl font-extrabold text-transparent outline drop-shadow-2xl">
              Neha Rastogi
            </h1>
            <h2 className="text-5xl font-bold text-gray-200">
              Unleashing the magic of Creativity
            </h2>
            {/* <button className="pt-10">
              <Link
                href="/work"
                class="group relative inline-block items-center justify-center overflow-hidden rounded-lg p-4 px-5 py-3 text-xl font-medium text-indigo-600 shadow-2xl"
              >
                <span class="ease absolute left-0 top-0 -ml-3 -mt-10 h-40 w-40 rounded-full bg-red-500 blur-md transition-all duration-700"></span>
                <span class="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
                  <span class="absolute bottom-0 left-0 -ml-10 h-24 w-24 rounded-full bg-purple-500 blur-md"></span>
                  <span class="absolute bottom-0 right-0 -mr-10 h-24 w-24 rounded-full bg-pink-500 blur-md"></span>
                </span>
                <span class="relative text-white">Explore my Work</span>
              </Link>
            </button> */}
            <button
              type="button"
              className="mt-12 rounded-full bg-gradient-to-br from-blue-700 to-teal-600 px-6 py-4 text-center text-xl font-normal text-white transition-all hover:outline hover:outline-offset-2 hover:outline-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500"
            >
              Explore my Work
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="py-40">New section</div>
      </main>
    </>
  );
}
