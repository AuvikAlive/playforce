export function onEventInputChange(name) {
  return event =>
    this.setState({
      [name]: event.target.value,
    })
}
