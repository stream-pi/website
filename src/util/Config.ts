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

export const MetaData = {
  title: "Stream-Pi",
  description:
    "A robust opensource macro keyboard, the Stream-Pi is a full fledged software designed for the Raspberry Pi, built with JavaFX, and with a want to make better peripherals more accessible.",
  social: {
    twitter: "stream_pi",
  },
};
