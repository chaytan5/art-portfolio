"use client";
import React, { useRef } from "react";
import arrowIcon from "@/assets/svgs/arrow.svg";
import Image from "next/image";
import Slider from "react-slick";
import CollectionCard from "./CollectionCard";
import { collections } from "@/constants/collectionsData";

const Carousel = () => {
  const sliderRef = useRef(null);
  const carouselSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="absolute -bottom-12 mx-auto flex w-full ">
        <ul className="dots-list mx-auto">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        className={`border-gold-90 h-4 w-4 rotate-45 cursor-pointer border`}
      ></div>
    ),
  };
  return (
    <div className="relative py-10">
      <div
        className="absolute left-0 top-0 z-10 hidden h-full w-16 cursor-pointer items-center justify-center bg-transparent md:flex"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <Image src={arrowIcon} alt="Previous button" />
      </div>
      <div
        className="absolute right-0 top-0 z-10 hidden h-full w-16 rotate-180 cursor-pointer items-center justify-center bg-transparent md:flex"
        onClick={() => sliderRef.current.slickNext()}
      >
        <Image src={arrowIcon} alt="Next button" />
      </div>
      <Slider className="mx-16" ref={sliderRef} {...carouselSettings}>
        {collections.map((data) => (
          <CollectionCard key={data.id} {...data} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
