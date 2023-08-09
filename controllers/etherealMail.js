// using ethereal 

const nodemailer = require("nodemailer");  
const sendMail=async(req,res)=>{

    let testAccount=await nodemailer.createTestAccount();
    const transporter= nodemailer.createTransport({
        host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'anita.ortiz32@ethereal.email',
        pass: 'KqdJysp5VYtpTaHu11'
        }
    })

    const info = await transporter.sendMail({
        from: '"testemail@gmail.com" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "your policy is expiring soon", // Subject line
        text: "renew tour policy within 10 days", // plain text body
        // html: "<b>Hello world</b>", // html body
      });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
}

module.exports=sendMail;