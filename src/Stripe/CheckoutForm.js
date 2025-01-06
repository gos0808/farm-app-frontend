import React from "react";
import { useState } from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [formSucceeded, setformSucceeded] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (!error) {
            console.log('Stripe 23 | token generated!', paymentMethod);
            try {
                const { id } = paymentMethod;
                // const { amount } = event.target;
                const response = await axios.post('https://farm-app-backend-1.onrender.com/stripe/charge',
                    {
                        amount: 100,
                        id
                    });

                console.log("Stripe 35 | data", response.data.success);
                if (response.data.success) {
                    console.log("CheckoutForm.js 25 | payment successful");
                    setformSucceeded(true);
                }
            } catch (error) {
                console.log("CheckoutForm.js 28 |", error);
            }
        } else {
            console.log(error.message);
        }
    };

    return (
        <>
            {!formSucceeded ?
                <>
                    <form onSubmit={handleSubmit} style={{ maxWidth: 500 }}>
                    <h1>Payment</h1>
                        <p>For test payment you can use card number 4242 4242 4242 4242, any expiry future date, any CVV and any ZIP</p>
                        <CardElement />                       <button>Pay</button>

                    </form>
                </>
                :
                <div>
                    <h2>Your payment was successful</h2>
                    <p>Thank you! Your order has been accepted.
                        Our team will contact you soon.</p>
                </div>
            }

        </>
    );
};