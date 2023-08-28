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
        <div className="w-full pt-48">
          <div className="relative mx-auto min-h-[600px] w-4/5 max-w-6xl border border-gold-90 bg-gold-40  bg-hero bg-cover bg-center bg-no-repeat before:absolute before:-inset-x-5 before:-inset-y-2.5 before:border before:border-gold-90 after:absolute after:-inset-x-2.5 after:-inset-y-5 after:border after:border-gold-90 ">
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
            <div className="absolute h-full w-full bg-gradient-to-b from-transparent to-black/70 to-60%">
              <div className="flex h-full flex-col items-center justify-end gap-y-6 px-4 pb-20 text-center">
                <h1 className="bg-gradient-to-b from-gold-90 to-yellow bg-clip-text text-3xl font-bold uppercase tracking-widest text-transparent">
                  Concept design / illustration
                </h1>
                <h2 className="max-w-xl text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque nihil mollitia qui explicabo veniam inventore hic odio,
                  officiis possimus autem accusamus libero, quas labore
                  veritatis delectus laboriosam architecto molestiae?
                  Voluptatibus.
                </h2>
              </div>
            </div>
            <div className="absolute -bottom-12 z-10 w-full text-center">
              <Link href={"/work"}>
                <PrimaryButton>View Portfolio</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="relative min-h-[1080px] w-full bg-headerBg bg-cover bg-center bg-no-repeat text-gold-90 ">
        <div className="absolute top-0 min-h-full w-full bg-gradient-to-b from-black/90 from-40% to-transparent"></div>

        {/** Main end gradient */}
        <div className="absolute bottom-0 min-h-[400px] w-full bg-gradient-to-b from-transparent  to-black/90"></div>
        <div className="relative top-0 z-10 mx-auto w-11/12 max-w-screen-xl">
          <div className="absolute -top-16 left-1/2  w-full -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="bg-gradient-to-b from-gold-90 to-yellow bg-clip-text text-[42px] uppercase tracking-widest text-transparent">
              My Art Collections
            </h2>
          </div>

          <Divider />

          {/* carousel */}
          <Carousel />
          <section className="py-52">
            <div className="relative mx-auto min-h-[200px] max-w-[600px] border border-gold-40 bg-black before:absolute before:-inset-x-5 before:-inset-y-2.5 before:-z-10 before:border before:border-gold-40 after:absolute after:-inset-x-2.5 after:-inset-y-5 after:-z-10 after:border after:border-gold-40">
              <div className="space-y-3 p-12">
                <h3 className="bg-gradient-to-b from-gold-90 to-yellow bg-clip-text text-center text-4xl uppercase tracking-widest text-transparent">
                  Let&apos;s Talk
                </h3>
                <p className="text-center text-lg text-gold-90">
                  Use the form below to drop me an email, or you can contact me
                  directly at{" "}
                  <a href="mailto:example@example.com" className="underline">
                    neha@artdesigner.com
                  </a>
                </p>
                <form className="space-y-4 py-6">
                  <input
                    // onSubmit={contactFormHandler}
                    type="text"
                    className="w-full border border-gold-40 bg-transparent px-6 py-3 capitalize transition placeholder:text-gold-40 focus:border-gold-90 focus:outline-none  focus:ring-0 focus-visible:border-gold-90 focus-visible:outline-none focus-visible:ring-0"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    className="w-full border border-gold-40 bg-transparent px-6 py-3 transition placeholder:text-gold-40 focus:border-gold-90 focus:outline-none  focus:ring-0 focus-visible:border-gold-90 focus-visible:outline-none focus-visible:ring-0"
                    placeholder="Email"
                    required
                  />
                  <textarea
                    type="text"
                    className="max-h-[200px] min-h-[200px]  w-full border border-gold-40 bg-transparent px-6 py-3 transition placeholder:text-gold-40 focus:border-gold-90 focus:outline-none focus:ring-0 focus-visible:border-gold-90 focus-visible:outline-none focus-visible:ring-0"
                    placeholder="Message"
                    required
                  />
                  <div className="w-full pt-10 text-center">
                    <button
                      type="submit"
                      className=" relative whitespace-nowrap border border-gold-40 bg-gradient-to-b from-gold-90 to-yellow px-8 py-4 text-lg font-semibold uppercase tracking-widest text-black/80 transition before:absolute before:-inset-x-5 before:-inset-y-2.5 before:border before:border-gold-40 after:absolute after:-inset-x-2.5 after:-inset-y-5 after:border after:border-gold-40 "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="relative h-[500px] w-full bg-black">
        <Divider />
      </footer>
    </>
  );
}
