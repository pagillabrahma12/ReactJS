import { useState } from "react"
  


const UseStateEx2=()=>{
    const[Timer,setTimer]=useState(0)
    //timin events
    //1.set interval:
    //2.setTimeout:after certrain time function will run
    const HandlerTimer=()=>
{

    setInterval(()=>{
        setTimer(timer=>timer+1)
    },2000)
}
const HandlerStop=()=>{
    setTimer(0 )
}
 return(
        <>
        <h2>Current time{Timer}</h2>
        
        <button onClick={HandlerTimer} >Click to Start Timer</button>
        <button onClick={HandlerStop}>Stop</button>
        </>
    )
}
export default UseStateEx2