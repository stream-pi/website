import * as yup from "yup";
import { IconObj } from "@util/Types";

export type LabelProps = IconObj & {
  label: string;
  subtext?: string;
};

export type AMProps = {
  show: boolean;
  title: string;
  type: string;
  long_msg: string;
  parentFunction: (x: boolean) => any;
};

// const regex = /(((http|https|ftp|ftps)\:\/\/)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?)/gm
export const regex = /(((http|https|ftp|ftps|sftp):\/\/)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,3}(\/\S*)?)/i;
export const sKey = "6LeW0r0UAAAAAKlB50lc_4pFxwDWDMBhXPrz5lKU";
export const validSubjects = [
  "Press",
  "Feedback",
  "Feature Request",
  "Contributing",
  "Other",
];

export const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().oneOf(validSubjects).required(),
  message: yup
    .string()
    .test(
      "has-link",
      "Email cannot contain any links",
      (val) => regex.test(val!) === false
    )
    .required(),
});
