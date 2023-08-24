import Image from "next/image";
import React from "react";
import img1 from "@/assets/environmentImages/header.png";
import environmentPhotos from "@/constants/environmentImageData";

const EnvironmentsGallery = () => {
  return (
    <div className="space-y-4">
      {/* <div className="col-span-3 row-span-2 max-w-[870px] bg-neutral-300">
        <Image src={img1} className="max-w-full" alt="" />
      </div> */}
      {/* {environmentPhotos?.map((image) => {
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
      })} */}
      <div className="flex w-full items-stretch gap-4 ">
        <div className="max-w-[975px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img1.png"}
            alt="random"
            height={568}
            width={975}
          />
        </div>
        <div className="space-y-4">
          <Image
            src={"/environment-images/img2.png"}
            alt="random"
            width={452}
            height={271}
          />
          <Image
            src={"/environment-images/img3.png"}
            alt="random"
            width={452}
            height={271}
          />
        </div>
      </div>
      <div className="flex items-stretch gap-4">
        <div className="max-w-[340px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img4.png"}
            alt="random"
            width={340}
            height={242}
          />
        </div>
        <div className="max-w-[306px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img5.png"}
            alt="random"
            width={306}
            height={242}
          />
        </div>
        <div className="max-w-[318px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img6.png"}
            alt="random"
            width={318}
            height={242}
          />
        </div>
        <div className="max-w-[422px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img7.png"}
            alt="random"
            width={422}
            height={242}
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="max-w-[340px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img8.png"}
            alt="random"
            width={340}
            height={280}
          />
        </div>
        <div className="max-w-[407px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img9.png"}
            alt="random"
            width={407}
            height={280}
            quality={95}
          />
        </div>
        <div className="max-w-[409px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img10.png"}
            alt="random"
            width={409}
            height={280}
          />
        </div>
        <div className="max-w-[236px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img11.png"}
            alt="random"
            width={236}
            height={280}
          />
        </div>
      </div>
      <div className="flex w-full items-stretch gap-4 ">
        <div className="space-y-4">
          <div className="max-w-[450px]">
            <Image
              src={"/environment-images/img12.png"}
              alt="random"
              width={450}
              height={250}
            />
          </div>
          <div className="max-w-[450px]">
            <Image
              src={"/environment-images/img13.png"}
              alt="random"
              width={450}
              height={265}
            />
          </div>
        </div>
        <div className="max-w-[973px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img14.png"}
            alt="random"
            width={973}
            height={529}
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="max-w-[620px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img15.png"}
            alt="random"
            width={620}
            height={280}
            quality={95}
          />
        </div>
        <div className="max-w-[390px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img16.png"}
            alt="random"
            width={390}
            height={280}
            quality={95}
          />
        </div>
        <div className="max-w-[401px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img17.png"}
            alt="random"
            width={401}
            height={280}
            quality={95}
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="max-w-[338px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img18.png"}
            alt="random"
            width={338}
            height={257}
            quality={95}
          />
        </div>
        <div className="max-w-[349px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img19.png"}
            alt="random"
            width={349}
            height={257}
            quality={95}
          />
        </div>
        <div className="max-w-[339px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img20.png"}
            alt="random"
            width={339}
            height={257}
            quality={95}
          />
        </div>
        <div className="max-w-[372px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img21.png"}
            alt="random"
            width={372}
            height={257}
            quality={95}
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="max-w-[460px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img22.png"}
            alt="random"
            width={483}
            height={265}
            quality={95}
          />
        </div>
        <div className="max-w-[361px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img23.png"}
            alt="random"
            width={361}
            height={265}
            quality={95}
          />
        </div>
        <div className="max-w-[327px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img24.png"}
            alt="random"
            width={327}
            height={265}
            quality={95}
          />
        </div>
        <div className="max-w-[263px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img25.png"}
            alt="random"
            width={263}
            height={265}
            quality={95}
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="max-w-[483px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img26.png"}
            alt="random"
            width={483}
            height={240}
            quality={95}
          />
        </div>
        <div className="max-w-[427px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img27.png"}
            alt="random"
            width={427}
            height={240}
            quality={95}
          />
        </div>
        <div className="max-w-[500px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img28.png"}
            alt="random"
            width={500}
            height={240}
            quality={95}
          />
        </div>
      </div>
      <div className="max-w-full">
        <Image
          className="max-w-full"
          src={"/environment-images/img29.png"}
          alt="random"
          width={1440}
          height={490}
          quality={95}
        />
      </div>
      <div className="flex w-full items-stretch gap-4 ">
        <div className="max-w-[925px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img30.png"}
            alt="random"
            width={919}
            height={693}
          />
        </div>
        <div className="max-w-[499px] space-y-4">
          <div className="">
            <Image
              src={"/environment-images/img31.png"}
              alt="random"
              width={499}
              height={329}
            />
          </div>
          <div className="">
            <Image
              src={"/environment-images/img32.png"}
              alt="random"
              width={499}
              height={350}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="max-w-[1091px]">
          <Image
            className="max-w-full"
            src={"/environment-images/img33.png"}
            alt="random"
            width={1091}
            height={355}
            quality={95}
          />
        </div>
        <div className="grid h-[355px] w-[333px] place-items-center bg-neutral-400">
          <p className="text-3xl font-bold">NDA</p>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentsGallery;
