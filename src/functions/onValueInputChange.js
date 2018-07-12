export function onValueInputChange(name) {
  return value =>
    this.setState({
      [name]: value,
    })
}
