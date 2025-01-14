import axios from 'axios';

export const saveOrder = ({orderId, quantity, totalPrice, userId }) => {  
    // axios.post('https://farm-app-backend-1.onrender.com/saveOrder', 
    axios.post('130.61.33.105:8000/saveOrder', 
               {orderId, quantity, totalPrice, userId })
    .then(() => {
console.log("Order saved successfully", orderId );
    })
    .catch((error) => {
        console.log("Error saving data:", error);
    });
}
