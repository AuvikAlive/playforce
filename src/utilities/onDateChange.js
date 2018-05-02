export function onDateChange(name) {
  return date =>
    this.setState({
      [name]: date,
    })
}
