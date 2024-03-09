
import axios from "axios";
import { useState, useEffect } from "react";
import "./task.css"

const ChangeTask=()=>{
    const[count,setcount]=useState(1)
    const[data,setdata]=useState([])


    useEffect(()=>{
        FetchData()
    },[count])

    const FetchData=async()=>{
        const result=await axios.get(`https://fakestoreapi.com/products/${count}`)
        setdata([result.data])
        console.log(result.data)

    }
    const HandlerIncrement=()=>{
        setcount(count+1)
    }

    return(
        <>
        <div className="container">
            {
                data.map((item)=>{
                    return(
                        <div>
                            <img src={item.image} width={250} height={250} />
                           <h4>Price:₹{item.price}</h4>
                            <h4>Title:{item.title}</h4>
                            <h4>Description:{item.description}</h4>
                        </div>
                    )
                })
            }
            <h2>count-{count}</h2>
            <button onClick={HandlerIncrement}>Next</button>


        </div>      
        </>
    )

}
export default ChangeTask 
