import { Parser } from 'json2csv'

export const exportCSV = (fields, data, fileName) => {
  const json2csvParser = new Parser({ fields })
  const csv = json2csvParser.parse(data)
  const a = document.createElement('a')

  a.href = URL.createObjectURL(
    new Blob([csv], {
      type: 'text/csv;encoding:utf-8',
    })
  )
  a.setAttribute('download', `${fileName}.csv`)
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
