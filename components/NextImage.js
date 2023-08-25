import Image from "next/image";
import eyeIcon from "@/assets/svgs/eye.svg";

const NextImage = ({ imgData: { height, width, src, alt } }) => {
  return (
    <div
      className={`max-w-[${width}px] relative cursor-pointer overflow-hidden rounded-sm shadow-sm`}
      onClick={() => {
        console.log("clicked");
      }}
    >
      <Image
        className="max-w-full transition duration-300 ease-in-out hover:scale-105"
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={100}
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70">
        <div className="rounded-full border-2 border-gold-90 p-4">
          <Image src={eyeIcon} alt="View full image" />
        </div>
      </div>
    </div>
  );
};

export default NextImage;
