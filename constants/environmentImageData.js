const url = "/environment-worldbuilding/";

const environmentPhotos = [
  {
    key: 1,
    src: "img1.webp",
    width: 975,
    height: 568,
    title: "GUERILLA HIDEOUT - INTERIOR ENVIRONMENT",
    project: "/project/guerilla-hideout",
  },
  {
    key: 2,
    src: "img2.webp",
    width: 452,
    height: 271,
    title: "SPOREX- WORLDBUILDING THUMBNAILS",
    project: "/project/galactic-gardens",
  },
  {
    key: 3,
    src: "img3.webp",
    width: 453,
    height: 271,
    title: "FROZEN COLONY - ENVIRONMENT DEVELOPMENT ",
  },
  {
    key: 4,
    src: "img4.webp",
    width: 350,
    height: 244,
    title: "LITHUANIAN HERBALIST HUT",
  },
  {
    key: 5,
    src: "img5.webp",
    width: 311,
    height: 244,
    title: "EARLY FRENCH HELICOPTER",
    project: "/project/tailwind",
  },
  {
    key: 6,
    src: "img6.webp",
    width: 325,
    height: 244,
    title: "TAILWIND - FRENCH VEHICLE WORKSHOP",
    project: "/project/tailwind",
  },
  {
    key: 7,
    src: "img7.webp",
    width: 430,
    height: 244,
    title: "TAILWIND - FRENCH INVENTOR _ AVIATION RACER",
    project: "/project/tailwind",
  },
  {
    key: 8,
    src: "img8.webp",
    width: 347,
    height: 280,
    title: "TAILWIND - UMBRELLA HELICOPTER",
    project: "/project/tailwind",
  },
  {
    key: 9,
    src: "img9.webp",
    width: 415,
    height: 280,
    title: "WORLD WAR Z -SOLDIER AND ARMOURED CAR",
    project: "/project/worldwar-z",
  },
  {
    key: 10,
    src: "img10.webp",
    width: 417,
    height: 280,
    title: "TAILWIND - THUMBNAILS",
    project: "/project/tailwind",
  },
  {
    key: 11,
    src: "img11.webp",
    width: 240,
    height: 140,
    title: "WORLD WAR Z -VEHICLE THUMBNAILS",
  },
  {
    key: 12,
    src: "img12.webp",
    width: 240,
    height: 140,
    title: "WORLDWAR Z - ARMOURED CAR OPTIONS",
  },
  {
    key: 13,
    src: "img13.webp",
    width: 510,
    height: 260,
    title: "SPOREX- TERRAIN EXPLORATION",
    project: "/project/galactic-gardens",
  },
  {
    key: 14,
    src: "img14-new.webp",
    width: 510,
    height: 260,
    title: "CAVERN BEASTS",
    // project: "/project/galactic-gardens",
  },
  {
    key: 15,
    src: "img15-new.webp",
    width: 975,
    height: 540,
    title: "WINTER GUARDIAN",
    // project: "/project/galactic-gardens",
  },
  {
    key: 16,
    src: "img16.webp",
    width: 590,
    height: 280,
    title: "ALIEN EGG RESEARCH TOWER",
    project: "/project/galactic-gardens",
  },
  {
    key: 17,
    src: "img17.webp",
    width: 450,
    height: 280,
    title: "LEAF LAMPS",
  },
  {
    key: 18,
    src: "img18.webp",
    width: 383,
    height: 280,
    title: "SPOREX- GAMEPLAY MAP",
    project: "/project/sporex",
  },
  {
    key: 19,
    src: "img19.webp",
    width: 341,
    height: 257,
    title: "TAILWIND -  CRAFTING WAREHOUSE",
    project: "/project/tailwind",
  },
  {
    key: 20,
    src: "img20.webp",
    width: 352,
    height: 257,
    title: "WORLD WAR Z -SOLDIER THUMBNAILS",
    project: "/project/worldwar-z",
  },
  {
    key: 21,
    src: "img21.webp",
    width: 353,
    height: 257,
    title: "TAILWIND - AMERICAN INDUSTRIAL FACILITY",
    project: "/project/tailwind",
  },
  {
    key: 22,
    src: "img22.webp",
    width: 371,
    height: 257,
    title: "TAILWIND - WORKSHOP CUTAWAY",
    project: "/project/tailwind",
  },
  {
    key: 23,
    src: "img23.webp",
    width: 462,
    height: 265,
    title: "SPOREX- CRASH WASTE",
    project: "/project/galactic-gardens",
  },
  {
    key: 24,
    src: "img24.webp",
    width: 363,
    height: 265,
    title: "OVERGROWN MONOLITH TEMPLE",
  },
  {
    key: 25,
    src: "img25.webp",
    width: 330,
    height: 265,
    title: "SKETCHES - EXPRESSIVE CHARACTERS",
  },
  {
    key: 26,
    src: "img26.webp",
    width: 265,
    height: 265,
    title: "TRIBAL SAGE'S AXE -THUMBNAILS ",
  },
  {
    key: 27,
    src: "img27.webp",
    width: 487,
    height: 240,
    title: "RESURRECTION - RESORATION SITE",
    project: "/project/resurrection",
  },
  {
    key: 28,
    src: "img28.webp",
    width: 432,
    height: 240,
    title: "RESURRECTION - SHRINE LAYOUT THUMBNAIL",
    project: "/project/resurrection",
  },
  {
    key: 29,
    src: "img29.webp",
    width: 505,
    height: 240,
    title: "RESURRECTION - THUMNAILS ",
    project: "/project/resurrection",
  },
  {
    key: 30,
    src: "img30.webp",
    width: 1440,
    height: 490,
    title: "SPOREX - BABY SHIP",
    project: "/project/mini-ship",
  },
  {
    key: 31,
    src: "img31.webp",
    width: 919,
    height: 693,
    title: "FLYING MACHINE WAREHOUSE",
  },
  {
    key: 32,
    src: "img32.webp",
    width: 510,
    height: 329,
    title: "AVIATION INVENTOR'S WORKSHOP",
  },
  {
    key: 33,
    src: "img33.webp",
    width: 510,
    height: 350,
    title: "INDUSTRIAL PLANT",
  },
  {
    key: 34,
    src: "img34.webp",
    width: 1440,
    height: 355,
    title: "Palace Adventure",
  },
];

// const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
// const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

// function nextImageUrl(src, size) {
//   return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
// }

const photos = environmentPhotos.map((img) => {
  return {
    ...img,
    src: url + img.src,
  };
});

// const photosWithNextLink = photos.map((img) => {
//   return {
//     ...img,
//     src: nextImageUrl(img.src, img.width),
//     srcSet: imageSizes
//       .concat(...deviceSizes)
//       .filter((size) => size <= img.width)
//       .map((size) => ({
//         src: nextImageUrl(img.src, img.width),
//         width: size,
//         height: Math.round((img.height / img.width) * size),
//       })),
//   };
// });

export default photos;
