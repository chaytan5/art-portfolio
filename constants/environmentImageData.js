const url = "/environment-images/";

const environmentPhotos = [
  { key: 1, src: "img1.png", width: 975, height: 568, alt: "Image 1" },
  { key: 2, src: "img2.png", width: 452, height: 271, alt: "some alt text" },
  { key: 3, src: "img3.png", width: 452, height: 271, alt: "some alt text" },
  { key: 4, src: "img4.png", width: 340, height: 242, alt: "some alt text" },
  { key: 5, src: "img5.png", width: 306, height: 242, alt: "some alt text" },
  { key: 6, src: "img6.png", width: 318, height: 242, alt: "some alt text" },
  { key: 7, src: "img7.png", width: 422, height: 242, alt: "some alt text" },
  { key: 8, src: "img8.png", width: 340, height: 280, alt: "some alt text" },
  { key: 9, src: "img9.png", width: 407, height: 280, alt: "some alt text" },
  { key: 10, src: "img10.png", width: 409, height: 280, alt: "some alt text" },
  { key: 11, src: "img11.png", width: 236, height: 280, alt: "some alt text" },
  { key: 12, src: "img12.png", width: 450, height: 250, alt: "some alt text" },
  { key: 13, src: "img13.png", width: 450, height: 265, alt: "some alt text" },
  { key: 14, src: "img14.png", width: 973, height: 529, alt: "some alt text" },
  { key: 15, src: "img15.png", width: 620, height: 280, alt: "some alt text" },
  { key: 16, src: "img16.png", width: 390, height: 280, alt: "some alt text" },
  { key: 17, src: "img17.png", width: 401, height: 280, alt: "some alt text" },
  { key: 18, src: "img18.png", width: 338, height: 257, alt: "some alt text" },
  { key: 19, src: "img19.png", width: 349, height: 257, alt: "some alt text" },
  { key: 20, src: "img20.png", width: 339, height: 257, alt: "some alt text" },
  { key: 21, src: "img21.png", width: 372, height: 257, alt: "some alt text" },
  { key: 22, src: "img22.png", width: 483, height: 265, alt: "some alt text" },
  { key: 23, src: "img23.png", width: 361, height: 265, alt: "some alt text" },
  { key: 24, src: "img24.png", width: 327, height: 265, alt: "some alt text" },
  { key: 25, src: "img25.png", width: 263, height: 265, alt: "some alt text" },
  { key: 26, src: "img26.png", width: 483, height: 240, alt: "some alt text" },
  { key: 27, src: "img27.png", width: 427, height: 240, alt: "some alt text" },
  { key: 28, src: "img28.png", width: 500, height: 240, alt: "some alt text" },
  { key: 29, src: "img29.png", width: 1440, height: 490, alt: "some alt text" },
  { key: 30, src: "img30.png", width: 919, height: 693, alt: "some alt text" },
  { key: 31, src: "img31.png", width: 499, height: 329, alt: "some alt text" },
  { key: 32, src: "img32.png", width: 499, height: 350, alt: "some alt text" },
  { key: 33, src: "img33.png", width: 1091, height: 355, alt: "some alt text" },
];

const photos = environmentPhotos.map((img) => {
  return {
    ...img,
    src: url + img.src,
  };
});

export default photos;
