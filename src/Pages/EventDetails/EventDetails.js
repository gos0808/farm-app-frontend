import { useLocation } from 'react-router-dom';

// import { EventsData } from '../../Data/events.js'; //frontend data
import { ImageComponent } from "../../Components/ImageComponent/ImageComponent";
import '../../App.css';

export const DetailedPage = () => {
    const location = useLocation();
    const event = location.state.event;

    return (
        <div className='container'>
            <div key={event._id}>
                        <ImageComponent
                            image={event.image}
                            name={event.name}
                            text={event.description}
                            season={event.season}
                            eventStyle={'event-style'}
                        />
                    </div>
        </div>
    );
};