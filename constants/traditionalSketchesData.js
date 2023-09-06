const url = "/traditional-sketches-highres/";

const environmentPhotos = [
  { key: 1, src: "img1.png", width: 1440, height: 800, alt: "Some alt text" },
  { key: 2, src: "img2.png", width: 810, height: 618, alt: "some alt text" },
  { key: 3, src: "img3.png", width: 614, height: 618, alt: "some alt text" },
  { key: 4, src: "img4.png", width: 1440, height: 815, alt: "some alt text" },
  { key: 5, src: "img5.png", width: 1440, height: 968, alt: "some alt text" },
  { key: 6, src: "img6.png", width: 1440, height: 1095, alt: "some alt text" },
];

const photos = environmentPhotos.map((img) => {
  return {
    ...img,
    src: url + img.src,
  };
});

export default photos;
