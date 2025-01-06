import { useForm, ValidationError } from "@formspree/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import {saveOrder} from '../../FetchingData/FetchingOrders'

// import SendConfirmation from "../../Components/Form/SendConfirmation";
import { removeAllFromCart, getCart } from "../../redux/cartSlice";

const Order = () => {
    const [state, handleSubmit] = useForm('xqazanlv');

    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    const cart = useSelector(getCart)
    const { user } = useAuth0();

    const trimmedId = user?.sub?.includes("|") ? user.sub.split("|")[1].trim() : null;

    const sendOrder = () => {
        cart.forEach((cartItem) => {
            saveOrder({
                orderId: cartItem.productId,
                quantity: cartItem.quantity,
                totalPrice: cartItem.totalPrice,
                userId: trimmedId
            })
        })
        dispatch(removeAllFromCart());
        navigate('/payment');
    };

    // if (state.succeeded) {
    //     return (
    //         <SendConfirmation
    //             title={'Your pre-order'}
    //             text={`Thank you! Your pre-order has been accepted. 
    //         Our team will contact you soon.`}
    //         />
    //     );
    // }

    return (
        <div>
            <h1>Your order</h1>
            <p>Please, leave your phone number so we can contact you regarding delivery.</p>
            <p>Additionally, feel free to leave any comments or special instructions about your order.
            </p>
            <form method="POST" onSubmit={handleSubmit} className="form">

                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting} onClick={sendOrder}>
                    Pay
                </button>

                <ValidationError className="formErrors" errors={state.errors} />
            </form>
        </div >
    );
};

export default Order;