import React from 'react';
import {Character} from "../Character/character";

export const Characters = () => {
        let array = [{
        id: 1,
        name: 'Rick Sanchez',
        gender: "Male",
        origin: "Earth (C-137)",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"},
            {
            id: 2,
            name: 'Morty Smith',
            gender: "Male",
            origin: "unknown",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        },{
            id: 3,
            name: 'Summer Smith',
            gender: "Female",
            origin: "Earth",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        },{
            id: 4,
            name: 'Beth Smith',
            gender: "Female",
            origin: "Earth",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
        },{
            id: 5,
            name: 'Jerry Smith',
            gender: "Male",
            origin: "Earth",
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
        },{
            id: 17,
            name: 'Annie',
            gender: "Female",
            origin: "Earth (C-137)",
            image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg"
        }
]
    return (
        <div>
            {
                array.map((char)=>{
                    return(
                        <div>
                            <Character id={char.id}
                                       name={char.name}
                                       gender={char.gender}
                                       origin={char.origin}
                                       image={char.image}></Character>
                        </div>
                        )


                })
            }
        </div>
    );
};

