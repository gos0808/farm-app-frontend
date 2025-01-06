import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { CheckoutForm } from './CheckoutForm';

const PUBLIC_KEY = 'pk_test_51Qb5YeHaNBVD3CWbKRpwt0H2beISkUL1ByignVY4e2iviOQHr4cowT3sj8RRxvfrJ95X2kk8igp2XGAM77MJQmUs00eO4YG16M';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm />
        </Elements>
    );
};