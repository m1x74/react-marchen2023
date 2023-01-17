import React from 'react';
import {Simpson} from "../Simpson/simpson";

 export const Simpsons = () => {
    let array=[{url:'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',name:'Homer',info:'Homer Jay Simpson (born May 12, 1956) is a man from Springfield. He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.'},
        {url:'https://cdn.shopify.com/s/files/1/0054/4371/5170/products/FiGPiN_763MargeSimpsonTHESIMPSONSPIN.png?v=1636667368',name:'Marge',info:'Marjorie Jacqueline "Marge" Simpson (née Bouvier) is the homemaker and matriarch of the Simpson family.'},
        {url:'https://i.pinimg.com/originals/98/b3/71/98b371cd43ead599d22bb40590df8287.jpg',name:'Bart',info:'Bartholomew JoJo "Bart" Simpson (born Feburary 23 or April 1, 1980) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family.'},
        {url:'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png',name:'Lisa',info:'Lisa Marie Simpson (born May 9, 1983) is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'},
        {url:'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png',name:'Maggie',info:'Margaret Evelyn Lenny "Maggie" Simpson (born January 14, 1988) is the 1-year-old daughter and youngest child of Marge and Homer Simpson.'}]

     for (const arrayElement of array) {
         
     }
    return (
        <div>
            {
                array.map((simp)=>{
                    return(
                        <div>
                            <Simpson url={simp.url} p={simp.info} h={simp.name}></Simpson>
                        </div>
                    )
                })
            }
        </div>
    );
};

