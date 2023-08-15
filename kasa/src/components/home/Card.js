import "./Card.css";
import React from "react";

const Card = ({ id, title, cover }) => {
return (
    <li key={id} className="home">
    <a href={"/housing/" + id}>
        <figure className="home_figure">
        <img src={cover} alt={title} className="home_cover" />
        <figcaption className="home_figcaption">
            <h2 className="home_title">{title}</h2>
        </figcaption>
        </figure>
    </a>
    </li>
);
};

export default Card;











// const Card = (props) => {
//     return (
//     <div className={classes.card}>
//         <img src={props.cover} alt={`Logement dont le titre est ${props.title}`} />
//         <p>{props.title}</p>
//     </div>
//     );
// }

