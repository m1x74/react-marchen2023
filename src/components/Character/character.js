import React from 'react';
import styles from '../styles.css'

export const Character = ({id,name,gender,origin,image}) => {
    return (
        <div className={'wrap'}>
            <h2>{id} - {name} - {gender}</h2>
            <p>{origin}</p>
            <img src={image} alt="rickand"/>
        </div>
    );
};
