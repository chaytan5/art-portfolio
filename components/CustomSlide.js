import React from "react";
import NextImageLightbox from "./NextImageLightbox";

const CustomSlide = ({ slide, rect }) => {
  return (
    <div className=" mt-auto flex h-[95%] w-full justify-between gap-4">
      <div className=" min-w-[50%] max-w-[70%]">
        <NextImageLightbox slide={slide} rect={rect} />
      </div>
      <div className="flex w-[30%] grow flex-col justify-between">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-neutral-100">Image Title</h1>
          <h3 className="max-w-[500px] text-lg text-neutral-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui
            deserunt sunt corporis iusto error impedit tempore hic perferendis?
            Perferendis?
          </h3>
        </div>
        <div>
          <button className="border border-neutral-200 px-6 py-3 text-white">
            View Full Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSlide;
