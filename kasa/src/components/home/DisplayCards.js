import React from 'react';
import housings from '../../datas/logement.json';
import Card from './Card';
import "./DisplayCards.css";

const DisplayCards = () => {
    return(
        <section className='home_container'>
            <ul className='home_list'>
                {housings.map(({ id, title, cover }) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    )
}

export default DisplayCards;