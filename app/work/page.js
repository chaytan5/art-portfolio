"use client";
import { useState, useEffect } from "react";
import { useLightboxContext } from "@/contexts/lightbox-context";

import EnvironmentsGallery from "@/components/EnvironmentsGallery";
import Nav from "@/components/Nav";
import ProjectsGallery from "@/components/ProjectsGallery";
import SketchGallery from "@/components/SketchGallery";
import Tabs from "@/components/Tabs";
import TraditionalGallery from "@/components/TraditionalGallery";
import environmentPhotos from "@/constants/environmentImageData";
import traditionalSketchesData from "@/constants/traditionalSketchesData";
import stylizedIllustrationsData from "@/constants/stylizedIllustrationsData";
import Footer from "@/components/Footer";
import CustomSlide from "@/components/CustomSlide";
import StylizedIllustrationGallery from "@/components/StylizedIllustrationGallery";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

function CurrentGallery({ currentTab }) {
  if (currentTab === "environment") return <EnvironmentsGallery />;
  if (currentTab === "sketch") return <SketchGallery />;
  if (currentTab === "illustration") return <StylizedIllustrationGallery />;
  if (currentTab === "traditional") return <TraditionalGallery />;
  if (currentTab === "projects") return <ProjectsGallery />;
  return null;
}

export default function Work() {
  const [currentTab, setCurrentTab] = useState("environment");
  const { isLightboxOpen, setIsLightboxOpen, currentIndex, setCurrentIndex } =
    useLightboxContext();
  const [currentLightboxData, setCurrentLightboxData] = useState(null);

  useEffect(() => {
    (function setLightboxData() {
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
        default:
          setCurrentLightboxData(null);
          break;
      }
    })();
  }, [currentTab]);

  return (
    <>
      <div className="w-full bg-neutral-100">
        <Nav />
        <main className="relative top-14 pb-32">
          <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <section className="mx-auto w-11/12 max-w-screen-1.5xl">
            <div className="py-20">
              <CurrentGallery currentTab={currentTab} />
            </div>
          </section>
        </main>
      </div>
      <Footer />
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
        }}
        plugins={[Thumbnails, Fullscreen, Counter]}
        carousel={{
          finite: true,
          preload: 5,
        }}
        thumbnails={{ borderRadius: 2 }}
      />
    </>
  );
}
