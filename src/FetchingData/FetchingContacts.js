import axios from 'axios';

export const saveContact = ({ name, email, message, userId }) => {
    axios.post('https://farm-app-backend-1.onrender.com/saveContact', { name, email, message, userId });
};