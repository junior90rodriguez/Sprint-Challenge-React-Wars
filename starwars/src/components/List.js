import React from 'react';
import Characters from './Characters';

const List = function(props) {
    return(
        <div>
            <h2>Characters</h2>
            {props.characters.map(character => {
                return <Characters key={character.created}
                char ={character} name={props.characters.name}
                />
            })}
        </div>
    );
};

export default List;