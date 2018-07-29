export const getNextSrc = (imageArrayLength, images, photoIndex) =>
  imageArrayLength === 1 ? null : images[(photoIndex + 1) % imageArrayLength]
