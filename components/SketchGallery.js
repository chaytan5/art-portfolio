import sketchesImageData from "@/constants/sketchesData";
import NextImage from "./NextImage";

const SketchGallery = () => {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1">
        <NextImage imgData={sketchesImageData[0]} />
        <div className="space-y-1">
          {sketchesImageData.slice(1, 3).map((img) => (
            <NextImage key={img.key} imgData={img} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1">
        {sketchesImageData.slice(3, 6).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex items-center gap-1">
        {sketchesImageData.slice(6, 9).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex items-center gap-1">
        {sketchesImageData.slice(9, 11).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex items-center gap-1">
        {sketchesImageData.slice(11, 13).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex items-center gap-1">
        {sketchesImageData.slice(13, 15).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      {sketchesImageData.slice(15).map((img) => (
        <NextImage key={img.key} imgData={img} />
      ))}
    </div>
  );
};

export default SketchGallery;
