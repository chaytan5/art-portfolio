const url = "/stylized-illustrations/";

const environmentPhotos = [
  { key: 1, src: "img1.png", width: 580, height: 640, alt: "Some alt text" },
  { key: 2, src: "img2.png", width: 844, height: 640, alt: "some alt text" },
  { key: 3, src: "img3.png", width: 475, height: 630, alt: "some alt text" },
  { key: 4, src: "img4.png", width: 456, height: 630, alt: "some alt text" },
  { key: 5, src: "img5.png", width: 476, height: 630, alt: "some alt text" },
  { key: 6, src: "img6.png", width: 473, height: 537, alt: "some alt text" },
  { key: 7, src: "img7.png", width: 951, height: 537, alt: "some alt text" },
];

const photos = environmentPhotos.map((img) => {
  return {
    ...img,
    src: url + img.src,
  };
});

export default photos;
