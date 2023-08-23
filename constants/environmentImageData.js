const url = "/environment-images/";

const environmentPhotos = [
  { key: 1, src: "img1.png", width: 956, height: 392, alt: "some alt text" },
  { key: 1, src: "img2.png", width: 306, height: 188, alt: "some alt text" },
  { key: 1, src: "img3.png", width: 306, height: 188, alt: "some alt text" },
  { key: 1, src: "img4.png", width: 308, height: 219, alt: "some alt text" },
  { key: 1, src: "img5.png", width: 308, height: 219, alt: "some alt text" },
  { key: 1, src: "img6.png", width: 308, height: 219, alt: "some alt text" },
  { key: 1, src: "img7.png", width: 308, height: 219, alt: "some alt text" },
];

function getColSpanEstimate(size) {
  if (size > 500) {
    return 3;
  } else if (size > 420) {
    return 2;
  } else {
    return 1;
  }
}

function getRowSpanEstimate(size) {
  if (size > 280) {
    return 2;
  }

  return 1;
}

const photos = environmentPhotos.map((img) => {
  return {
    ...img,
    src: url + img.src,
    colSpan: getColSpanEstimate(img.width),
    rowSpan: getRowSpanEstimate(img.height),
  };
});

export default photos;
