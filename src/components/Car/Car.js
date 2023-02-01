import React from 'react';

import {styles} from '../style.css'
import {carService} from "../../services";

export const Car = ({car,setCarForUpdate,setDeletedCar}) => {
    const {id,brand,price,year} = car;

    const deleteCar=async ()=>{
        await carService.deleteById(id);
        setDeletedCar(id);
    }

    return (
        <div className={'car'}>
            <div>ID:{id}</div>
            <div>Brand:{brand}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <button className={'btn'} onClick={()=>setCarForUpdate(car)}>UPDATE CAR</button>
            <button className={'btn'} onClick={()=>deleteCar()}>DELETE CAR</button>

        </div>
    );
};
