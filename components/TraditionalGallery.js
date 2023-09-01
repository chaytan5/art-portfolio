import traditionalImagesData from "@/constants/traditionalSketchesData";
import NextImage from "./NextImage";

const TraditionalGallery = () => {
  return (
    <div className="space-y-4">
      <NextImage imgData={traditionalImagesData[0]} />

      <div className="flex items-center gap-4">
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
