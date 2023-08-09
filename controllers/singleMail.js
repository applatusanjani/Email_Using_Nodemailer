// send single mail at a time 

var nodemailer = require('nodemailer');
const sendMail=async(req,res)=>{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'applatus.anjani@gmail.com',
    pass: '' //app password
  }
});

var mailOptions = {
  from: 'applatus.anjani@gmail.com',
  to: 'anjanis9081@gmail.com',
  subject: 'your policy is expiring soon....',
  text: `================= policy is expiring in 5 days==================`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}

module.exports=sendMail;
  