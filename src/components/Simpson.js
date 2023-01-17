import React from 'react';
import styles from './styles.css'

export const Simpson = ({url, h, p}) => {
    return (
        <div className={'wrap'}>
            <h2>{h}</h2>
            <p>{p}</p>
            <img src={url} alt="simpson"/>
        </div>
    );
};

