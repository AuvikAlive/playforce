export const clearSubscriptions = component => () => {
  const { unsubscribers } = component.state

  unsubscribers.forEach(unsubscribe => unsubscribe())

  component.setState({ unsubscribers: [] })
}
