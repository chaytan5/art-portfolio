import stylizedIllustrationData from "@/constants/stylizedIllustrationsData";
import NextImage from "./NextImage";

const StylizedIllustrationGallery = () => {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1">
        {stylizedIllustrationData.slice(0, 2).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex items-center gap-1">
        {stylizedIllustrationData.slice(2, 5).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex items-center gap-1">
        {stylizedIllustrationData.slice(5).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
    </div>
  );
};

export default StylizedIllustrationGallery;
