import Image from "next/image";
import eyeIcon from "@/assets/svgs/eye.svg";
import { useLightboxContext } from "@/contexts/lightbox-context";
import useNextBlurhash from "use-next-blurhash";

const NextImage = ({
  imgData: { height, width, src, title, key, blurdataUrl },
}) => {
  const { setIsLightboxOpen, setCurrentIndex } = useLightboxContext();
  // const [blurDataUrl] = useNextBlurhash("LJAc*%Sw=}In~qkVt7In-;t7WBM{");
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
        // placeholder="blur"
        // blurDataURL={blurdataUrl}
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
