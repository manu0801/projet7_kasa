import React, {useState} from 'react';
import NextArrow from "../../assets/carrousel/NextArrow.svg";
import PreviousArrow from "../../assets/carrousel/PreviousArrow.svg";
import '../fiche logement/ficheLogement.css';

function FicheLogement({ images }) {
    const [current, setCurrent] = useState();
    const length = images.length
    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current +1)
    }
    const previousSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }
    if (!Array.isArray(images) || length <= 0) {
        return null
    }
    return (
        <div className='ficheLogement'>
            {length > 1 && (
                <img
                    src={PreviousArrow}
                    className='previousArrow'
                    onClick={previousSlide}
                    alt="Previous Arrow"
                />
            )}
            {length > 1 && (
                <img
                    src={NextArrow}
                    className='nextArrow'
                    onClick={nextSlide}
                    alt="Next Arrow"
                />
            )}
            {
                images.map((slider, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'}
                        key={`slider-{$index}`}>
                            {index === current && (
                                <img
                                    src={slider}
                                    alt={'slide' + (parseInt(index) + 1)}
                                />
                            )}
                        </div>
                    )
                })
            }

        </div>
    )
}

export default FicheLogement