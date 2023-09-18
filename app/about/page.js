import Divider from "@/components/Divider";
import React from "react";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-gold-90 ">
        <div className="mx-auto w-11/12 max-w-screen-1.5xl">
          <div className="space-y-10 pb-32 pt-20">
            <h1 className="text-center text-3xl font-bold uppercase tracking-widest md:text-4xl">
              Neha Rastogi
            </h1>

            <h2 className="mx-auto max-w-xl text-center text-base md:text-xl">
              I create art for Games, Film & Animation with an emphasis on
              Environments & Worldbuilding. The professional projects I&apos;ve
              worked on have included responsibilities in Game UI, VFX
              Illustration, Keyframes, Card Art, Marketing Art & Concept art.
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-black py-2">
        <div className="mx-auto w-11/12 max-w-screen-1.5xl">
          <Divider />
        </div>
      </div>
    </>
  );
};

export default About;
