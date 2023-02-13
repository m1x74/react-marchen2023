import React from 'react';
import Dog from "./Dog";

const Dogs = ({dogs,dispatch}) => {
    return (
        <div>
            {
                dogs.map(dog=><Dog id={dog.id} dog={dog} dispatch={dispatch}/>)
            }
        </div>
    );
};

export default Dogs;