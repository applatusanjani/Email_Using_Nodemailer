const nodemailer = require('nodemailer');

const sendMail = async (data) => {
    // console.log("props data ===================================",data);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'applatus.anjani@gmail.com',
      pass: '' //app password
    }
  });

  for (let handleData of data) {
    console.log("db data emailAddresses ========########################=====",handleData);
    var mailOptions = {
      from: 'applatus.anjani@gmail.com',
      to: `created by Anjani ${handleData.id}`,
      subject: 'New Connection Established',
      text: `${handleData.data} `
    };

    try {
      const info = await transporter.sendMail(mailOptions);
    //   console.log('Email sent to ' + email + ':', info.response);
    // console.log('Email sent to ');

    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
};

module.exports = {sendMail};
