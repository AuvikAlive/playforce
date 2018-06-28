import { makeDocDefinition } from './makeDocDefinition'
import vfsFonts from './vfs_fonts'
import pdfMake from 'pdfmake/build/pdfmake.min'

const { vfs } = vfsFonts.pdfMake
pdfMake.vfs = vfs

pdfMake.fonts = {
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf',
  },
  Oswald: {
    normal: 'Oswald-Regular.ttf',
    bold: 'Oswald-Bold.ttf',
    italics: 'Oswald-Regular.ttf',
    bolditalics: 'Oswald-Bold.ttf',
  },
}

export const generatePdf = async (inspection, certificate) => {
  // const vfsFonts = await import('./vfs_fonts')
  // const pdfMake = await import('pdfmake/build/pdfmake.min')

  const docDefinition = await makeDocDefinition(inspection, certificate)

  return pdfMake.createPdf(docDefinition)
}
