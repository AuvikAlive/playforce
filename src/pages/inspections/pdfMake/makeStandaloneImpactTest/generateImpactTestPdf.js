import { makeImpactTestDocDefinition } from './makeImpactTestDocDefinition'
import { pdfMake } from '../pdfMakeWithFonts'

export const generateImpactTestPdf = async (...args) => {
  const docDefinition = await makeImpactTestDocDefinition(...args)

  return pdfMake.createPdf(docDefinition)
}
