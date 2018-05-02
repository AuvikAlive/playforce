export function onInputChange(name) {
  return event =>
    this.setState({
      [name]: event.target.value,
    })
}
