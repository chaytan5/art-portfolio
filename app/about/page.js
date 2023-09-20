import Divider from "@/components/Divider";
import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-gold-90 ">
        <div className="mx-auto w-11/12 max-w-screen-1.5xl">
          <div className="pb-48 pt-10">
            <h1 className="bg-gradient-to-b from-gold-90 to-yellow bg-clip-text text-center font-marcellus text-3xl font-bold uppercase tracking-widest text-transparent lg:text-4xl">
              About
            </h1>

            <div className="flex flex-col-reverse gap-8 pt-20 md:flex-row">
              <div className="w-full space-y-8 text-base md:w-1/2 md:text-xl">
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
                <div className="pt-16 text-neutral-300">
                  <h4 className="text-2xl">Other socials - </h4>

                  <div className="space-y-10 pt-16">
                    <div>
                      <p>Instagram:</p>
                      <Link
                        className="flex items-center gap-1 underline"
                        target="_blank"
                        rel="noreferrer noopener"
                        href={"https://www.instagram.com/thenehaink/"}
                      >
                        <span>Neha Rastogi (@thenehaink)</span>
                        <GoDotFill /> <span>Instagram photos and videos</span>
                      </Link>
                    </div>
                    <div>
                      <p>Artstation:</p>
                      <Link
                        className="underline"
                        target="_blank"
                        rel="noreferrer noopener"
                        href={"https://www.artstation.com/neha_rastogi"}
                      >
                        <span>Artstation - Neha Rastogi</span>
                      </Link>
                    </div>
                    <div className="pt-10">
                      <p>Email:</p>
                      <Link
                        className=" underline"
                        href="mailto:art@neharastogi.com"
                      >
                        <span>art@neharastogi.com</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-20 aspect-square h-[250px] w-full  bg-neutral-700 md:h-[400px] md:w-1/2">
                <Image
                  alt="Neha Rastogi"
                  className="mx-auto max-w-full bg-cover object-cover"
                  // width={700}
                  // height={550}
                  fill
                  quality={95}
                  src={
                    "https://res.cloudinary.com/dywu7jrjp/image/upload/v1673533517/neha%20portfolio/about.jpg"
                  }
                />
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
