import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
    const [contactState, setContactState] = useState({ name: "", email: "", message: ""});
    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = contactState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log("Submit contact", contactState);
        }
    };

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Invalid email");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage("");
            }
        }
        
        if (!errorMessage) {
            setContactState({ ...contactState, [e.target.name]: e.target.value});
            console.log('Handle contact', contactState);
    }
}
    return (
        <section id="contact">
          <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-message">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className="sub-btn">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;