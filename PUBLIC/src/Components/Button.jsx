
import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../BaseUrl/baseUrl";


export default function Button( {el}){
    const [one , setOne] = useState()
      async function handleFilter(){
        try {
        console.log(el.id)
         const data = await axios.get(`${BaseUrl}/pub/news?filter=${el.id}&sort&page[size]=&page=&search=&authorId=`)
          setOne(data.data)
          console.log(one)
        } catch (error) {    
        }
      }

      useEffect(()=>{
        handleFilter()
      },[])
    return(
        <>
        <button onClick={handleFilter}>
            {el.name}
        </button>
        </>
    )
}