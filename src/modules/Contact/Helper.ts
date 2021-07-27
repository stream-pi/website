import * as yup from "yup";
import type { IconObj } from "@util/Types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export type FormInputs = {
  contactName: string;
  contactEmail: string;
  contactSubject: string;
  contactMessage: string;
};

export type LabelProps = IconObj & {
  label: string;
  subtext?: string;
};

// const regex = /(((http|https|ftp|ftps)\:\/\/)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?)/gm
export const regex =
  /(((http|https|ftp|ftps|sftp):\/\/)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,3}(\/\S*)?)/i;
// export const sKey = "6LeW0r0UAAAAAKlB50lc_4pFxwDWDMBhXPrz5lKU"; // * Checkbox
export const sKey = "6LfbkKwbAAAAABZ-i0bblRuzm9dINAODj_Jk82BY"; // * Badge
export const validSubjects = [
  "Press",
  "Feedback",
  "Feature Request",
  "Contributing",
  "Other",
];

export const schema = yup.object().shape({
  contactName: yup.string().required("Name is a required field"),
  contactEmail: yup
    .string()
    .default("")
    .email("Value must be a valid email")
    .test(
      "from-streampi",
      "Emails can not come from stream-pi",
      (val) => /@stream-pi\.[A-Z0-9]+/i.test(val) === false
    )
    .required("Email is a required field"),
  contactSubject: yup
    .string()
    .oneOf(validSubjects)
    .required("Subject is a required field"),
  contactMessage: yup
    .string()
    .default("")
    .test(
      "has-link",
      "Email cannot contain any links",
      (val) => regex.test(val) === false
    )
    .required("Message is a required field"),
});

export const ContactFormMethods = (initialValues: FormInputs) => {
  return useForm<FormInputs>({
    mode: "onTouched",
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
};
