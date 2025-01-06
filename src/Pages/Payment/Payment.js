import { StripeContainer } from '../../Stripe/StripeContainer';

export const Payment = () => {

    return (
        <div className='payment-container'>      
            <div className='stripe-container'>
                <StripeContainer />
            </div>


        </div>

    );
};