import Image from "next/image";
import eyeIcon from "@/assets/svgs/eye.svg";
import { useLightboxContext } from "@/contexts/lightbox-context";

const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const NextImage = ({ imgData: { height, width, src, alt, key } }) => {
  const { setIsLightboxOpen, setCurrentIndex } = useLightboxContext();
  return (
    <div
      className={`max-w-[${width}px] relative cursor-pointer rounded-sm bg-white transition  duration-300 ease-in-out`}
      onClick={() => {
        setCurrentIndex(key - 1);
        setIsLightboxOpen(true);
      }}
    >
      <Image
        className="max-w-full opacity-0 transition-opacity duration-700"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
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
