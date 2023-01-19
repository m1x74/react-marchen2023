import React, {useEffect, useState} from 'react';
import {Ship} from "../Ship/Ship";
import {spaceService} from "../../services";

const Ships = () => {

    const [ship, setShip] = useState([]);

    useEffect(() => {
        spaceService.getAll().then(value => value.data).then(value => setShip([...value]))
    }, [])

    return (
        <div>
            {ship.filter(item => item.launch_year !== '2020')
                .map(ship => <Ship key={ship.mission_name} ship={ship}/>)
            }
        </div>
    );
};

export default Ships;