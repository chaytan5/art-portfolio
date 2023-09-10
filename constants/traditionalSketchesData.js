const url = "/traditional-sketches/";

const environmentPhotos = [
  { key: 1, src: "img1.webp", width: 1440, height: 800, title: "ENERGIZE" },
  { key: 2, src: "img2.webp", width: 810, height: 618, title: "CATCH" },
  { key: 3, src: "img3.webp", width: 614, height: 618, title: "BOND" },
  {
    key: 4,
    src: "img4.webp",
    width: 1440,
    height: 815,
    title: "SHADOW PUPPETS",
  },
  { key: 5, src: "img5.webp", width: 1440, height: 968, title: "CONSERVE" },
  { key: 6, src: "img6.webp", width: 1440, height: 1095, title: "PREPARE" },
];

const photos = environmentPhotos.map((img) => {
  return {
    ...img,
    src: url + img.src,
  };
});

export default photos;
