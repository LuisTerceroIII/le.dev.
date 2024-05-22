import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import HashLoader from "react-spinners/HashLoader";
import Button from "../../../components/Atoms/button/Button";

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
					color="warning"
					focused
					name={"completeName"}
					sx={{ input: { color: 'orange' } }}
					{...register("completeName", { required: "Must include" })}
				/>
				{errors.completeName?.type === "required" &&
					"Name is required, thanks 😜"}
				<TextField
					type={"text"}
					label={"Email"}
					variant="outlined"
					color="warning"
					focused
					name={"email"}
					{...register("email", {
						required: true,
						pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
					})}
					sx={{ input: { color: 'orange' } }}
				/>
				{errors.email?.type === "required" &&
					"E-mail is required 😀"}
				{errors.email?.type === "pattern" &&
					"Please check that you have entered a valid address 👀"}
				<TextField
					type={"text"}
					label={"Subject"}
					variant="outlined"
					color="warning"
					focused
					name={"subject"}
					{...register("subject", { required: true })}
					sx={{ input: { color: 'orange' } }}
				/>
				{errors.subject?.type === "required" && "Subject is required 📧"}
				<TextField
					type={"text"}
					label={"Message"}
					variant="outlined"
					color="warning"
					focused
					multiline
					rows={4}
					name={"message"}
					sx={{ textarea: { color: 'orange' } }}
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
					<HashLoader
						color={"#b77909"}
						loading={sendingEmail}
						size={50}
						css={
							" display: block;\n" +
							"  margin: 0 auto;\n" +
							"  border-color: red;"
						}
					/>
				) : (
					<Button className={"button contact-button"} text={"Send"} />
				)}
				{errorSendingEmail ? (
					<p className={"contact-error-sending-email"}>
						Error connecting to the server.<br></br>Please contact me at luis.espinoza.nav@live.com
					</p>
				) : (
					""
				)}
			</form>
		</section>
	);
};

export default ContactView;
