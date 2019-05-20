import React from 'react';

const Characters = function(props) {
    return(
        <div className="characters">
            <h2>{props.char.name}</h2>
            <h3>Height: {props.char.height}</h3>
            <h3>Mass: {props.char.mass} </h3>
            <h3>Hair Color: {props.char.hair_color}</h3>
            <h3>Skin Color: {props.char.skin_color}</h3>
        </div>
    );
};

export default Characters;