export const clearSubscriptions = component => async () => {
  const { unsubscribers } = component.state
  const resolvedUnsubscribers = await Promise.all(unsubscribers)

  resolvedUnsubscribers.forEach(unsubscribe => unsubscribe())

  component.setState({ unsubscribers: [] })
}
