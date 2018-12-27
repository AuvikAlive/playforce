"use strict";

const functions = require('firebase-functions');

const nodemailer = require('nodemailer');

const cors = require('cors')({
  origin: true
});

const {
  auth
} = require('./auth');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth
});
exports.sendEmail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const {
      filename,
      dataUrl,
      email
    } = JSON.parse(request.body);
    const mailOptions = {
      from: auth.user,
      to: email,
      subject: 'Inspection report',
      html: '<p>Please find the inspection report attached.</p>',
      attachments: [{
        filename: `${filename}.pdf`,
        path: dataUrl
      }]
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        response.send(err);
      } else {
        response.send(info);
      }
    });
  });
});