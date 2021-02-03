//TODO: hide form on submit?

import React, { useRef, useState } from "react";
import { Formik, Form as FormikForm, FieldHookConfig, useField } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReCAPTCHA from "react-google-recaptcha";
import {
  AMProps,
  sKey,
  schema,
  LabelProps,
  validSubjects,
} from "@helpers/ContactHelper";
import { sendEmail } from "@util/API";
import Collapse from "react-bootstrap/Collapse";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import ThemedButton from "@components/ThemedButton";

// My Custom Form Control
type Props = React.ComponentProps<typeof Form.Control> &
  FieldHookConfig<string>;

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
const FieldLabel: React.FC<LabelProps> = (props) => {
  const { label, type, name, subtext } = props;
  return (
    <Form.Label>
      <h5>
        {label} <FontAwesomeIcon icon={[type, name]} />
      </h5>
      {subtext ? ` ${subtext}` : ""}
    </Form.Label>
  );
};

const AlertMessage: React.FC<AMProps> = (props) => {
  return (
    <Collapse in={props.show} unmountOnExit>
      <div className="animate__animated animate__fadeIn animate__faster">
        <Alert
          show={props.show}
          variant={props.type}
          onClose={() => props.parentFunction(false)}
          dismissible
        >
          <Alert.Heading>{props.title}</Alert.Heading>
          {props.long_msg === "NONE" ? <></> : <p>{props.long_msg}</p>}
        </Alert>
      </div>
    </Collapse>
  );
};

/** The Contact Form Component */
const ContactForm: React.FC = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [display, setDisplay] = useState<boolean>(false);
  const [type, setType] = useState<string>("success");
  const [longMsg, setLongMsg] = useState<string>("NONE");
  const [title, setTitle] = useState<string>("Test");

  return (
    <>
      <AlertMessage
        parentFunction={setDisplay}
        show={display}
        title={title}
        long_msg={longMsg}
        type={type}
      />
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
              setDisplay(false);
              setSubmitting(true);
              const captcha = recaptchaRef.current?.getValue();
              const mail = { ...data, captcha };

              try {
                const res = await sendEmail(mail);
                // console.log(res);
                setType("success");
                setTitle(res.data.title);
                setLongMsg(res.data.long_msg);
                setDisplay(true);
              } catch (error) {
                setType("danger");
                if (error.response) {
                  // response error
                  setTitle(error.response.data.title);
                  setLongMsg(error.response.data.long_msg);
                } else if (error.request) {
                  // request error
                  setTitle("Request Error");
                  setLongMsg(error.message);
                } else {
                  setTitle("Error");
                  setLongMsg(error.message);
                }
                setDisplay(true);
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
                    <Form.Group className="CustFG" controlId="NameInput">
                      <FieldLabel label="Name" type="fas" name="user" />
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
                    <Form.Group className="CustFG" controlId="EmailInput">
                      <FieldLabel label="Email" type="fas" name="envelope" />
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
                <Form.Group controlId="MessageSelect" className="CustFG">
                  <FieldLabel
                    label="Subject"
                    type="fas"
                    name="question-circle"
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
                <Form.Group className="CustFG" controlId="MessageInput">
                  <FieldLabel label="Message" type="fas" name="comment" />
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
