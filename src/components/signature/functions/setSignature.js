export const setSignature = component => uploadedImage => {
  const { signature, image } = component.props

  component.mySignature.fromDataURL(uploadedImage || image || signature)
}
