export const onSelectChange = component => event => {
  const { value } = event.target
  const { setInspectionType } = component.props

  setInspectionType(value)
  component.setState({ inspectionType: value })
}
