import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import hexagon from "@/assets/svgs/hexagon.svg";
import Image from "next/image";
import Nav from "@/components/Nav";
import Divider from "@/components/Divider";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <header className="relative h-fit min-h-[1080px] w-full bg-black bg-headerBg2 bg-cover bg-center bg-no-repeat text-gold-90">
        {/** Top Nav Gradient*/}
        <div className="absolute top-0 z-0 min-h-[450px] w-full bg-gradient-to-b from-black/90 "></div>

        {/** Header end gradient */}
        <div className="absolute top-[450px] z-0 min-h-[630px] w-full bg-gradient-to-b from-transparent from-60% to-black/90"></div>

        <Nav />
        <div className="w-full pt-48 ">
          <div className="relative mx-auto min-h-[600px] w-4/5 max-w-6xl border border-gold-90 bg-gold-40  bg-hero bg-cover bg-center bg-no-repeat before:absolute before:-inset-x-5 before:-inset-y-2.5 before:border before:border-gold-90 after:absolute after:-inset-x-2.5 after:-inset-y-5 after:border after:border-gold-90 ">
            <div className="relative z-10">
              <Image
                src={hexagon}
                alt="hexagon icon"
                className="hexagon-clip absolute left-1/2 top-1/2  mx-auto -translate-x-1/2 -translate-y-1/2 backdrop-blur"
              />
              <p className="absolute left-1/2 top-1/2 mx-auto -translate-x-1/2 -translate-y-1/2 place-items-center bg-gradient-to-b from-gold-90 to-yellow bg-clip-text text-2xl font-semibold uppercase tracking-widest text-transparent">
                art designer
              </p>
            </div>
            <div className="absolute -bottom-12 z-10 w-full text-center">
              <Link href={"/work"}>
                <PrimaryButton>Take a tour</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="relative min-h-[1080px] w-full bg-headerBg bg-cover bg-center bg-no-repeat text-gold-90 ">
        <div className="absolute top-0 min-h-full w-full bg-gradient-to-b from-black/90 from-60% to-transparent"></div>
        <div className="relative top-0 z-10 mx-auto w-11/12 max-w-7xl">
          <div className="absolute -top-16 left-1/2  w-full -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="bg-gradient-to-b from-gold-90 to-yellow bg-clip-text text-5xl uppercase tracking-widest text-transparent">
              My Art Collections
            </h1>
          </div>

          <Divider />

          {/* carousel */}
          <Carousel />
        </div>
      </main>
    </>
  );
}
