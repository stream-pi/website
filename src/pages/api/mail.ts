//TODO: Implement blacklist & check

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { prettyPrint } from "@util";
import { EmailConfig } from "@util/Config";
import { validate } from "@modules/API/captcha";

type Body = {
  captcha: string | null | undefined;
  contactName: string;
  contactEmail: string;
  contactSubject: string;
  contactMessage: string;
};

const sendMailAttempt = async (body: Body) => {
  const isHuman = await validate(body.captcha);

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
