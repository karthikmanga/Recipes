import React from 'react'
const Recepie=({title,cal,img,ing})=>{
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {
                    ing.map(ing=>(
                        <li>{ing.text}</li>
                    ))
                }
            </ol>
            <p> {cal}</p>
            <img src={img}/>
        </div>
    );
}
export default Recepie