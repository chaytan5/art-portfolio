const url = "/sketches/";

const environmentPhotos = [
  {
    key: 1,
    src: "img1.webp",
    width: 1035,
    height: 597,
    title: "RESURRECTION TANK - 3D BASE",
  },
  { key: 2, src: "img2.webp", width: 397, height: 208, title: "TANK SKETCHES" },
  {
    key: 3,
    src: "img3.webp",
    width: 397,
    height: 384,
    title: "DESIGN SKETCHING",
  },
  { key: 4, src: "img4.webp", width: 752, height: 538, title: "Food Truck 3D" },
  {
    key: 5,
    src: "img5.webp",
    width: 383,
    height: 538,
    title: "STILL LIFE STUDY",
  },
  {
    key: 6,
    src: "img6.webp",
    width: 294,
    height: 538,
    title: "Jack Daniels Blender Art",
  },
  {
    key: 7,
    src: "img7.webp",
    width: 600,
    height: 514,
    title: "STILL LIFE STUDY",
  },
  {
    key: 8,
    src: "img8.webp",
    width: 305,
    height: 514,
    title: "GARDEN GNOME 3D",
  },
  {
    key: 9,
    src: "img9.webp",
    width: 522,
    height: 514,
    title: "SPACEHEAD TEENAGER'S ROOM",
  },
  { key: 10, src: "img10.webp", width: 898, height: 532, title: "LEAF LAMPS" },
  { key: 11, src: "img11.webp", width: 534, height: 532, title: "LEAF LAMPS" },
  {
    key: 12,
    src: "img12.webp",
    width: 726,
    height: 529,
    title: "TEENAGE LOUIS - ANIMATION DESIGN",
  },
  {
    key: 13,
    src: "img13.webp",
    width: 722,
    height: 529,
    title: "KUMAR - ELECTRICIAN ANIMATION DESIGN",
  },
  {
    key: 14,
    src: "img14.webp",
    width: 728,
    height: 514,
    title: "JACQUES- ANIMATION DESIGN",
  },
  {
    key: 15,
    src: "img15.webp",
    width: 700,
    height: 514,
    title: "PIPER - ANTAGONIST - ANIMATION DESIGN",
  },
  {
    key: 16,
    src: "img16.webp",
    width: 1440,
    height: 844,
    title: "YOUNG LOUIS - ANIMATION DESIGN",
  },
  {
    key: 17,
    src: "img17.webp",
    width: 1440,
    height: 621,
    title: "DESERT SPICE VENDORS - JOURNEY SKETCHES",
  },
  {
    key: 18,
    src: "img18.webp",
    width: 1440,
    height: 796,
    title: "VERTICAL VIKING VILLAGE - WORLDBUILDING",
  },
];

const photos = environmentPhotos.map((img) => {
  return {
    ...img,
    src: url + img.src,
  };
});

export default photos;
