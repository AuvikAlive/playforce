import pdfMakePrinter from 'pdfmake/src/printer'
import { fontDescriptors } from './fontDescriptors'
import { makeDocDefinition } from './makeDocDefinition'

export const makePdf = async (requestBody, callback) => {
  try {
    const printer = new pdfMakePrinter(fontDescriptors)
    const docDefinition = await makeDocDefinition(requestBody)
    const doc = printer.createPdfKitDocument(docDefinition)

    let chunks = []

    doc.on('data', chunk => {
      chunks.push(chunk)
    })

    doc.on('end', () => {
      const result = Buffer.concat(chunks)
      // const base64Pdf =
      //   'data:application/pdf;base64,' + result.toString('base64')

      callback(result)
    })

    doc.end()
  } catch (error) {
    console.log(error)
    // throw error
  }
}
