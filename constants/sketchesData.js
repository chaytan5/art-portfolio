const url = "/sketches-highres/";

const environmentPhotos = [
  { key: 1, src: "img1.png", width: 1035, height: 597, alt: "Some alt text" },
  { key: 2, src: "img2.png", width: 397, height: 208, alt: "some alt text" },
  { key: 3, src: "img3.png", width: 397, height: 384, alt: "some alt text" },
  { key: 4, src: "img4.png", width: 752, height: 538, alt: "some alt text" },
  { key: 5, src: "img5.png", width: 383, height: 538, alt: "some alt text" },
  { key: 6, src: "img6.png", width: 294, height: 538, alt: "some alt text" },
  { key: 7, src: "img7.png", width: 600, height: 514, alt: "some alt text" },
  { key: 8, src: "img8.png", width: 305, height: 514, alt: "Some alt text" },
  { key: 9, src: "img9.png", width: 522, height: 514, alt: "some alt text" },
  { key: 10, src: "img10.png", width: 898, height: 532, alt: "some alt text" },
  { key: 11, src: "img11.png", width: 534, height: 532, alt: "some alt text" },
  { key: 12, src: "img12.png", width: 726, height: 529, alt: "some alt text" },
  { key: 13, src: "img13.png", width: 710, height: 529, alt: "some alt text" },
  { key: 14, src: "img14.png", width: 728, height: 514, alt: "some alt text" },
  { key: 15, src: "img15.png", width: 706, height: 514, alt: "some alt text" },
  { key: 16, src: "img16.png", width: 1440, height: 844, alt: "some alt text" },
  { key: 17, src: "img17.png", width: 1440, height: 621, alt: "some alt text" },
  { key: 18, src: "img18.png", width: 1440, height: 796, alt: "some alt text" },
];

const photos = environmentPhotos.map((img) => {
  return {
    ...img,
    src: url + img.src,
  };
});

export default photos;
