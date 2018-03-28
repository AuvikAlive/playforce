import vfsFonts from 'pdfmake/build/vfs_fonts'
import pdfMake from 'pdfmake/build/pdfmake.js'
import { docDefinition } from './docDefinition'

const { vfs } = vfsFonts.pdfMake
pdfMake.vfs = vfs

export const generatePdf = () => pdfMake.createPdf(docDefinition)
