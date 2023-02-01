import React, {useEffect, useState} from 'react';
import {carService} from "../../services";
import {Car} from "../Car/Car";
import {styles} from '../style.css';

export const Cars = ({newCar,setCarForUpdate,updateCar}) => {

    const [cars, setCars] = useState([]);
    const [deletedCar,setDeletedCar]=useState(null);

    useEffect(()=>{
        carService.getAll().then(({data})=>setCars([...data]))
    },[newCar,updateCar,deletedCar]);

    useEffect(()=>{
            if (newCar){
                setCars(prevState => [...prevState,newCar])
            }if (deletedCar){
                setCars(cars.filter(car=>car.id !==deletedCar))
        }
    },[newCar,deletedCar])

    useEffect(()=>{
        if (updateCar){
            const car = cars.find(car=>car.id===updateCar.id);
            Object.assign(car,updateCar);
            setCars([...cars])
        }
    },[updateCar]);




    return (
        <div className={'wrapcars'}>
            {
                cars.map(car=><Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setDeletedCar={setDeletedCar}/>)
            }
            
        </div>
    );
};

