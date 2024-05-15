// emailService.js
import nodemailer from 'nodemailer';

// Create a transporter using your SMTP settings
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587, // Use your SMTP port
  secure: false, // Set to true if using SSL/TLS
  auth: {
    user: 'your_smtp_username',
    pass: 'your_smtp_password',
  },
});

// Function to send email
const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: 'your_email@example.com',
      to,
      subject,
      text,
      html,
    });
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;
