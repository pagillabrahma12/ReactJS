
import axios from "axios"
import {useState, useEffect } from "react"

const UseEffectEx2=()=>{

    const[counter,setcounter]=useState(0)

    const[data,setdata]=useState([])

    useEffect(()=>{
   fetchData()
    },[])


    const fetchData=async ()=>{
       
    const result = await  axios.get("https://fakestoreapi.com/products")
    setdata(result.data.product)
    }

    return(
        <>
            <h2>UseEffectEx-2</h2>
            <h4>{counter}</h4>
            <button onClick={() => { setcounter(counter + 1) }}>Count Change</button>

            {data.length > 0 ? (
                data.map(product => <h4 >{product.title}</h4>)
            ) : (
                <h4>Loading...</h4>
            )}
        </>
    );
};

export default UseEffectEx2;
