const url = "/digital-illustrations/";

const environmentPhotos = [
  { key: 1, src: "img1.webp", width: 580, height: 640, title: "ALICE" },
  {
    key: 2,
    src: "img2.webp",
    width: 844,
    height: 640,
    title: "MARKET FRUIT STALL",
  },
  { key: 3, src: "img3.webp", width: 483, height: 641, title: "THE BUTLER" },
  { key: 4, src: "img4.webp", width: 464, height: 641, title: "VALENTINE" },
  { key: 5, src: "img5.webp", width: 472, height: 641, title: "DOG LOVER" },
  { key: 6, src: "img6.webp", width: 473, height: 537, title: "DANCING QUEEN" },
  { key: 7, src: "img7.webp", width: 951, height: 537, title: "LUSH SNOWCAPS" },
];

const photos = environmentPhotos.map((img) => {
  return {
    ...img,
    src: url + img.src,
  };
});

export default photos;
