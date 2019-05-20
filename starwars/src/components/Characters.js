import React from 'react';

const Characters = function(props) {
    return(
        <div className="characters">
            <h1>{props.char.name}</h1>
            <h2>Height: {props.char.height}</h2>
            <h2>Mass: {props.char.mass} </h2>
            <h2>Hair Color: {props.char.hair_color}</h2>
            <h2>Skin Color: {props.char.skin_color}</h2>
        </div>
    );
};

export default Characters;