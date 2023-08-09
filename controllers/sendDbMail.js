// email is sending from db.

const nodemailer = require('nodemailer');

const sendMail = async (customer) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'applatus.anjani@gmail.com',
      pass: '' //app password
    }
  });

  for (const email of customer) {

    var mailOptions = {
      from: 'applatus.anjani@gmail.com',
      to: email,
      subject: 'new connection established',
      text: `=============Email is sending from database to ${email}============================`
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent to ' + email + ':', info.response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
};

module.exports = sendMail;
