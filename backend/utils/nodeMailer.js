import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export const sendMail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: `${process.env.ADMIN_EMAIL}`, // sender address
      to: to, // recipient
      subject: subject,
      html: html,
    });
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};