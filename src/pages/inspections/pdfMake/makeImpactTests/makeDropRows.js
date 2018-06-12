const red = '#ff0000'
const green = '#008000'

export const makeDropRows = dropTests => {
  const rows = dropTests.map(
    ({ id, location, dropHeight, hic, hicDuration, gmax, result }) => [
      `00${id}`,
      location,
      dropHeight,
      {
        text: hic,
        ...(hic > 1000 && { color: red }),
      },
      {
        text: hicDuration,
        ...(hicDuration < 3 && { color: red }),
      },
      {
        text: gmax,
        ...(gmax > 200 && { color: red }),
      },
      {
        text: result,
        ...(result === 'Satisfactory' ? { color: green } : { color: red }),
      },
    ]
  )

  return rows
}
