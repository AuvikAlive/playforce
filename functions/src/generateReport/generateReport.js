import express from 'express'
import cors from 'cors'
import { makePdf } from './makePdf'
import * as functions from 'firebase-functions'
const router = express.Router()

router.post('/', (request, response) => {
  makePdf(request.body, data => {
    response.setHeader('Content-disposition', 'attachment; filename=report.pdf')
    response.setHeader('Content-Type', 'application/pdf')
    response.send(data)
  })
})

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())
app.use('/', router)

export const generateReport = functions.https.onRequest((request, response) => {
  if (!request.path) {
    request.url = `/${request.url}`
  }
  return app(request, response)
})
