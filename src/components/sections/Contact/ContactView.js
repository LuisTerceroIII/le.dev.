import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import ClockLoader from "react-spinners/ClockLoader";

const ContactView = ({
  sendEmail,
  refForm,
  sendingEmail,
  errorSendingEmail,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section className={"contact-container"}>
      <h2 className={"about-me-title"}>Contact</h2>
      <form
        ref={refForm}
        onSubmit={handleSubmit(sendEmail)}
        className={"form-contact"}
      >
        <TextField
          type={"text"}
          label={"Your name"}
          variant="outlined"
          color="secondary"
          name={"completeName"}
          {...register("completeName", { required: "Must include" })}
        />
        {errors.completeName?.type === "required" &&
          "Name is required, thanks 😜"}
        <TextField
          type={"text"}
          label={"Email"}
          variant="outlined"
          color="secondary"
          name={"email"}
          {...register("email", {
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
          })}
        />
        {errors.email?.type === "required" &&
          "E-mail is required 😀"}
        {errors.email?.type === "pattern" &&
            "Please check that you have entered a valid address 👀"}
        <TextField
          type={"text"}
          label={"Subject"}
          variant="outlined"
          color="secondary"
          name={"subject"}
          {...register("subject", { required: true })}
        />
        {errors.subject?.type === "required" && "Subject is required 📧"}
        <TextField
          type={"text"}
          label={"Message"}
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          name={"message"}
          {...register("message", {
            required: true,
            minLength: {
              value: 20,
              message: "Are you sure you don't want to say something else ? 😝",
            },
          })}
        />
        {errors.message?.type === "required" &&
          "Are you sure you don't want to say something ? 😄"}
        {errors.message?.type === "minLength" &&
          "Are you sure you don't want to say something else ? 👀"}
        {sendingEmail ? (
          <ClockLoader
            color={"#9C27B0"}
            loading={sendingEmail}
            size={50}
            css={
              " display: block;\n" +
              "  margin: 0 auto;\n" +
              "  border-color: red;"
            }
          />
        ) : (
          <button type={"submit"} className={"contact-button"}>
            Send
          </button>
        )}
        {errorSendingEmail ? (
          <p className={"contact-error-sending-email"}>
            Error connecting with server 💥
          </p>
        ) : (
          ""
        )}
      </form>
    </section>
  );
};

export default ContactView;
