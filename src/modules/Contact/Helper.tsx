import type { ReactNode } from "react";
import { string, object } from "yup";
import type { IconObj } from "@util/Types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TypeOptions, toast } from "react-toastify";

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

type ToastFunction = {
  type: TypeOptions;
  title: string;
  icon: ReactNode;
  onClose: () => void;
  msg?: string;
};

// const regex = /(((http|https|ftp|ftps)\:\/\/)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?)/gm
export const regex =
  /(((http|https|ftp|ftps|sftp):\/\/)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,3}(\/\S*)?)/i;
export const sKey = "6LeW0r0UAAAAAKlB50lc_4pFxwDWDMBhXPrz5lKU";
export const validSubjects = [
  "Press",
  "Feedback",
  "Feature Request",
  "Contributing",
  "Other",
];

export const schema = object().shape({
  contactName: string().required("Name is a required field"),
  contactEmail: string()
    .default("")
    .email("Value must be a valid email")
    .test(
      "from-streampi",
      "Emails can not come from stream-pi",
      (val) => /@stream-pi\.[A-Z0-9]+/i.test(val) === false
    )
    .required("Email is a required field"),
  contactSubject: string()
    .oneOf(validSubjects)
    .required("Subject is a required field"),
  contactMessage: string()
    .default("")
    .test(
      "has-link",
      "Email cannot contain any links",
      (val) => regex.test(val) === false
    )
    .required("Message is a required field"),
});

export const useContactForm = (initialValues: FormInputs) => {
  return useForm<FormInputs>({
    mode: "onTouched",
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
};

export const showResponseToast = ({
  type,
  title,
  icon,
  onClose,
  msg,
}: ToastFunction) => {
  toast(
    <>
      <h4 className="mb-0">
        {icon} {title}
      </h4>
      {msg && <p className="m-0">{msg}</p>}
    </>,
    { onClose, type }
  );
};
