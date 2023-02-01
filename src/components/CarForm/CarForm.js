import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {styles} from '../style.css'
import {carService} from "../../services";
import {carValidator} from "../../validators";

export const CarForm = ({setNewCar,carForUpdate,setCarForUpdate,setUpdateCar}) => {
    const{register,handleSubmit,reset,formState:{errors,isValid},setValue}=useForm({
        mode:'all',
        resolver:joiResolver(carValidator)
    })

    useEffect(()=>{
        if (carForUpdate){
            const {brand,price,year}=carForUpdate;
            setValue('brand', brand);
            setValue('price', price);
            setValue('year', year);
        }
    },[carForUpdate]);

    const mySubmit=async(car)=>{
        try {
            if (carForUpdate){
                const {data}=await carService.updateById(carForUpdate.id,car);
                setUpdateCar(data);
                setCarForUpdate(false);
            }else{
                const {data} = await carService.create(car);
                setNewCar(data);
            }
            reset()
        }catch (e){

        }

    }

    return (
        <form className={'form'} onSubmit={handleSubmit(mySubmit)}>
            <input type={"text"} placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type={"text"} placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type={"text"} placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button className={'btn1'}>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

