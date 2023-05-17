import axios from "axios"

const url ='https://rickandmortyapi.com/api/character'
export const findAll= async()=>{
    return await axios.get(url);

}