"use client";

import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextjsImage";
import photos from "@/constants/environmentImageData";
// import photos from "@/constants/photos";

export default function Gallery() {
  return (
    <PhotoAlbum
      layout="masonry"
      photos={photos}
      renderPhoto={NextJsImage}
      defaultContainerWidth={1280}
      columns={(containerWidth) => {
        if (containerWidth < 400) return 1;
        if (containerWidth < 800) return 2;
        return 3;
      }}
      sizes={{
        size: "calc(100vw - 140px)",
        sizes: [
          { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
          { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
          { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
        ],
      }}
    />
  );
}
