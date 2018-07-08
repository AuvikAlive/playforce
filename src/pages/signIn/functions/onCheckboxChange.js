export const onCheckboxChange = component => event => {
  const checked = event.target.checked

  component.setState({ checked })
}
