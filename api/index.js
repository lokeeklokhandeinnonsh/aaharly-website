import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS properly
app.use(cors({
  origin: ["http://localhost:5173", "https://aaharly.com", "https://www.aaharly.com"],
  credentials: true
}));

// Ensure body parsing works
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact Route
app.post("/api/v1/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    console.log("Received contact form submission:", { name, email, subject, message });

    // Mail logic
    // Implementation requires SMTP credentials. 
    // Ensuring basic functionality even without credentials for connection testing.
    
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: "contact@aaharly.com", // verified receiver
        subject: `${subject} from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${req.body.phone}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${req.body.phone}</p>
               <p><strong>Message:</strong><br/>${message}</p>`,
      });
      console.log("Email sent successfully.");
    } else {
      console.warn("SMTP credentials not found (SMTP_HOST, SMTP_USER, SMTP_PASS). Email sending skipped.");
    }

    res.status(200).json({ success: true, message: "Email sent" });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Export the Express API for Vercel
export default app;

// Only listen when running locally (not in Vercel environment)
if (!process.env.VERCEL) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}
