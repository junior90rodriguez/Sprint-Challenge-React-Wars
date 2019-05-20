import React from 'react';

const List = function(props) {
    return(
        <div>
            <h2>Characters</h2>
            {props.characters.map(character => {
                return <Character key={character.created}
                item ={character} name={props.characters.name}
                />
            })}
        </div>
    );
};

export default List;