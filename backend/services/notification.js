const nodemailer = require('nodemailer');
const { EMAIL_USERNAME, EMAIL_PASSWORD } = require('../config/config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USERNAME,
    pass: EMAIL_PASSWORD,
  },
});

function sendNotificationEmail(to, subject, text, html) {
  const mailOptions = {
    from: EMAIL_USERNAME,
    to,
    subject,
    text,
    html,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
}

module.exports = { sendNotificationEmail };