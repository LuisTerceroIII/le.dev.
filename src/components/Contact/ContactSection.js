import React, {useRef } from 'react';
import ContactView from "./ContactView";
import emailjs from '@emailjs/browser';
const ContactSection = () => {
    const form = useRef();

    const sendEmail = (data,e) => {

        console.log(data)
        emailjs.sendForm('service_u2gx8mk', 'le.dev.', form.current, 'YzVbZxgxspSW6djNK')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <ContactView sendEmail={sendEmail} refForm={form}/>
    );
};

export default ContactSection;