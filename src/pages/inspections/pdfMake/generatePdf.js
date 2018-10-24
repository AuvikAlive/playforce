import { makeDocDefinition } from './makeDocDefinition'
import { pdfMake } from './pdfMakeWithFonts'

export const generatePdf = async (...args) => {
  const docDefinition = await makeDocDefinition(...args)

  return pdfMake.createPdf(docDefinition)
}
