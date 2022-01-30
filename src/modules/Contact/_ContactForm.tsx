import { useRef, useState } from "react";
import {
  sKey,
  validSubjects,
  useContactForm,
  showResponseToast,
  FormInputs,
} from "./Helper";
import { sendEmail } from "@modules/API/services";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import FormGroup from "react-bootstrap/FormGroup";
import Row from "react-bootstrap/Row";
import Button from "@components/Button";
import { MyFormControl, MyFormLabel, MyFormSelect } from "./_MyFormControl";

const ContactForm = () => {
  /** more controllable than the react hook form variables */
  const [disabled, setDisabled] = useState(false);
  /** used to control the captcha */
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useContactForm({
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
      showResponseToast({
        type: "success",
        title: res.data.title,
        msg: res.data.long_msg,
        onClose: () => setDisabled(false),
        icon: <FontAwesomeIcon icon={["fas", "check-circle"]} />,
      });
    } catch (error) {
      if (error.response /* response error */) {
        showResponseToast({
          type: "error",
          title: error.response.data.title,
          msg: error.response.data.long_msg,
          onClose: () => setDisabled(false),
          icon: <FontAwesomeIcon icon={["fas", "exclamation-circle"]} />,
        });
      } else if (error.request /* request error */) {
        showResponseToast({
          type: "error",
          title: "Request Error",
          msg: error.message,
          onClose: () => setDisabled(false),
          icon: <FontAwesomeIcon icon={["fas", "exclamation-circle"]} />,
        });
      } else {
        showResponseToast({
          type: "error",
          title: "Error",
          msg: error.message,
          onClose: () => setDisabled(false),
          icon: <FontAwesomeIcon icon={["fas", "exclamation-circle"]} />,
        });
      }
    } finally {
      recaptchaRef.current?.reset();
      reset();
    }
  };

  return (
    <Card className="animate__animated animate__fadeIn bg-card">
      <Card.Body>
        <form noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          {/* Name & Email */}
          <Row
            xs={{ cols: 1 }}
            md={{ cols: 2 }}
            as="fieldset"
            disabled={disabled}
          >
            {/* Name */}
            <FormGroup
              as={Col}
              className="position-relative mb-3"
              controlId="ContactNameInput"
            >
              <MyFormLabel label="Name" IcoPre="fas" IcoName="user" />
              <MyFormControl
                placeholder="Your Name"
                isInvalid={!!errors.contactName}
                errorText={errors.contactName?.message}
                {...register("contactName")}
              />
            </FormGroup>

            {/* Email */}
            <FormGroup
              as={Col}
              className="position-relative mb-3"
              controlId="ContactEmailInput"
            >
              <MyFormLabel label="Email" IcoPre="fas" IcoName="envelope" />
              <MyFormControl
                placeholder="Your Email Address"
                isInvalid={!!errors.contactEmail}
                errorText={errors.contactEmail?.message}
                {...register("contactEmail")}
              />
            </FormGroup>
          </Row>

          {/* Subject */}
          <Row as="fieldset" disabled={disabled}>
            <FormGroup
              as={Col}
              className="position-relative mb-3"
              controlId="ContactSubjectSelect"
            >
              <MyFormLabel
                label="Subject"
                IcoPre="fas"
                IcoName="question-circle"
                subtext="(Select One)"
              />
              <MyFormSelect
                isInvalid={!!errors.contactSubject}
                errorText={errors.contactSubject?.message}
                {...register("contactSubject")}
              >
                {validSubjects.map((sub, idx) => (
                  <option key={`option${idx}`} value={sub}>
                    {sub}
                  </option>
                ))}
              </MyFormSelect>
            </FormGroup>
          </Row>

          {/* Message */}
          <Row as="fieldset" disabled={disabled}>
            <FormGroup
              as={Col}
              className="position-relative mb-3"
              controlId="ContactMessageInput"
            >
              <MyFormLabel label="Message" IcoPre="fas" IcoName="comment" />
              <MyFormControl
                placeholder="Your Message"
                isInvalid={!!errors.contactMessage}
                errorText={errors.contactMessage?.message}
                {...register("contactMessage")}
                as="textarea"
                rows={6}
                maxLength={6000}
              />
            </FormGroup>
          </Row>

          {/* Recaptcha - Checkbox */}
          <div className="mt-3" id="rcap">
            <ReCAPTCHA ref={recaptchaRef} sitekey={sKey} />
          </div>

          {/* Button */}
          <Row className="mb-2">
            <FormGroup as={Col} controlId="sendButton">
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
            </FormGroup>
          </Row>
        </form>
      </Card.Body>
    </Card>
  );
};

export default ContactForm;
