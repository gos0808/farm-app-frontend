// import { getCart } from "../../redux/cartSlice";
// // import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";

// const ChangeQuantity = ({ quantity, setQuantity }) => {


    // const dispatch = useDispatch();
    // const cart = useSelector(getCart);
    // const quantity = cart[0].quantity;

    // const addQuantity = () => {
    //     setQuantity(quantity + 1);
    // };

    // const removeQuantity = () => {
    //     if (quantity === 1) return;
    //     setQuantity(quantity - 1);
    // };


    // const addQuantity = () => {
    //     dispatch(addQuantity(quantity + 1));
    // };

    // const removeQuantity = () => {
    //     if (quantity === 1) return;
    //     dispatch(removeQuantity(quantity - 1));
    // };

//     return (<div className='quantity'>
//         <button onClick={addQuantity}>+</button>
//         <p>{quantity}</p>
//         <button onClick={removeQuantity}>-</button>
//     </div>);
// };

// export default ChangeQuantity;