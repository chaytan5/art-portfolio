import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import Divider from "@/components/Divider";
import Carousel from "@/components/Carousel";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header className="relative h-fit  min-h-[850px] w-full bg-black bg-headerBg2 bg-cover bg-center bg-no-repeat text-gold-90 lg:min-h-[1080px]">
        {/** Top Nav Gradient*/}
        <div className="absolute top-0 z-0 min-h-[300px] w-full bg-gradient-to-b from-black/95 "></div>

        {/** Header end gradient */}
        <div className="absolute top-[450px] z-0 min-h-[420px] w-full bg-gradient-to-b from-transparent from-60% to-black/90 lg:min-h-[630px]"></div>

        {/* <Nav /> */}
        <div className="w-full pt-20">
          <div className="relative mx-auto min-h-[500px] w-4/5 max-w-6xl border border-gold-90 bg-gold-40 bg-hero  bg-cover bg-center bg-no-repeat before:absolute before:-inset-x-5 before:-inset-y-2.5 before:border before:border-gold-90 after:absolute after:-inset-x-2.5 after:-inset-y-5 after:border after:border-gold-90 lg:min-h-[600px] ">
            {/* <div className="relative z-10">
              <Image
                src={hexagon}
                alt="hexagon icon"
                className="hexagon-clip absolute left-1/2 top-1/2  mx-auto -translate-x-1/2 -translate-y-1/2 backdrop-blur"
              />
              <p className="absolute left-1/2 top-1/2 mx-auto -translate-x-1/2 -translate-y-1/2 place-items-center bg-gradient-to-b from-gold-90 to-yellow bg-clip-text text-2xl font-semibold uppercase tracking-widest text-transparent">
                art designer
              </p>
            </div> */}
            <div className="absolute h-full w-full bg-gradient-to-b from-transparent to-black/80 to-60%">
              <div className="flex h-full flex-col items-center justify-end gap-y-6 px-4 pb-10 text-center md:pb-20">
                <h1 className="bg-gradient-to-b from-gold-90 to-yellow bg-clip-text font-marcellus text-3xl font-black uppercase tracking-widest text-transparent lg:text-4xl">
                  Concept Designer & Illustrator
                </h1>
                {/* <h1 className="font-trap  text-white">
                  Concept Designer & Illustrator
                </h1> */}
                <h2 className="max-w-xl text-base md:text-lg">
                  I create art for Games, Film & Animation with an emphasis on
                  Environments & Worldbuilding. The professional projects
                  I&apos;ve worked on have included responsibilities in Game UI,
                  VFX Illustration, Keyframes, Card Art, Marketing Art & Concept
                  art.
                </h2>
              </div>
            </div>
            <div className="absolute -bottom-8 z-10 w-full text-center md:-bottom-12">
              <Link href={"/work"}>
                <PrimaryButton>View Portfolio</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="relative w-full bg-black bg-headerBg bg-cover bg-center bg-no-repeat text-gold-90 ">
        <div className="absolute top-0 min-h-full w-full bg-gradient-to-b from-black/90 from-40% to-transparent"></div>

        {/** Main end gradient */}
        <div className="absolute bottom-0 min-h-[400px] w-full bg-gradient-to-b from-transparent  to-black/90"></div>
        <div className="relative top-0 z-10 mx-auto w-11/12 max-w-screen-1.5xl">
          <div className="absolute -top-16 left-1/2  w-full -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="bg-gradient-to-b from-gold-90 to-yellow bg-clip-text text-3xl font-bold uppercase tracking-widest text-transparent lg:text-4xl">
              Take a tour
            </h2>
          </div>

          <Divider />

          {/* carousel */}
          <Carousel />
          <section className="py-52">
            <div className="mx-auto w-fit">
              <ContactForm />
            </div>
          </section>
        </div>
      </main>
      <div className="bg-black py-2">
        <div className="mx-auto w-11/12 max-w-screen-1.5xl">
          <Divider />
        </div>
      </div>
    </>
  );
}
