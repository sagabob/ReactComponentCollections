function filterImages(images) {
  return images.map((currImage) => ({
    image: currImage.urls.full,
  }));
}

export default filterImages;
