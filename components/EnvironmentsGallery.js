import Image from "next/image";
import React from "react";
import img1 from "@/assets/environmentImages/header.png";
import environmentPhotos from "@/constants/environmentImageData";

const EnvironmentsGallery = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* <div className="col-span-3 row-span-2 max-w-[870px] bg-neutral-300">
        <Image src={img1} className="max-w-full" alt="" />
      </div> */}
      {environmentPhotos?.map((image) => {
        return (
          <div
            key={image.key}
            className={`bg-neutral-300 max-w-[${image.width}px] max-h-[${image.height}px] col-span-${image.colSpan} row-span-${image.rowSpan}`}
          >
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              className=" h-full max-w-full"
              alt={image.alt}
              quality={95}
            />
          </div>
        );
      })}
      {/* <div className="max-w-48 h-48 bg-neutral-300"></div>
      <div className="max-w-48 h-48 bg-neutral-300"></div>
      <div className="max-w-48 h-48 bg-neutral-300"></div>
      <div className="max-w-48 h-48 bg-neutral-300"></div>
      <div className="max-w-48 h-48 bg-neutral-300"></div>
      <div className="max-w-48 h-48 bg-neutral-300"></div>
      <div className="max-w-48 h-48 bg-neutral-300"></div>
      <div className="max-w-48 h-48 bg-neutral-300"></div> */}
    </div>
  );
};

export default EnvironmentsGallery;
