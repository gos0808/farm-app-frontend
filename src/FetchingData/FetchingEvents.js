import axios from 'axios';

export const getEvents = (setEvents) => {
    // axios.get('https://farm-app-backend-1.onrender.com/events')
    axios.get('130.61.33.105:8000/events')
        .then(({ data }) => {
            setEvents(data);
        })
        .catch((error) => {
            console.log("Error fetching events:", error);
        });
};
