import traditionalImagesData from "@/constants/traditionalSketchesData";
import NextImage from "./NextImage";

const TraditionalGallery = () => {
  return (
    <div className="space-y-2">
      <NextImage imgData={traditionalImagesData[0]} />

      <div className="flex w-full flex-col gap-2 md:flex-row md:gap-1">
        {traditionalImagesData.slice(1, 3).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>

      {traditionalImagesData.slice(3).map((img) => (
        <NextImage key={img.key} imgData={img} />
      ))}
    </div>
  );
};

export default TraditionalGallery;
