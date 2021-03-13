import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import axios from "axios";
import { prettyPrint } from "@util";

const servermail = axios.create();

type Body = {
  captcha: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

const validateHuman = async (token: string): Promise<boolean> => {
  const secret = process.env.CAPTHCA_SECRET;
  try {
    const response = await servermail.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
    );

    return response.data.success;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const sendMailAttempt = async (body: Body) => {
  const isHuman = await validateHuman(body.captcha);

  if (!isHuman) {
    return {
      responseCode: 400,
      responseData: {
        title: "Bad Captcha",
        long_msg: "Please try again and fill out the captcha this time",
      },
    };
  } else {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "noreply@stream-pi.com",
          pass: process.env.EMAIL_PASS,
        },
      });

      const info = await transporter.sendMail({
        from: '"StreamPi Noreply" <noreply@stream-pi.com>',
        to: '"StreamPi Contact" <contact@stream-pi.com>',
        cc: `"${body.name}" <${body.email}>`,
        subject: `${body.subject}`,
        html: `${body.message}`,
        text: `${body.message}`,
      });

      console.log(info);

      return {
        responseCode: 200,
        responseData: {
          title: "Message Sent!",
          long_msg: "",
        },
      };
    } catch (error) {
      return {
        responseCode: 400,
        responseData: {
          title: "Unable to Send Email",
          long_msg: `${error.message}`,
        },
      };
    }
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "POST") {
    const mailResponse = await sendMailAttempt(req.body);
    res.statusCode = mailResponse.responseCode;

    res.send(prettyPrint(mailResponse.responseData));
  } else {
    res.statusCode = 400;
    res.send(prettyPrint({ Message: "Must be queried as POST req" }));
  }
};
