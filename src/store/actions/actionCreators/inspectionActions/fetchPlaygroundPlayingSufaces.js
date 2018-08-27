export const fetchPlaygroundPlayingSufaces = async ref => {
  const querySnapshot = await ref.collection('playingSurfaces').get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    })
  )

  return items
}
