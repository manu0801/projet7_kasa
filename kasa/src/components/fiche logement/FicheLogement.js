import React from 'react';
import { useParams } from 'react-router-dom';
import housings from '../../datas/logement.json';
import Collapse from '../collapse/Collapse';
import Gallery from '../gallery/Gallery';
import RatingScale from './Rating';
import ErrorPage from '../error/ErrorPage'
import '../fiche logement/ficheLogement.css';

const HousingFile = () => {
    const { id } = useParams()
    const housing = housings.find(housing => housing.id === id)
    if (housing === undefined) {     
        return (
            <ErrorPage/>
        )    
    }
    return (
        <section key={housing.id} className='housing_page'>
            <Gallery 
                img={housing.pictures} 
            />
            <header className='housing_header'>
                <article className='housing_header_infos'>
                    <h1 className='housing_header_title'>{housing.title}</h1>
                    <h2 className='housing_header_subtitle'>{housing.location}</h2>
                    <div className='housing_header_tags'>
                        {housing.tags.map((tag, i) => (
                            <p key={i} className='housing_header_tags__tag'>{tag}</p>
                        ))}
                    </div>
                </article>            
                <article className='housing_hoster'>
                    <div className='housing_hoster_infos'>
                        <p className='housing_hoster_name'>{housing.host.name}</p>
                        <img src={housing.host.picture} alt='host-cover' className='housing_hoster_img'/>
                    </div>
                    <RatingScale
                        scaleValue={housing.rating}
                    />
                </article>
            </header>
            <article className='housing_collapses'>
                <div className='housing_collapses_content'>
                    <Collapse
                        title='Description'
                        content={housing.description}
                    />
                </div>
                <div className='housing_collapses_content'>
                    <Collapse 
                        title='Équipements'
                        content={housing.equipments.map((equipment, i) => (
                            <ul key={i}>
                                <li>• {equipment}</li>
                            </ul>
                        ))}
                    />
                </div>
            </article>        
        </section>
    )
}

export default HousingFile;