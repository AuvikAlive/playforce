export const getDataUrlFromBlob = blob => {
  const reader = new FileReader()

  return new Promise((resolve, reject) => {
    reader.onload = () => {
      resolve(reader.result)
    }

    reader.readAsDataURL(blob)
  })
}
