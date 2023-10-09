import React from "react";
import NextImageLightbox from "./NextImageLightbox";
import Link from "next/link";

const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

function nextImageUrl(src, size) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
}

const CustomSlide = ({ slide, rect }) => {
  return (
    <div className=" mx-auto my-auto flex h-[80%] items-center justify-between gap-6 lg:w-[80%]">
      <NextImageLightbox slide={slide} rect={rect} />

      <div className="hidden max-h-full min-w-[30%] flex-col gap-10 md:flex">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-neutral-200">{slide.title}</h1>
          {/* <h3 className="max-w-[500px] text-lg text-neutral-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui
            deserunt sunt corporis iusto error impedit tempore hic perferendis?
            Perferendis?
          </h3> */}
        </div>
        {slide.project && (
          <Link href={slide.project}>
            <button className="rounded-md border border-neutral-300 px-6 py-3 text-neutral-200">
              View Full Project
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CustomSlide;
