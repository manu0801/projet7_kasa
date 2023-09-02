import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const star = <FontAwesomeIcon icon={faStar} />
const starGrey = <FontAwesomeIcon icon={faStar} />

const RatingScale = (props) => {
    const scaleValue = props.scaleValue
    const range = [1, 2, 3, 4, 5]
    return (
        <div className='housing_hoster_ratings'>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? 
                    <span key={rangeElem.toString()} className='housing_hoster_star'>{star}</span> 
                    : <span key={rangeElem.toString()} className='housing_hoster_star housing_hoster_star_grey'>{starGrey}</span>
            )}
        </div>
    )
}

export default RatingScale;