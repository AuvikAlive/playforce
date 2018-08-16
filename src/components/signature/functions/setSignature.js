import { centerImage } from './centerImage'

export const setSignature = component => uploadedImage => {
  const { signature, image } = component.props

  if (uploadedImage || image) {
    centerImage(uploadedImage || image, component)
  } else {
    component.mySignature.fromDataURL(signature)
  }

  // component.mySignature.fromDataURL(uploadedImage || image || signature)
}
