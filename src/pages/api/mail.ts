//TODO: Implement blacklist & check

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import axios from "axios";
import { prettyPrint } from "@util";
import { EmailConfig } from "@util/Config";

type Body = {
  captcha: string;
  contactName: string;
  contactEmail: string;
  contactSubject: string;
  contactMessage: string;
};

const servermail = axios.create();

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
        host: EmailConfig.host,
        port: EmailConfig.port,
        auth: {
          user: EmailConfig.from.address,
          pass: EmailConfig.from.password,
        },
      });

      const info = await transporter.sendMail({
        from: `"${EmailConfig.from.name}" <${EmailConfig.from.address}>`,
        to: `"${EmailConfig.to.name}" <${EmailConfig.to.address}>`,
        cc: `"${body.contactName}" <${body.contactEmail}>`,
        subject: `${body.contactSubject}`,
        html: `${body.contactMessage}`,
        text: `${body.contactMessage}`,
      });

      console.log(info);

      return {
        responseCode: 200,
        responseData: {
          title: "Message Sent!",
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

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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
export default handler;
