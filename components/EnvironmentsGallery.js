import environmentPhotos from "@/constants/environmentImageData";
import NextImage from "./NextImage";

const EnvironmentsGallery = () => {
  return (
    <div className="space-y-20">
      <div className="flex w-full gap-1 ">
        <NextImage imgData={environmentPhotos[0]} />
        <div className="space-y-2">
          {environmentPhotos.slice(1, 3).map((img) => (
            <NextImage key={img.key} imgData={img} />
          ))}
        </div>
      </div>
      <div className="flex gap-1">
        {environmentPhotos.slice(3, 7).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex items-center gap-1">
        {environmentPhotos.slice(7, 10).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
        <div>
          {environmentPhotos.slice(10, 12).map((img) => (
            <NextImage key={img.key} imgData={img} />
          ))}
        </div>
      </div>
      <div className="flex w-full gap-1 ">
        <div className="space-y-2">
          {environmentPhotos.slice(12, 14).map((img) => (
            <NextImage key={img.key} imgData={img} />
          ))}
        </div>
        <div className="max-w-[977px]">
          <NextImage imgData={environmentPhotos[14]} />
        </div>
      </div>
      <div className="flex items-center gap-1">
        {environmentPhotos.slice(15, 18).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex items-center gap-1">
        {environmentPhotos.slice(18, 22).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex items-center gap-1">
        {environmentPhotos.slice(22, 26).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="flex items-center gap-1">
        {environmentPhotos.slice(26, 29).map((img) => (
          <NextImage key={img.key} imgData={img} />
        ))}
      </div>
      <div className="max-w-full">
        <NextImage imgData={environmentPhotos[29]} />
      </div>
      <div className="flex w-full gap-1 ">
        <NextImage imgData={environmentPhotos[30]} />
        <div className="max-w-[510px] space-y-2">
          {environmentPhotos.slice(31, 33).map((img) => (
            <NextImage key={img.key} imgData={img} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1">
        <NextImage imgData={environmentPhotos[33]} />
        {/* <div className="grid h-[355px] w-[333px] place-items-center bg-neutral-400">
          <p className="text-3xl font-bold">NDA</p>
        </div> */}
      </div>
    </div>
  );
};

export default EnvironmentsGallery;
