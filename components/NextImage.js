import Image from "next/image";
import eyeIcon from "@/assets/svgs/eye.svg";
import { useLightboxContext } from "@/contexts/lightbox-context";

const NextImage = ({ imgData: { height, width, src, title, key } }) => {
  const { setIsLightboxOpen, setCurrentIndex } = useLightboxContext();
  return (
    <div
      className={`md:max-w-[${width}px] relative cursor-pointer rounded-sm bg-transparent transition duration-300 ease-in-out md:bg-neutral-200`}
      onClick={() => {
        setCurrentIndex(key - 1);
        setIsLightboxOpen(true);
      }}
    >
      <Image
        className={`mx-auto h-full bg-white opacity-0 transition-opacity duration-300`}
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        src={src}
        alt={title}
        width={width}
        height={height}
        quality={95}
        loading="lazy"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center overflow-hidden bg-transparent bg-fixed text-transparent  transition duration-300 ease-in-out hover:bg-black/70 hover:text-gold-90">
        <p className="p-4 text-center uppercase ">{title}</p>
      </div>
    </div>
  );
};

export default NextImage;
