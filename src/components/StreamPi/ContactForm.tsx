import React, { useRef, forwardRef, useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReCAPTCHA from "react-google-recaptcha";
import {
  sKey,
  LabelProps,
  validSubjects,
  ContactFormMethods,
  FormInputs,
} from "@helpers/ContactHelper";
import { sendEmail } from "@util/API";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

type Props = React.ComponentProps<typeof Form.Control> & {
  errorText: string;
};

const MyFormControl = forwardRef<any, Props>(({ errorText, ...props }, ref) => {
  return (
    <>
      <Form.Control ref={ref} {...props} />
      <Form.Control.Feedback type="invalid" tooltip>
        {errorText}
      </Form.Control.Feedback>
    </>
  );
});
MyFormControl.displayName = "MyFormControl";

const MyFormLabel = forwardRef<HTMLLabelElement, LabelProps>(
  ({ label, IcoName, IcoPre, subtext }, ref) => {
    return (
      <Form.Label ref={ref}>
        <h5>
          {label} <FontAwesomeIcon icon={[IcoPre, IcoName]} />
        </h5>
        {subtext ? ` ${subtext}` : ""}
      </Form.Label>
    );
  }
);
MyFormLabel.displayName = "MyFormLabel";

const AlertMessage: React.FC<{ title: string; long_msg: string }> = ({
  title,
  long_msg,
}) => {
  return (
    <>
      <h4>{title}</h4>
      {long_msg !== "NONE" && <p className="m-0">{long_msg}</p>}
    </>
  );
};

const ContactForm: React.FC = () => {
  /** more controllable than the react hook form variables */
  const [disabled, setDisabled] = useState(false);
  /** used to control  the captcha */
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = ContactFormMethods({
    name: "",
    email: "",
    subject: "Press",
    message: "",
  });

  /**
   * function that fires when the form submits.
   *
   * attempts to send the mail and will show a toast depending on the success of that attempt.
   *
   * @param data form data, excluding the captcha
   */
  const onSubmit = async (data: FormInputs) => {
    setDisabled(true);
    const captcha = recaptchaRef.current?.getValue();
    const mail = { ...data, captcha };

    try {
      const res = await sendEmail(mail);
      toast.success(
        <AlertMessage title={res.data.title} long_msg={res.data.long_msg} />,
        { onClose: () => setDisabled(false) }
      );
    } catch (error) {
      if (error.response /* response error */) {
        toast.error(
          <AlertMessage
            title={error.response.data.title}
            long_msg={error.response.data.long_msg}
          />,
          { onClose: () => setDisabled(false) }
        );
      } else if (error.request /* request error */) {
        toast.error(
          <AlertMessage title="Request Error" long_msg={error.message} />,
          { onClose: () => setDisabled(false) }
        );
      } else {
        toast.error(<AlertMessage title="Error" long_msg={error.message} />, {
          onClose: () => setDisabled(false),
        });
      }
    } finally {
      recaptchaRef.current?.reset();
      reset();
    }
  };

  return (
    <Card className="animate__animated animate__fadeIn bg-card">
      <Card.Body className="pb-0 pt-2">
        <Form noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          {/* Name & Email */}
          <Form.Row className="pt-2">
            {/* Name */}
            <Form.Group as={Col} md="6" controlId="NameInput">
              <MyFormLabel label="Name" IcoPre="fas" IcoName="user" />
              <MyFormControl
                placeholder="Your Name"
                isInvalid={!!errors.name}
                errorText={errors.name?.message}
                {...register("name")}
                disabled={disabled}
              />
            </Form.Group>

            {/* Email */}
            <Form.Group as={Col} md="6" controlId="EmailInput">
              <MyFormLabel label="Email" IcoPre="fas" IcoName="envelope" />
              <MyFormControl
                placeholder="Your Email Address"
                isInvalid={!!errors.email}
                errorText={errors.email?.message}
                {...register("email")}
                disabled={disabled}
              />
            </Form.Group>
          </Form.Row>

          {/* Subject */}
          <Form.Row>
            <Form.Group as={Col} controlId="MessageSelect">
              <MyFormLabel
                label="Subject"
                IcoPre="fas"
                IcoName="question-circle"
                subtext="(Select One)"
              />
              <MyFormControl
                isInvalid={!!errors.subject}
                errorText={errors.subject?.message}
                {...register("subject")}
                disabled={disabled}
                as="select"
                custom
              >
                {validSubjects.map((sub, idx) => (
                  <option key={`option${idx}`} value={sub}>
                    {sub}
                  </option>
                ))}
              </MyFormControl>
            </Form.Group>
          </Form.Row>

          {/* Message */}
          <Form.Row>
            <Form.Group as={Col} controlId="MessageInput">
              <MyFormLabel label="Message" IcoPre="fas" IcoName="comment" />
              <MyFormControl
                placeholder="Your Message"
                isInvalid={!!errors.message}
                errorText={errors.message?.message}
                {...register("message")}
                disabled={disabled}
                as="textarea"
                rows={6}
                maxLength={6000}
              />
            </Form.Group>
          </Form.Row>

          {/* Recaptcha */}
          <div className="form-group mt-3" id="rcap">
            <ReCAPTCHA ref={recaptchaRef} sitekey={sKey} />
          </div>

          {/* Button */}
          <Form.Row>
            <Form.Group as={Col} controlId="sendButton">
              <Button
                className="w-100"
                type="submit"
                size="lg"
                variant="dark"
                role="button"
                disabled={disabled}
              >
                Send Mail
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ContactForm;
