require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();
app.use(cors({ 
  origin: [
    "https://thepolyglotlab.com",
    "https://www.thepolyglotlab.com"
  ] 
}));
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ error: 'Missing fields' });

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
        from: `"Polyglot Lab" <${process.env.EMAIL_USER}>`, 
        to: ['yor@thepolyglotlab.com', 'alessandra@thepolyglotlab.com'],
        replyTo: process.env.EMAIL_USER, // this makes "reply" go to the user
        subject: 'New Contact Form Submission',
        text: `Contact Name: ${name}\n\nEmail: ${email}\n\nOriginal Message: \n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Email failed to send' });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));