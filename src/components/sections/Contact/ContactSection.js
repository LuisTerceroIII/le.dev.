import React, { useRef, useState } from "react";
import ContactView from "./ContactView";
import emailjs from "@emailjs/browser";
const ContactSection = () => {
  const form = useRef();
  const [sendingEmail, setSendingEmail] = useState(false);
  const [errorSendingEmail, setErrorSendingEmail] = useState(false);

  const sendEmail = (data, e) => {
    setSendingEmail(true);
    emailjs
      .sendForm("service_u2gx8mk", "le.dev.", form.current, "YzVbZxgxspSW6djNK")
      .then(
        (result) => {
          setSendingEmail(false);
          setErrorSendingEmail(false);
          e.target.reset();
        },
        (error) => {
          console.log(error);
          setErrorSendingEmail(true);
          setSendingEmail(false);
        }
      );
  };

  return (
    <ContactView
      sendEmail={sendEmail}
      refForm={form}
      sendingEmail={sendingEmail}
      errorSendingEmail={errorSendingEmail}
    />
  );
};

export default ContactSection;
