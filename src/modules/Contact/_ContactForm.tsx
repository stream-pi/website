import { FC, useRef, useState } from "react";
import { sKey, validSubjects, ContactFormMethods, FormInputs } from "./Helper";
import { sendEmail } from "@modules/API/services";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { MyFormControl, MyFormLabel } from "./_MyFormControl";
import ResponseMessage from "./_ResponseMessage";

const ContactForm: FC = () => {
  /** more controllable than the react hook form variables */
  const [disabled, setDisabled] = useState(false);
  /** used to control the captcha */
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = ContactFormMethods({
    contactName: "",
    contactEmail: "",
    contactSubject: "Press",
    contactMessage: "",
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
        <ResponseMessage
          title={res.data.title}
          long_msg={res.data.long_msg}
          icon={<FontAwesomeIcon icon={["fas", "check-circle"]} />}
        />,
        { onClose: () => setDisabled(false) }
      );
    } catch (error) {
      if (error.response /* response error */) {
        toast.error(
          <ResponseMessage
            title={error.response.data.title}
            long_msg={error.response.data.long_msg}
            icon={<FontAwesomeIcon icon={["fas", "exclamation-circle"]} />}
          />,
          { onClose: () => setDisabled(false) }
        );
      } else if (error.request /* request error */) {
        toast.error(
          <ResponseMessage
            title="Request Error"
            long_msg={error.message}
            icon={<FontAwesomeIcon icon={["fas", "exclamation-circle"]} />}
          />,
          { onClose: () => setDisabled(false) }
        );
      } else {
        toast.error(
          <ResponseMessage
            title="Error"
            long_msg={error.message}
            icon={<FontAwesomeIcon icon={["fas", "exclamation-circle"]} />}
          />,
          { onClose: () => setDisabled(false) }
        );
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
            <Form.Group as={Col} md="6" controlId="ContactNameInput">
              <MyFormLabel label="Name" IcoPre="fas" IcoName="user" />
              <MyFormControl
                placeholder="Your Name"
                isInvalid={!!errors.contactName}
                errorText={errors.contactName?.message}
                {...register("contactName")}
                disabled={disabled}
              />
            </Form.Group>

            {/* Email */}
            <Form.Group as={Col} md="6" controlId="ContactEmailInput">
              <MyFormLabel label="Email" IcoPre="fas" IcoName="envelope" />
              <MyFormControl
                placeholder="Your Email Address"
                isInvalid={!!errors.contactEmail}
                errorText={errors.contactEmail?.message}
                {...register("contactEmail")}
                disabled={disabled}
              />
            </Form.Group>
          </Form.Row>

          {/* Subject */}
          <Form.Row>
            <Form.Group as={Col} controlId="ContactSubjectSelect">
              <MyFormLabel
                label="Subject"
                IcoPre="fas"
                IcoName="question-circle"
                subtext="(Select One)"
              />
              <MyFormControl
                isInvalid={!!errors.contactSubject}
                errorText={errors.contactSubject?.message}
                {...register("contactSubject")}
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
            <Form.Group as={Col} controlId="ContactMessageInput">
              <MyFormLabel label="Message" IcoPre="fas" IcoName="comment" />
              <MyFormControl
                placeholder="Your Message"
                isInvalid={!!errors.contactMessage}
                errorText={errors.contactMessage?.message}
                {...register("contactMessage")}
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
