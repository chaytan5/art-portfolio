import Divider from "@/components/Divider";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import aboutImg from "@/assets/images/about.webp";
import { FaArtstation, FaInstagram } from "react-icons/fa6";
import atmatva from "@/assets/images/clients/atmatva.png";
import digitalDomain from "@/assets/images/clients/digital-domain.png";
import myth from "@/assets/images/clients/mythnew.png";
import ogilvyMather from "@/assets/images/clients/ogilvy-mather.png";
import volta from "@/assets/images/clients/volta.png";
import zynga from "@/assets/images/clients/zynga.png";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-gold-90 ">
        <div className="mx-auto w-11/12 max-w-screen-1.5xl">
          <div className="pb-48 pt-10">
            <h1 className="bg-gradient-to-b from-gold-90 to-yellow bg-clip-text text-center font-marcellus text-3xl font-bold uppercase tracking-widest text-transparent lg:text-4xl">
              About
            </h1>

            <div className="flex flex-col gap-8 pt-10 md:flex-row md:pt-20">
              <div className="w-full space-y-8 text-center text-base md:w-2/3 md:text-left md:text-xl">
                <h3>
                  Neha Rastogi is a concept artist and illustrator who’s recent
                  focus has been in the core gaming sector where she has delved
                  deeper into worldbuilding and multifaceted art creation.
                </h3>
                <h3>
                  She developed a passion for creative communication as a kid -
                  creating documentaries, fine arts, and later with public
                  speaking, which continues to grow even now. To formalize her
                  skills, Neha pursued a Masters in Animation Degree from IIT
                  Bombay&apos;s Industrial Design Center.
                </h3>
                <h3>
                  Her creative journey in the industry evolved through work
                  experiences in illustration, advertising, and visual design,
                  gradually transitioning into animation and, ultimately,
                  finding her true passion in Concept Art.
                </h3>
                <h3>
                  She now lives in Bangalore, India, where she contributes her
                  talents to projects in the Entertainment Industry.
                </h3>
                <h3>
                  Beyond her professional endeavors, Neha is committed to
                  developing her digital content creation and product marketing
                  skills for personal branding across the digital landscape.
                </h3>
                <h3>
                  She actively shares her experiences and learning journey for
                  aspiring artists, on{" "}
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline"
                    href="https://www.linkedin.com/in/neharastogi244/"
                  >
                    LinkedIn
                  </Link>
                  , with plans to expand her reach further.
                </h3>
              </div>

              <div className="relative mx-auto h-fit w-full max-w-[500px] overflow-hidden rounded-md  md:w-1/3">
                <Image
                  alt="Neha Rastogi"
                  className="mx-auto max-w-full object-cover object-center"
                  quality={95}
                  src={aboutImg}
                  placeholder="blur"
                  // src={
                  //   "https://res.cloudinary.com/dywu7jrjp/image/upload/v1673533517/neha%20portfolio/about.jpg"
                  // }
                />
              </div>
            </div>

            <div className="pt-24 md:pt-36">
              <h2 className="bg-gradient-to-b from-gold-90 to-yellow bg-clip-text text-center font-marcellus text-2xl font-bold uppercase tracking-widest text-transparent lg:text-3xl">
                Past workspaces + clients
              </h2>

              <div className="mx-auto grid max-w-2xl grid-cols-2 place-items-center gap-5 pt-12 md:grid-cols-3 md:gap-10">
                <Image src={volta} placeholder="blur" alt="Volta logo"></Image>
                <Image
                  src={atmatva}
                  placeholder="blur"
                  alt="Atmatva logo"
                ></Image>
                <Image src={zynga} placeholder="blur" alt="Zynga logo"></Image>
                <Image
                  src={digitalDomain}
                  placeholder="blur"
                  alt="Digital domain logo"
                ></Image>
                <Image
                  src={ogilvyMather}
                  placeholder="blur"
                  alt="Ogilvy and Mather logo"
                ></Image>
                <Image src={myth} placeholder="blur" alt="Myth logo"></Image>
              </div>
            </div>

            <div className="space-y-10 pt-24 text-base text-neutral-300 md:pt-40 md:text-xl">
              <div className="flex items-center gap-4 md:flex-row md:gap-8">
                <FaInstagram className="xs:block hidden text-xl md:text-4xl" />
                <div className="text-sm md:text-xl">
                  <p>Instagram:</p>
                  <Link
                    className="underline"
                    target="_blank"
                    rel="noreferrer noopener"
                    href={"https://www.instagram.com/thenehaink/"}
                  >
                    https://www.instagram.com/thenehaink
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4 md:flex-row md:gap-8">
                <FaArtstation className="xs:block hidden text-xl md:text-4xl" />
                <div className="text-sm md:text-xl">
                  <p>ArtStation:</p>
                  <Link
                    className="underline"
                    target="_blank"
                    rel="noreferrer noopener"
                    href={"https://www.artstation.com/neha_rastogi"}
                  >
                    <span>https://www.artstation.com/neha_rastogi</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4 md:flex-row md:gap-8">
                <HiOutlineMail className="xs:block hidden text-xl md:text-4xl" />
                <div className="text-sm md:text-xl">
                  <p>Email:</p>
                  <Link className="underline" href="mailto:art@neharastogi.com">
                    <span>art@neharastogi.com</span>
                  </Link>
                </div>
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
