export const centerImage = (image, component) => {
  var img = new Image()
  img.src = image

  img.onload = () => {
    let canvas = component.mySignature._canvas
    let canvasContext = canvas.getContext('2d')
    let wrh = img.width / img.height
    let newWidth = canvas.width
    let newHeight = newWidth / wrh

    if (newHeight > canvas.height) {
      newHeight = canvas.height
      newWidth = newHeight * wrh
    }
    let xOffset = newWidth < canvas.width ? (canvas.width - newWidth) / 2 : 0
    let yOffset =
      newHeight < canvas.height ? (canvas.height - newHeight) / 2 : 0

    canvasContext.drawImage(img, xOffset, yOffset, newWidth, newHeight)

    const dataURL = canvas.toDataURL()

    component.mySignature.fromDataURL(dataURL)
  }
}
