const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const { makePdf } = require('./makePdf')

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

exports.generateReport = functions.https.onRequest((request, response) => {
  if (!request.path) {
    request.url = `/${request.url}`
  }
  return app(request, response)
})
