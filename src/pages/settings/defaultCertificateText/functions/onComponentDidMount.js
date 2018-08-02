import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'

export const onComponentDidMount = component => {
  const { defaultCertificateText } = component.props
  const title = 'Default Certificate Text'

  onComponentDidMountWithTitleLeftNav(component, title)

  defaultCertificateText && component.setState({ defaultCertificateText })
}
