export const getResult = (hic, hicDuration, gmax) => {
  return hic &&
    Number(hic) <= 1000 &&
    hicDuration &&
    Number(hicDuration) > 3 &&
    gmax &&
    Number(gmax) <= 200
    ? 'Satisfactory'
    : 'Not Satisfactory'
}
