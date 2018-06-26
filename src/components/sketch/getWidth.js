export const getWidth = className => {
  const { width } = document.querySelector(className).getBoundingClientRect()

  return width
}
