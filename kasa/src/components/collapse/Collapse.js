import React from 'react';
import "../collapse/Collapse.css";
import { useState } from "react";
import closedArrow from "../../assets/images/accordeon/chevron-down-solid.svg";
import openArrow from "../../assets/images/accordeon/chevron-up-solid.svg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// const closedArrow = <FontAwesomeIcon icon="fa-solid fa-chevron-up" style={{color: "#ffffff",}} />
// const openArrow = <FontAwesomeIcon icon="fa-solid fa-chevron-down" style={{color: "#ffffff",}} />




const Collapse = (props) => {
    const [ openTab, setOpenTab ] = useState(false);

    const openTabHandler = () => {
        setOpenTab((openTab) => !openTab);
    };

    return (
        <>
            <div onClick={openTabHandler} className="collapse_header">
                <h2 className="collapse_title">{props.title}</h2>
                {!openTab ? <i className="collapse_icon">{openArrow}</i> : <i className="collapse_icon">{closedArrow}</i>}
            </div>
            {openTab &&
                <div className="collapse_content">{props.content}</div>
            }
        </>
        
    )
}

export default Collapse;





