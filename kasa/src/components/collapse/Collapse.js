import React from 'react';
import "../collapse/Collapse.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const closedArrow = <FontAwesomeIcon icon={faChevronUp} />
const openArrow = <FontAwesomeIcon icon={faChevronDown}/>

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





