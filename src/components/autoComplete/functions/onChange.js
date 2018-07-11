export const onChange = component => (event, { newValue }) => {
  const { onChange } = component.props

  onChange(newValue)
}
