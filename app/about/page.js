import Divider from "@/components/Divider";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-gold-90 ">
        <div className="mx-auto w-11/12 max-w-screen-1.5xl">
          <div className="pb-48 pt-10">
            <h1 className="bg-gradient-to-b from-gold-90 to-yellow bg-clip-text text-center font-marcellus text-3xl font-bold uppercase tracking-widest text-transparent lg:text-4xl">
              About
            </h1>

            <div className="flex flex-col gap-8 pt-20 md:flex-row">
              <div className="w-1/2 space-y-8 text-base md:text-xl">
                <h2>
                  Neha Rastogi is a concept artist and illustrator who’s recent
                  focus has been in the core gaming sector where she has delved
                  deeper into worldbuilding and multifaceted art creation.
                </h2>
                <h2>
                  She developed a passion for creative communication as a kid -
                  creating documentaries, fine arts, and later with public
                  speaking, which continues to grow even now. To formalize her
                  skills, Neha pursued a Masters in Animation Degree from IIT
                  Bombay&apos;s Industrial Design Center.
                </h2>
                <h2>
                  Her creative journey in the industry evolved through work
                  experiences in illustration, advertising, and visual design,
                  gradually transitioning into animation and, ultimately,
                  finding her true passion in Concept Art.
                </h2>
                <h2>
                  She now lives in Bangalore, India, where she contributes her
                  talents to projects in the Entertainment Industry.
                </h2>
                <h2>
                  Beyond her professional endeavors, Neha is committed to
                  developing her digital content creation and product marketing
                  skills for personal branding across the digital landscape.
                </h2>
                <h2>
                  She actively shares her experiences and learning journey for
                  aspiring artists, on LinkedIn, with plans to expand her reach
                  further.
                </h2>
                I create art for Games, Film & Animation with an emphasis on
                Environments & Worldbuilding. The professional projects
                I&apos;ve worked on have included responsibilities in Game UI,
                VFX Illustration, Keyframes, Card Art, Marketing Art & Concept
                art.
              </div>
              <div>
                <h4>Other socials:</h4>

                <div>
                  <p>Instagram</p>
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    href={"https://www.artstation.com/neha_rastogi"}
                  ></Link>
                </div>
                <Link href={"/work"}>
                  <li className="cursor-pointer">Work</li>
                </Link>
              </div>
              <div className="grid h-[400px] w-1/2 place-items-center bg-neutral-400">
                Profile image
              </div>
            </div>
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
