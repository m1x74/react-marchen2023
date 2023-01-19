import React from 'react';
import {styles} from './styles.css'

export const Ship = ({ship}) => {

    const {mission_name, launch_date_utc, launch_year} = ship

    return (
        <div className={'ships'}>
            <h2>{mission_name} - {launch_year}</h2>
            <h3>{launch_date_utc}</h3>
        </div>
    );
};

