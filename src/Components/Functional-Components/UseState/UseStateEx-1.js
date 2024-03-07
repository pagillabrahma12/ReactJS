  
import { useState } from "react"

  //in react  we can use the clourse concept while we declering useState this variable can  used internal in any function
 //we can assigin value directly to useState we shoukld use only setcount method in below 
  const UseStateEx1=()=>{
    const[count,setcount]=useState(0) //we can write any datatype in 0 place

    const HandleIncrement=(value)=>{
    setcount(count+1) //(count+value )can be taken
    //suppose if we take  
    //setState(sai=>sai+1)
    //setState(sai=>sai+1)
    //setState(sai=>sai+1) it takes increment as 3 times
    }
    const HandleDecrement=(value)=>{
        setcount(count-1) //(count+value )can be taken
        }
        const ResetHandler=()=>{
            setcount(0)
        }

    return(
        <>
        
        <h2>{count}</h2>
        <button onClick={()=>HandleIncrement(1)}>Increment</button>
        <button onClick={()=>HandleDecrement(1)}>Decrement</button>
        <button onClick={ResetHandler}>Reset</button>
        </>
    )
  }
  export default UseStateEx1