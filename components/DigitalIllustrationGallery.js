import digitalIllustrationData from "@/constants/digitalIllustrationsData";
import NextImage from "./NextImage";

const DigitalIllustrationGallery = () => {
  return (
    <div className="space-y-2 md:space-y-1">
      <div className="flex w-full flex-col gap-2 md:flex-row md:gap-1">
        {digitalIllustrationData.slice(0, 2).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex w-full flex-col gap-2 md:flex-row md:gap-1">
        {digitalIllustrationData.slice(2, 5).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex w-full flex-col gap-2 md:flex-row md:gap-1">
        {digitalIllustrationData.slice(5).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
    </div>
  );
};

export default DigitalIllustrationGallery;
