import axios from 'axios';

export const getEvents = (setEvents) => {
    axios.get('https://farm-app-backend-1.onrender.com/events')
        .then(({ data }) => {
            setEvents(data);
        })
        .catch((error) => {
            console.log("Error fetching events:", error);
        });
};
