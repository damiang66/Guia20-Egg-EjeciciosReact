import { useEffect, useState } from "react"
import { Cards } from "./Cards"
import { findAll } from "./service/Service"

export const ListaCards=()=>{
    const[personajes,setPersonajes]=useState([])
    const traer = async()=>{
        const respuesta = await findAll();
        console.log(respuesta.data.results);

        setPersonajes(respuesta.data.results);
    }
    useEffect(()=>{
traer()
    },[])
    return (<>
     <div className="album py-5 bg-body-tertiary">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
                      {personajes.map(m=>(<Cards m={m} key={m.id}/>))}
                    </div>
                </div>
            </div>
        </>
    )
}