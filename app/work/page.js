"use client";
import { useState, useEffect } from "react";
import { useLightboxContext } from "@/contexts/lightbox-context";
import { useTabsContext } from "@/contexts/tab-context";

import EnvironmentsGallery from "@/components/EnvironmentsGallery";
import ProjectsGallery from "@/components/ProjectsGallery";
import SketchGallery from "@/components/SketchGallery";
import Tabs from "@/components/Tabs";
import TraditionalGallery from "@/components/TraditionalGallery";
import environmentPhotos from "@/constants/environmentImageData";
import traditionalSketchesData from "@/constants/traditionalSketchesData";
import stylizedIllustrationsData from "@/constants/digitalIllustrationsData";
import sketchImageData from "@/constants/sketchesData";
import CustomSlide from "@/components/CustomSlide";
import DigitalIllustrationGallery from "@/components/DigitalIllustrationGallery";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

function CurrentGallery({ currentTab }) {
  if (currentTab === "environment") return <EnvironmentsGallery />;
  if (currentTab === "sketch") return <SketchGallery />;
  if (currentTab === "illustration") return <DigitalIllustrationGallery />;
  if (currentTab === "traditional") return <TraditionalGallery />;
  if (currentTab === "projects") return <ProjectsGallery />;
  return null;
}

export default function Work() {
  const { currentTab } = useTabsContext();
  const { isLightboxOpen, setIsLightboxOpen, currentIndex, setCurrentIndex } =
    useLightboxContext();
  const [currentLightboxData, setCurrentLightboxData] = useState(null);

  useEffect(() => {
    (function () {
      switch (currentTab) {
        case "environment":
          setCurrentLightboxData(environmentPhotos);
          break;
        case "traditional":
          setCurrentLightboxData(traditionalSketchesData);
          break;
        case "illustration":
          setCurrentLightboxData(stylizedIllustrationsData);
          break;
        case "sketch":
          setCurrentLightboxData(sketchImageData);
          break;
        default:
          setCurrentLightboxData(null);
          break;
      }
    })();

    const goToTop = () => {
      window.scrollTo({
        top: 150,
        behavior: "smooth",
      });
    };

    if (window.innerWidth > 768) {
      goToTop();
    }
  }, [currentTab]);

  return (
    <>
      <div className="w-full bg-neutral-100">
        <main className="relative top-5 pb-32 md:top-14">
          <Tabs />
          <section className="mx-auto w-11/12 max-w-screen-1.5xl">
            <div className=" py-10 md:py-20">
              <CurrentGallery currentTab={currentTab} />
            </div>
          </section>
        </main>
      </div>
      <Lightbox
        index={currentIndex}
        open={isLightboxOpen}
        close={() => {
          setCurrentIndex(-1);
          setIsLightboxOpen(false);
        }}
        slides={currentLightboxData}
        render={{
          slide: ({ slide, rect }) => <CustomSlide slide={slide} rect={rect} />,
          // slideContainer: ({ slide, children }) => (
          //   <CustomContainer slide={slide}>{children}</CustomContainer>
          // ),
        }}
        plugins={[Thumbnails, Fullscreen, Counter]}
        carousel={{
          finite: true,
          preload: 5,
        }}
        thumbnails={{ borderRadius: 2 }}
        styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .90)" } }}
      />
    </>
  );
}
