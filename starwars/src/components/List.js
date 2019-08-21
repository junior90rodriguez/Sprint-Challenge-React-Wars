import React from 'react';
import Characters from './Characters';

const List = function(props) {
    return(
        <div>
            <h1>Characters</h1>
            {props.characters.map(character => {
                return <Characters key={character.created}
                char ={character} name={props.characters.name}
                />
            })}
        </div>
    );
};

export default List;