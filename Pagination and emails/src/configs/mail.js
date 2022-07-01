const nodemailer =require("nodemailer")

module.exports=nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
    user: "0d50e38aafe321",
    pass: "3572b3bc593ea7",
    },
  });