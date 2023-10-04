import React from "react";
import NextImageLightbox from "./NextImageLightbox";

const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

function nextImageUrl(src, size) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
}

const CustomSlide = ({ slide, rect }) => {
  // const { width, height } = slide;
  // console.log(slide);

  return (
    <div className=" mx-auto my-auto flex h-[80%] items-center justify-between gap-6 lg:max-w-6xl">
      {/* <NextImageLightbox slide={slide} rect={rect} /> */}
      <div></div>

      <div className="hidden max-h-full min-w-[30%] flex-col gap-10 md:flex">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-neutral-100">{slide.title}</h1>
          {/* <h3 className="max-w-[500px] text-lg text-neutral-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui
            deserunt sunt corporis iusto error impedit tempore hic perferendis?
            Perferendis?
          </h3> */}
        </div>
        <div>
          <button className="rounded-sm border border-neutral-200 px-6 py-3 text-white">
            View Full Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSlide;
