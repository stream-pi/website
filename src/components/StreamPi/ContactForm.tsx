//TODO: hide form on submit?

import React, { useRef } from "react";
import { toast } from "react-toastify";
import { Formik, Form as FormikForm, FieldHookConfig, useField } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReCAPTCHA from "react-google-recaptcha";
import {
  sKey,
  schema,
  LabelProps,
  validSubjects,
} from "@helpers/ContactHelper";
import { sendEmail } from "@util/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ThemedButton from "@components/ThemedButton";

// My Custom Form Control
type Props = React.ComponentProps<typeof Form.Control> &
  FieldHookConfig<string>;

const FGStyles: React.CSSProperties = { position: "relative" };

const MyFormControl: React.FC<Props> = (props) => {
  const BootstrapStuff = {
    ...(props as React.ComponentProps<typeof Form.Control>),
  };
  const FormikStuff = { ...(props as FieldHookConfig<string>) };
  const [field, meta] = useField(FormikStuff);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <>
      <Form.Control isInvalid={!!errorText} {...field} {...BootstrapStuff} />
      <Form.Control.Feedback type="invalid" tooltip>
        {errorText}
      </Form.Control.Feedback>
    </>
  );
};

// Custom FormControl Label
const FieldLabel: React.FC<LabelProps> = ({
  label,
  IcoPre,
  IcoName,
  subtext,
}) => {
  return (
    <Form.Label>
      <h5>
        {label} <FontAwesomeIcon icon={[IcoPre, IcoName]} />
      </h5>
      {subtext ? ` ${subtext}` : ""}
    </Form.Label>
  );
};

const AlertMessage: React.FC<{ title: string; long_msg: string }> = ({
  title,
  long_msg,
}) => {
  return (
    <>
      <h4>{title}</h4>
      {long_msg !== "NONE" && (
        <p style={{ fontSize: "initial" }} className="m-0">
          {long_msg}
        </p>
      )}
    </>
  );
};

/** The Contact Form Component */
const ContactForm: React.FC = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  return (
    <>
      <Card className="animate__animated animate__fadeIn bg-card">
        <Card.Body className="pb-0 pt-2">
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "Press",
              message: "",
            }}
            validationSchema={schema}
            onSubmit={async (data, { setSubmitting, resetForm }) => {
              toast.dismiss();
              setSubmitting(true);
              const captcha = recaptchaRef.current?.getValue();
              const mail = { ...data, captcha };

              try {
                const res = await sendEmail(mail);
                // console.log(res);
                toast.success(
                  <AlertMessage
                    title={res.data.title}
                    long_msg={res.data.long_msg}
                  />
                );
              } catch (error) {
                if (error.response /* response error */) {
                  toast.error(
                    <AlertMessage
                      title={error.response.data.title}
                      long_msg={error.response.data.long_msg}
                    />
                  );
                } else if (error.request /* request error */) {
                  toast.error(
                    <AlertMessage
                      title={"Request Error"}
                      long_msg={error.message}
                    />
                  );
                } else {
                  toast.error(
                    <AlertMessage title={"Error"} long_msg={error.message} />
                  );
                }
              } finally {
                resetForm();
                recaptchaRef.current?.reset();
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <FormikForm method="post" id="form">
                {/* Name & Email */}
                <Row className="pt-2">
                  {/* Name */}
                  <Col md={6}>
                    <Form.Group style={FGStyles} controlId="NameInput">
                      <FieldLabel label="Name" IcoPre="fas" IcoName="user" />
                      <MyFormControl
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        disabled={isSubmitting}
                      />
                    </Form.Group>
                  </Col>

                  {/* Email */}
                  <Col md={6}>
                    <Form.Group style={FGStyles} controlId="EmailInput">
                      <FieldLabel
                        label="Email"
                        IcoPre="fas"
                        IcoName="envelope"
                      />
                      <MyFormControl
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        disabled={isSubmitting}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Subject */}
                <Form.Group controlId="MessageSelect" style={FGStyles}>
                  <FieldLabel
                    label="Subject"
                    IcoPre="fas"
                    IcoName="question-circle"
                    subtext="(Select One)"
                  />
                  <MyFormControl
                    as="select"
                    name="subject"
                    disabled={isSubmitting}
                    custom
                  >
                    {validSubjects.map((sub, idx) => (
                      <option key={`option${idx}`} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </MyFormControl>
                </Form.Group>

                {/* Message */}
                <Form.Group style={FGStyles} controlId="MessageInput">
                  <FieldLabel label="Message" IcoPre="fas" IcoName="comment" />
                  <MyFormControl
                    name="message"
                    as="textarea"
                    rows={6}
                    placeholder="Your Message"
                    disabled={isSubmitting}
                    maxLength={6000}
                  />
                </Form.Group>

                {/* Recaptcha */}
                <div className="form-group" id="rcap">
                  <ReCAPTCHA ref={recaptchaRef} sitekey={sKey} />
                </div>

                {/* Button */}
                <Form.Group controlId="sendButton">
                  <ThemedButton
                    className="w-100"
                    type="submit"
                    size="lg"
                    variant="dark"
                    role="button"
                    disabled={isSubmitting}
                  >
                    Send Mail
                  </ThemedButton>
                </Form.Group>
                {/* This is to view form data */}
                {/* <pre className="text-left">{JSON.stringify(values, null, 2)}</pre> */}
              </FormikForm>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </>
  );
};

export default ContactForm;
