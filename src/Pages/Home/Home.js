import './Home.css';
import '../../App.css';

import { useState, useEffect } from 'react';
// import { EventsData } from '../../Data/events.js';//frontend data
import { useNavigate } from 'react-router-dom';
import { ImageComponent } from "../../Components/ImageComponent/ImageComponent";
import { getEvents } from "../../FetchingData/FetchingEvents";


export const Home = () => {

    // const [events] = useState(EventsData); //frontend data
    const [events, setEvents] = useState([]); //backend data


    useEffect(() => {
        getEvents(setEvents);
    }, []);

    const navigate = useNavigate();

    const handleClick = (event) => {
        const name =
            event.name
                .replace(/\s+/g, '-')
                .toLowerCase();

        navigate(`/details/${name}`, { state: { event: event } });
    };

    return (
            <div
                className='home-container' >

                <div className='events '>
                    {events.map((event) => {
                        const { _id, name, image } = event;
                        return (
                            <div key={_id}>
                                <div className='image-container '>
                                    <img
                                        className={'image-container event-image'}
                                        src={`../../images/${image[0]}.jpg`}
                                        name={name}
                                        alt={name}
                                        onClick={() => handleClick(event)}
                                    />
                                </div>

                                <h2 className='event-name'> {name}</h2>
                            </div>
                        );
                    })}
                </div>
                <ImageComponent
                    image={['main-image']}
                    text={`Blue Sky Farm is a 100-acre, fifth-generation family-owned and operated farm located in the picturesque plains of Saskatchewan, renowned for its breathtaking "living skies." The expansive skies of Saskatchewan provide a stunning backdrop to our fields, offering a daily display of vibrant sunsets.
                
                We grow various vegetables, fruits, berries,  mushrooms and flowers, and sell our produce on the farm.`}
                    homeTextColorStyle={'home-text-color'}
                    homeTextBlock={'home-text-block'}
                />
            </div >
        )
};