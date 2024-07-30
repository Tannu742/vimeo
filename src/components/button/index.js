import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Button = ({ head, link = '#', classname }) => {
    return (
        <div className={`positionRelative button ${classname}`}>
            <a href={link}>{head}</a>
            <div className="insideBtn" >
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </div>
    );
}

export default Button;
