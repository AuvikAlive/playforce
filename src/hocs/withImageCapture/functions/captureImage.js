export const captureImage = component => ({
  width,
  height,
  multiple,
  returnBlob,
} = {}) => {
  component.setState(
    {
      ...(width && { width }),
      ...(height && { height }),
      ...(multiple && { multiple }),
      ...(returnBlob && { returnBlob }),
    },
    () => component.fileInput.click()
  )
}
