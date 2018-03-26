export const objectToArrayWithId = object => {
  let array = []

  for (const property in object) {
    object[property] && array.push({ id: property, ...object[property] })
  }

  return array
}
