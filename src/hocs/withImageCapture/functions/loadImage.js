export const loadImage = file => {
  const img = document.createElement('img')

  img.src = URL.createObjectURL(file)

  return new Promise(resolve => {
    img.onload = () => resolve(img)
  })
}
