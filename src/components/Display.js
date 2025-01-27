import React, { useState } from 'react';

import Loading from "./Loading";
import Show from "./Show";

import fetchShow from '../api/fetchShow';
import ShowForm from './ShowForm';

const Display = (props) => {
    const [show, setShow] = useState(null);
    const [selectedSeason, setSelectedSeason] = useState("none");

    const { displayFunc, onSelectSeason } = props;
    const handleClick = (showName) => {
        fetchShow(showName).then(data => {
            setShow(data);

            if (displayFunc) {
                displayFunc(data);
            }

        });
    }
        
    const handleSelect = e => {
        setSelectedSeason(e.target.value);
        if (onSelectSeason) {
          onSelectSeason(e.target.value)
        }
    };

    return (
        <div>
            <img className="poster-img" src='http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg' alt="header image" />
            <br/>
            { !show ? <ShowForm onSubmit={handleClick} /> :<Show show={show} selectedSeason={selectedSeason} handleSelect={handleSelect}/> }
        </div>
    );
}

export default Display;