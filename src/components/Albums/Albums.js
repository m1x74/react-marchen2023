import React, {useEffect, useState} from 'react';
import {albumService} from "../../services";
import {Album} from "../Album/Album";


export const Albums = () => {

    const [albums,SetAlbums]=useState([]);

    useEffect(()=>{
        albumService.getAll().then(({data})=>SetAlbums([...data]))
    },[])


    return (
        <div  style={{display:"flex", flexDirection:"column",rowGap:"20px"}}>
            {
                albums.map(albums=><Album key={albums.id} albums={albums}/>)
            }

        </div>
    );
};
