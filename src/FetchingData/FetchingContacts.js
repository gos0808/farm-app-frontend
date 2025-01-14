import axios from 'axios';

export const saveContact = ({ name, email, message, userId }) => {
    axios.post('https://farm-app-backend-1.onrender.com/saveContact',
    // axios.post('130.61.33.105:8000/saveContact', 
               { name, email, message, userId });
};
