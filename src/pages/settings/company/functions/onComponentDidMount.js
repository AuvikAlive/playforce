import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'

export const onComponentDidMount = component => {
  const { companyInfo } = component.props
  const title = 'Company Information'

  onComponentDidMountWithTitleLeftNav(component, title)

  if (companyInfo) {
    const { postalAddress, abn, phoneNumber, website } = companyInfo

    component.setState({
      postalAddress,
      abn,
      phoneNumber,
      website,
    })
  }
}
