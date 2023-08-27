"use client";

const { createPortal } = require("react-dom");
import environmentPhotos from "@/constants/environmentImageData";
import NextImageLightbox from "@/components/NextImageLightbox";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useLightboxContext } from "@/contexts/lightbox-context";

const LightboxModal = () => {
  const { isLightboxOpen, setIsLightboxOpen, currentIndex, setCurrentIndex } =
    useLightboxContext();

  return createPortal(
    <Lightbox
      index={currentIndex}
      open={isLightboxOpen}
      close={() => {
        setCurrentIndex(-1);
        setIsLightboxOpen(false);
      }}
      slides={environmentPhotos}
      render={{ slide: NextImageLightbox }}
      plugins={[Thumbnails, Zoom]}
      carousel={2}
    />,
    document.body,
  );
};

export default LightboxModal;
