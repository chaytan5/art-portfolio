import environmentPhotos from "@/constants/environmentImageData";
import NextImage from "./NextImage";

const EnvironmentsGallery = () => {
  return (
    <div className="space-y-14">
      <div className="flex w-full gap-2 ">
        <NextImage imgData={environmentPhotos[0]} />
        <div className="space-y-4">
          {environmentPhotos.slice(1, 3).map((img) => (
            <NextImage key={img.key} imgData={img} />
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        {environmentPhotos.slice(3, 7).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        {environmentPhotos.slice(7, 11).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex w-full gap-2 ">
        <div className="space-y-4">
          {environmentPhotos.slice(11, 13).map((img) => (
            <NextImage key={img.key} imgData={img} />
          ))}
        </div>
        <div className="max-w-[973px]">
          <NextImage imgData={environmentPhotos[13]} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        {environmentPhotos.slice(14, 17).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        {environmentPhotos.slice(17, 21).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        {environmentPhotos.slice(21, 25).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        {environmentPhotos.slice(25, 28).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="max-w-full">
        <NextImage imgData={environmentPhotos[28]} />
      </div>
      <div className="flex w-full gap-2 ">
        <NextImage imgData={environmentPhotos[29]} />
        <div className="max-w-[499px] space-y-4">
          {environmentPhotos.slice(30, 32).map((img) => (
            <NextImage key={img.key} imgData={img} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <NextImage imgData={environmentPhotos[32]} />
        <div className="grid h-[355px] w-[333px] place-items-center bg-neutral-400">
          <p className="text-3xl font-bold">NDA</p>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentsGallery;
