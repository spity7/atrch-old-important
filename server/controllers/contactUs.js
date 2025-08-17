const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const nodemailer = require("nodemailer");

const contactUs = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail App Password
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "th.rider.clan@gmail.com",
    subject: "New Contact Form Submission",
    text: `You have a new contact form submission:
          \nName: ${name}
          \nEmail: ${email}
          \nPhone: ${phone}
          \nSubject: ${subject}
          \nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
};

module.exports = {
  contactUs,
};
