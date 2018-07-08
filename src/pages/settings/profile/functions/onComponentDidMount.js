import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'

export const onComponentDidMount = component => {
  const {
    setCapturedImage,
    profile: {
      displayName,
      image,
      title = '',
      company = '',
      mobile = '',
      signature,
    },
  } = component.props
  const navTitle = 'Profile'

  onComponentDidMountWithTitleLeftNav(component, navTitle)

  component.setState({ displayName, image, title, company, mobile })
  setCapturedImage(image)
  signature && component.signature.setSignature(signature)
}
