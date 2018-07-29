export const getPrevSrc = (imageArrayLength, images, photoIndex) =>
  imageArrayLength === 1
    ? null
    : images[(photoIndex + imageArrayLength - 1) % imageArrayLength]
