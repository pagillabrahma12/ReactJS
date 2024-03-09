
import { useState,useEffect } from "react"


const UseEffectEx3=()=>{
    const[count,setcount]=useState(0)

    useEffect(()=>{
        DomManipulation()
    },[count])
   
    const DomManipulation=()=>{
        document.title=`Current Count ${count}`
    }
    return(
        <>
        <h2>UseEffect-3</h2>
        <h3>Current Count -{count}</h3>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        
        
        </>



    )



}
export default UseEffectEx3