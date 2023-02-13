import React from 'react';

const Cat = ({cat,dispatch}) => {
    const {id,name}=cat
    return (
        <div>
            {id}-{name}
            <button onClick={()=>dispatch({type:'DELETE_CAT',payload:id})}>DELETE</button>
        </div>
    );
};

export default Cat;