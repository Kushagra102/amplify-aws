import type { PostConfirmationTriggerHandler } from "aws-lambda";
import nodemailer from "nodemailer";

export const handler: PostConfirmationTriggerHandler = async (event) => {
  try {
    const email = event.request.userAttributes["email"];
    const transporter = nodemailer.createTransport({
      // @ts-ignore
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      secureConnection: false,
      auth: {
        user: "geoffreyantoignatius@gmail.com",
        pass: "pqetzsbtlrklhmbu",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    var mailOptions = {
      from: "geoffreyantoignatius@gmail.com",
      to: email,
      subject: "Welcome to XXXXXX!",
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Our Platform</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  width: 100%;
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 10px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              .header {
                  text-align: center;
                  padding: 10px 0;
              }
              .header img {
                  width: 100px;
              }
              .content {
                  margin-top: 20px;
                  line-height: 1.6;
              }
              .content h1 {
                  color: #333333;
              }
              .content p {
                  color: #555555;
              }
              .button {
                  display: inline-block;
                  padding: 10px 20px;
                  margin-top: 20px;
                  color: #ffffff;
                  background-color: #007BFF;
                  text-decoration: none;
                  border-radius: 5px;
              }
              .footer {
                  margin-top: 20px;
                  text-align: center;
                  font-size: 12px;
                  color: #aaaaaa;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <img src="http://localhost:3000/logo.png" alt="Logo">
              </div>
              <div class="content">
                  <h1>Welcome to Our Platform!</h1>
                  <p>Hi,</p>
                  <p>We're excited to have you join our community! Our platform allows you to connect with like-minded individuals, join various communities, and stay updated with the latest announcements.</p>
                  <p>Here's what you can do next:</p>
                  <ul>
                      <li><strong>Join Communities:</strong> Explore and join communities that interest you.</li>
                      <li><strong>View Announcements:</strong> Stay informed with the latest updates and news.</li>
                  </ul>
                  <p>Click the button below to get started:</p>
                  <a href="http://localhost:3000/community" class="button">Get Started</a>
                  <p>We're here to help if you have any questions. Feel free to reply to this email or visit our <a href="http://localhost:3000/support">support page</a>.</p>
                  <p>Welcome aboard!</p>
                  <p>Best regards,<br>The Team</p>
              </div>
              <div class="footer">
                  <p>&copy; 2024 [Your Platform]. All rights reserved.</p>
                  <p>1234 Your Street, Your City, ST 12345</p>
              </div>
          </div>
      </body>
      </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return event;
  } catch (e) {
    return event;
  }
};
