"use client";
import { useState } from "react";

import EnvironmentsGallery from "@/components/EnvironmentsGallery";
import IllustrationGallery from "@/components/IllustrationGallery";
import Nav from "@/components/Nav";
import ProjectsGallery from "@/components/ProjectsGallery";
import SketchGallery from "@/components/SketchGallery";
import Tabs from "@/components/Tabs";
import TraditionalGallery from "@/components/TraditionalGallery";
import environmentPhotos from "@/constants/environmentImageData";

import NextImageLightbox from "@/components/NextImageLightbox";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { useLightboxContext } from "@/contexts/lightbox-context";

function CurrentGallery({ currentTab }) {
  if (currentTab === "environment") return <EnvironmentsGallery />;
  if (currentTab === "sketch") return <SketchGallery />;
  if (currentTab === "illustration") return <IllustrationGallery />;
  if (currentTab === "traditional") return <TraditionalGallery />;
  if (currentTab === "projects") return <ProjectsGallery />;
  return null;
}

export default function Work() {
  const [currentTab, setCurrentTab] = useState("environment");
  const { isLightboxOpen, setIsLightboxOpen, currentIndex, setCurrentIndex } =
    useLightboxContext();
  return (
    <>
      <div className="absolute top-0 -z-10 w-full bg-neutral-100">
        <Nav />

        {/* <div className="absolute left-0 top-0 -z-10 h-[250px] w-full bg-gradient-to-b from-black/80"></div> */}

        <main className="relative top-32 pb-32">
          {/* <div className="relative mx-auto w-11/12 max-w-7xl"> */}
          <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
          {/* </div> */}
          <section className="max-w-screen-1.5xl mx-auto w-11/12">
            <div className="py-20">
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
        slides={environmentPhotos}
        render={{ slide: NextImageLightbox }}
        plugins={[Thumbnails]}
        carousel={2}
      />
    </>
  );
}
