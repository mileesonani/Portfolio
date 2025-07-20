import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail", // or use another email service
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // Your email password or app password
            },
        });

        try {
            await transporter.sendMail({
                from: email,
                to: process.env.EMAIL_USER, // Your email to receive messages
                subject: `New message from ${name}`,
                text: message,
            });
            res.status(200).json({ message: "Email sent successfully!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to send email." });
        }
    } else {
        res.status(405).json({ message: "Method not allowed." });
    }
}
