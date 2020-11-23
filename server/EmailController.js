
const user = "spammerhw3@outlook.com"
const password = "210219Rik"
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

exports.send = async (text, emails) =>  {
  const nodemailer = require("nodemailer");
  let transporter = nodemailer.createTransport({
    service: 'outlook',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: user,
      pass: password,
    },
  });


  return await transporter.sendMail({
    from: "<spammerhw3@outlook.com>",
    to: emails,
    text: text,
  });

}
