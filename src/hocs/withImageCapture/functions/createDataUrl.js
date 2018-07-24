export const createDataUrl = (blob, imageNaturalAspectRatio) => {
  const reader = new FileReader()

  reader.readAsDataURL(blob)

  return new Promise(resolve => {
    reader.addEventListener(
      'load',
      () => {
        resolve({
          image: reader.result,
          imageNaturalAspectRatio,
        })
      },
      false
    )
  })
}
