export const getImagesCopy = images =>
  images &&
  images.map(({ image, imageNaturalAspectRatio }) =>
    Object.assign({}, { image, imageNaturalAspectRatio })
  )
