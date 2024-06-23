const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1) Create transporter
  // const transporter = nodemailer.createTransport({
  //   service: 'Gmail',
  //   host: process.env.EMAIL_HOST,
  //   port: process.env.USER_EMAIL_PORT,
  //   auth: {
  //     user: process.env.USER_EMAIL,
  //     pass: process.env.USER_PASSWORD
  //   }
  // });

  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'c2d42fec99f6cd',
      pass: '6d83ee19e95ce4'
    }
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Sarvar Sultanov (Trip List)',
    to: options.email,
    subject: options.subject,
    text: options.message
    // html
  };

  // 3) Send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
