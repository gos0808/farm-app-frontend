// import { useForm, ValidationError } from "@formspree/react";//sends information to email
import { useState } from "react";
import SendConfirmation from "./SendConfirmation";
import { saveContact } from '../../FetchingData/FetchingContacts';

import "./Form.css";

export const Form = () => {
    // const [state, handleSubmit] = useForm('xqazanlv');
    const [formSucceeded, setformSucceeded] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        try {
            saveContact({ name, email, message });
            setformSucceeded(true);

        } catch (error) {
            console.log("Error saving contact form", error);
            setformSucceeded(false);
        }
    };

    if (formSucceeded) {
        return (
            <SendConfirmation
                title="Contact us"
                text="Thank you for your submission!"
            />
        );
    }

    return (
        <div>
            <h1>Contact us</h1>

            <form method="POST" onSubmit={handleSubmit} className="form">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" name="name" required />
                {/* <ValidationError
                    prefix="Name"
                    field="name"
                    className="fieldErrors"
                    errors={state.errors}
                /> */}

                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" required />
                {/* <ValidationError
                    prefix="Email"
                    field="email"
                    className="fieldErrors"
                    errors={state.errors}
                /> */}

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
                {/* <ValidationError
                    prefix="Message"
                    field="message"
                    className="fieldErrors"
                    errors={state.errors}
                /> */}

                <button type="submit" >
                    Submit
                </button>


                {/* <ValidationError className="formErrors" errors={state.errors} /> */}
            </form>
        </div>
    );
};