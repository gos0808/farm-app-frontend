import './ImageComponent.css';
import { NewSliders } from '../NewSliders/NewSliders.js';

export const ImageComponent = ({ image, name, text, season, homeTextBlock, homeTextColorStyle, eventStyle }) => {

    return (
        <div className={`container farm-container ${homeTextBlock || null}`}>
            <NewSliders images={image} name={name} eventStyle={eventStyle || null} />
            <div className={`text farm-text ${homeTextColorStyle || null}`}>
                <h1>{name || null}</h1>
                <p>{text}</p>
                {season &&
                    <p>We're waiting for you in:
                        <span className='opening-time'> {season}
                        </span>
                    </p>}
            </div>
        </div >
    );
};