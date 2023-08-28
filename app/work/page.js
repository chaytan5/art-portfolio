"use client";
import { useState, useRef } from "react";

import EnvironmentsGallery from "@/components/EnvironmentsGallery";
import IllustrationGallery from "@/components/IllustrationGallery";
import Nav from "@/components/Nav";
import ProjectsGallery from "@/components/ProjectsGallery";
import SketchGallery from "@/components/SketchGallery";
import Tabs from "@/components/Tabs";
import TraditionalGallery from "@/components/TraditionalGallery";
import environmentPhotos from "@/constants/environmentImageData";
import { useLightboxContext } from "@/contexts/lightbox-context";

import Lightbox from "yet-another-react-lightbox";
import NextImageLightbox from "@/components/NextImageLightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Footer from "@/components/Footer";

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
      <div className=" w-full bg-neutral-100">
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
        slides={environmentPhotos}
        render={{ slide: NextImageLightbox }}
        plugins={[Thumbnails, Zoom, Fullscreen, Counter]}
        carousel={{
          finite: true,
          preload: 5,
        }}
        counter={{
          container: {},
        }}
      />
    </>
  );
}
