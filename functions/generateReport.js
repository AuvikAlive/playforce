const functions = require('firebase-functions')
const pdfMakePrinter = require('pdfmake/src/printer')
const path = require('path')

const generatePdf = (docDefinition, callback) => {
  try {
    const fontDescriptors = {
      Roboto: {
        normal: './fonts/Roboto/Roboto-Regular.ttf',
        bold: './fonts/Roboto/Roboto-Medium.ttf',
        italics: './fonts/Roboto/Roboto-Italic.ttf',
        bolditalics: './fonts/Roboto/Roboto-MediumItalic.ttf',
      },
      Oswald: {
        normal: './fonts/Oswald/Oswald-Regular.ttf',
        bold: './fonts/Oswald/Oswald-Bold.ttf',
        italics: './fonts/Oswald/Oswald-Regular.ttf',
        bolditalics: './fonts/Oswald/Oswald-Bold.ttf',
      },
    }
    const printer = new pdfMakePrinter(fontDescriptors)
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
  } catch (err) {
    throw err
  }
}

exports.generateReport = functions.https.onRequest((request, response) => {
  const { reportPreferences } = request.body

  const docDefinition = {
    content: [reportPreferences.title.wording],
  }

  generatePdf(docDefinition, data => {
    response.setHeader('Content-Type', 'application/pdf')
    response.send(data)
  })
})