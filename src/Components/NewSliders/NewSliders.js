import { useState } from "react";

import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NewSliders = ({ images, name, eventStyle }) => {

    const [index, setIndex] = useState(0);

    const previos = () => {
        setIndex((index => {
            index--;
            if (index < 0) {
                return images.length - 1;
            }
            return index;
        }));
    };

    const next = () => {
        setIndex((index => {
            index++;
            if (index > images.length - 1) {
                index = 0;
            }
            return index;
        }));
    };

    return (
        <div className="slider">
            <img className={`farm-image ${eventStyle || null}`} src={`../../images/${images[index]}.jpg`} alt={name || 'img'} loading="lazy" />

            {images.length > 1 && (
                <>
                    <button className="arrow-btn arrow-btn-left" onClick={previos}>
                        <FontAwesomeIcon icon={faCircleArrowLeft} />
                    </button>
                    <button className="arrow-btn arrow-btn-right" onClick={next}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                    </button>
                </>
            )}
        </div>);

};