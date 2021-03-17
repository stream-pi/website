export const EmailConfig = {
  host: "smtp.office365.com",
  port: 587,
  from: {
    address: "noreply@stream-pi.com",
    password: process.env.EMAIL_PASS,
    name: "StreamPi Noreply",
  },
  to: {
    address: "contact@stream-pi.com",
    name: "StreamPi Contact",
  },
};
